var express = require('express');
var router = express.Router();
var xml = require('../models/xml');
var db = require('../models/db');
var utils = require('../models/utils');
var multer = require('multer');
var path = require('path');
var uuid = require('uuid');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var io = require('../models/socketio');

//项目管理project
router.post('/getModuleList', function(req, res, next) {
	xml.getModuleList(function(result){
		if(result.status == 0){
			var json = {'status':'0','msg':'获取模块列表失败！','err':result.error};
			console.log(json);
			res.json(json);
		}else if(result.status == 1){
			var json = {'status':'1','msg':'获取模块列表成功！','data':result.data};
			console.log({'status':'1','msg':'获取模块列表成功！'});
			res.json(json);
		}
	});
});
router.post('/newModule', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'创建模块失败！','err':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        console.log('newModule:');
        console.log(req.body);

        var module = req.body;

        xml.newModule(module, function(result){
            if(result.status == 0){
                var json = {'status':'0','msg':'创建模块失败！','err':result.error};
                console.log(json);
                res.json(json);
            }else if(result.status == 1){
                var json = {'status':'1','msg':'创建模块成功！'};
                console.log(json);
                res.json(json);
            }
        });

    }
});
router.post('/editModule', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'编辑模块失败！','err':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        console.log('editModule:');
        console.log(req.body);

        var index = req.body.index;
        var project = req.body;

        xml.editModule(index, project, function(result){
            if(result.status == 0){
                var json = {'status':'0','msg':'编辑模块失败！','err':result.error};
                console.log(json);
                res.json(json);
            }else if(result.status == 1){
                var json = {'status':'1','msg':'编辑模块成功！'};
                console.log(json);
                res.json(json);
            }
        });

    }
});
router.post('/moduleDelete', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'删除模块失败！','err':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        console.log('moduleDelete:');
        console.log(req.body);

        var index = req.body.index;

        xml.moduleDelete(index, function(result){
            if(result.status == 0){
                var json = {'status':'0','msg':'删除模块失败！','err':result.error};
                console.log(json);
                res.json(json);
            }else if(result.status == 1){
                var json = {'status':'1','msg':'删除模块成功！'};
                console.log(json);
                res.json(json);
            }
        });

    }
});


/* patient dao */
router.post('/getPatientList', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取病历列表失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        var sql = 'SELECT a.*,b.* '+
            'FROM '+ req.body.moduleID + '_00_info AS a ' +
            'LEFT JOIN ' + req.body.moduleID + '_records AS b ' +
            'ON a.binglihao=b.binglihao';
        db.query(sql, function(err, result) {
            if (err) {
                console.log(err);
                var json = {'status':'0','msg':'获取病历列表失败！','error':err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status':'1','msg':'获取病历列表成功！','data':result};
            console.log({'status':'1','msg':'获取病历列表成功！'});
            res.json(json);
        });
    }
});

router.post('/newPatient', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'新建病历失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        console.log('newPatient:');
        console.log(req.body);

        var moduleID = req.body.moduleID;
        var patient = req.body;
        delete patient.moduleID;
        patient.fenzu = utils.GetRandomNum(1,2);
        patient.status = 0;


        //获取id
        var idsql = 'SELECT MAX(binglihao) FROM ' + moduleID + '_00_info';
        db.query(idsql, function(err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '新建病历失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }

            var binglihao = result[0]['MAX(binglihao)']+1;

            //插入主表
            var sql = 'INSERT INTO ' + moduleID + '_00_info SET binglihao=' + binglihao + ', ';
            Object.keys(patient).forEach(function(key, index){
                sql += key + '="' + patient[key] + '"';
                if(index < Object.keys(patient).length-1){
                    sql += ',';
                }
            });
            db.query(sql, function(err,result){
                if(err){
                    console.log(err);
                    var json = {'status':'0','msg':'新建病历失败！','error':err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                // 初始化基本资料
	            var initSql = 'INSERT INTO ' + moduleID + '_01_jbzl SET binglihao=' + binglihao + ', name="' + patient.name + '", sex="' + patient.sex + '", age="' + patient.age + '"';
	            db.query(initSql, function(err, result) {
		            if (err) {
			            console.log(err);
			            return;
		            }
	            });

                //插入操作记录
                var recordsql = 'INSERT INTO ' + moduleID + '_records SET binglihao=' + result.insertId + ',opstaff="' + req.session.user.username + '",optype="0",optime="' + utils.getDate() + '",addtime="' + utils.getDate() + '"';
                db.query(recordsql, function(err) {
                    if (err) {
                        console.log(err);
                        var json = {'status': '0', 'msg': '新建病历成功！但无法添加操作记录！', 'error': err};
                        console.log(json);
                        res.json(json);
                        return;
                    }

                    var json = {'status':'1','msg':'新建病历成功！','fenzu':patient.fenzu};
                    console.log(json);
                    res.json(json);

                    io.emit('patientListUpdate', '病例列表更新');
                });

            });
        });


        //检查病历号是否存在
        // var selectsql = 'SELECT binglihao FROM ' + moduleID + '_00_info WHERE binglihao=' + patient.binglihao;
        // db.query(selectsql, function(err, result){
        //     if(err){
        //         console.log(err);
        //         var json = {'status':'0','msg':'新建病历失败！','error':err};
        //         console.log(json);
        //         res.json(json);
        //         return;
        //     }
        //     if(result.length>0){//该病历号已存在
        //         var json = {'status':'0','msg':'新建病历失败！','error':'病历号已存在！'};
        //         console.log(json);
        //         res.json(json);
        //     }else{
        //         //插入主表
        //         var sql = 'INSERT INTO ' + moduleID + '_00_info SET ';
        //         Object.keys(patient).forEach(function(key, index){
        //             sql += key + '="' + patient[key] + '"';
        //             if(index < Object.keys(patient).length-1){
        //                 sql += ',';
        //             }
        //         });
        //         db.query(sql, function(err){
        //             if(err){
        //                 console.log(err);
        //                 var json = {'status':'0','msg':'新建病历失败！','error':err};
        //                 console.log(json);
        //                 res.json(json);
        //                 return;
        //             }
        //
        //     //插入操作记录
        //     var recordsql = 'INSERT INTO ' + moduleID + '_records SET binglihao=' + patient.binglihao + ',opstaff="' + req.session.user.username + '",optype="0",optime="' + utils.getDate() + '",addtime="' + utils.getDate() + '"';
        //     db.query(recordsql, function(err) {
        //         if (err) {
        //             console.log(err);
        //             var json = {'status': '0', 'msg': '新建病历成功！但无法添加操作记录！', 'error': err};
        //             console.log(json);
        //             res.json(json);
        //             return;
        //         }
        //
        //         var json = {'status':'1','msg':'新建病历成功！','fenzu':patient.fenzu};
        //         console.log(json);
        //         res.json(json);
        //     });
        //
        //
        // });
        //
        //
        //     }
        // });
    }
});

router.post('/deletePatient', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'删除病历失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'DELETE FROM ' + req.body.moduleID + '_00_info WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '删除病历失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            var deletePath = path.resolve(__dirname, '..', 'public/patients', req.body.binglihao);
            rimraf(deletePath, function(err){
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '删除病历失败！需手动删除！', 'error': err};
                    console.log(json);
                    res.json(json);
                }else{
                    var json = {'status': '1', 'msg': '删除病历成功！'};
                    console.log(json);
                    res.json(json);

	                io.emit('patientListUpdate', '病例列表更新');
                }
            });
        });

    }
});

router.post('/auditApply', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'提交病历失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE ' + req.body.moduleID + '_00_info SET status="1" WHERE binglihao=' + req.body.binglihao + '';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '提交病历失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            //插入操作记录
            var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="2",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
            db.query(recordsql, function(err) {
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '提交病历成功！但无法添加操作记录！', 'error': err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                var json = {'status': '1', 'msg': '提交病历成功！'};
                console.log(json);
                res.json(json);

	            io.emit('patientListUpdate', '病例列表更新');
            });
        });
    }
});
router.post('/auditBack', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'撤回提交失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE ' + req.body.moduleID + '_00_info SET status="0" WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '撤回提交失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            //插入操作记录
            var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="3",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
            db.query(recordsql, function(err) {
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '撤回提交成功！但无法添加操作记录！', 'error': err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                var json = {'status': '1', 'msg': '撤回提交成功！'};
                console.log(json);
                res.json(json);

	            io.emit('patientListUpdate', '病例列表更新');
            });
        });
    }

});
router.post('/auditPass', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'审核失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE ' + req.body.moduleID + '_00_info SET status="2" WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '审核失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            //插入操作记录
            var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="4",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
            db.query(recordsql, function(err) {
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '审核成功！但无法添加操作记录！', 'error': err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                var json = {'status': '1', 'msg': '审核成功！'};
                console.log(json);
                res.json(json);

	            io.emit('patientListUpdate', '病例列表更新');
            });
        });
    }
});
router.post('/auditFail', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'否决失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE ' + req.body.moduleID + '_00_info SET status="-1" WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '否决失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            //插入操作记录
            var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="5",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
            db.query(recordsql, function(err) {
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '否决成功！但无法添加操作记录！', 'error': err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                var json = {'status': '1', 'msg': '否决成功！'};
                console.log(json);
                res.json(json);

	            io.emit('patientListUpdate', '病例列表更新');
            });
        });
    }
});

router.post('/getPatient', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取病历失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var data = {};
        var sql = 'SELECT a.*,b.* '+
            'FROM ' + req.body.moduleID + '_00_info AS a ' +
            'LEFT JOIN ' + req.body.moduleID + '_records AS b ' +
            'ON a.binglihao=b.binglihao ' +
            'WHERE a.binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '获取病历失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            data = result[0];
            var json = {'status': '1', 'msg': '获取病历成功！', 'data': data};
            console.log(json);
            res.json(json);
        });
    }
});

router.post('/moduleInfo', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取Xml配置文件失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        xml.getXml(req.body.moduleID, function (result) {
            res.json(result);
        });
    }
});

router.post('/getPatientForm', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取病历表单失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        //检查子表中是否存在此纪录
        var sql = 'SELECT * FROM ' + req.body.table + ' WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status':'0','msg':'获取病历表单失败！','error':err};
                console.log(json);
                res.json(json);
                return;
            }
            if (result.length == 0) {//子表中不存在此记录，插入一条空的记录
                var insertsql = 'INSERT INTO ' + req.body.table + ' SET binglihao=' + req.body.binglihao;
                db.query(insertsql, function (err, result) {
                    if (err) {
                        console.log(err);
                        var json = {'status':'0','msg':'获取病历表单失败！','error':err};
                        console.log(json);
                        res.json(json);
                        return;
                    }
                    db.query(sql, function (err, result) {//插入后，重新select
                        if (err) {
                            console.log(err);
                            var json = {'status':'0','msg':'获取病历表单失败！','error':err};
                            console.log(json);
                            res.json(json);
                            return;
                        }
                        var json = {'status':'1','msg':'获取病历表单成功！','data':result[0]};
                        console.log(json);
                        res.json(json);
                    });
                });
            } else {//子表中存在此记录
                var json = {'status':'1','msg':'获取病历表单成功！','data':result[0]};
                console.log(json);
                res.json(json);
            }
        });
    }
});

router.post('/savePatientForm', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'保存病历失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE ' + req.body.table + ' SET ';
        Object.keys(req.body).forEach(function (key, index) {
            if (key != 'table' && key != 'binglihao' && key != 'moduleID')
                sql += key + '="' + req.body[key] + '",';
        });
        sql = sql.substr(0, sql.length - 1);
        sql += ' WHERE binglihao=' + req.body.binglihao;
        db.query(sql, function (err) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '保存病历失败！','error':err};
                console.log(json);
                res.json(json);
                return;
            }
            //插入操作记录
            var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="1",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
            db.query(recordsql, function(err) {
                if (err) {
                    console.log(err);
                    var json = {'status': '0', 'msg': '保存病历成功！但无法添加操作记录！', 'error': err};
                    console.log(json);
                    res.json(json);
                    return;
                }
                var json = {'status': '1', 'msg': '保存病历成功！'};
                console.log(json);
                res.json(json);
            });
        });
    }
});

router.post('/getFormNodes', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取Xml配置文件失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        xml.getFormNodes(req.body.formName, function (result) {
            res.json(result);
        });
    }
});

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        //文件上传成功后会放入public下的upload文件夹
        cb(null, path.resolve(__dirname, '..', 'public/upload'));
    },
    filename: function (req, file, cb){
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        cb(null, new Date().getTime()+'_'+file.originalname);
    }
});
var upload = multer({
    storage: storage
});
router.post('/uploadImage', upload.array('uploadImage'), function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'上传失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        console.log(req.files)
        console.log(req.body)

        // 在public/patients/binglihao/下创建文件夹
        var uid = uuid.v1();
        var destPath = path.resolve(__dirname, '..', 'public/data', req.body.moduleID, req.body.binglihao, uid);
        mkdirp(destPath, function (err) {
            if (err){
                var json = {'status':'0','msg':'上传失败！','error':err};
                console.log(json);
                res.json(json);
            } else{
                // 将上传的这些文件rename到上面那个文件夹
                req.files.forEach(function(file){
                   fs.rename(file.path, path.resolve(destPath, file.originalname), function(err){
                       if(err){
                           console.log(err);
                       } else{

                       }
                   });
                });

                //插入上传记录
                var recordsql = 'INSERT INTO ' + req.body.moduleID + '_uploadrecords SET binglihao=' + req.body.binglihao + ',upstaff="' + req.session.user.username + '",tableName="' + req.body.tableName + '",name="' + req.body.name + '",description="' + req.body.description + '",uptime="' + utils.getDate() + '",folder="' + uid + '"';
                db.query(recordsql, function(err) {
                    if (err) {
                        console.log(err);
                        var json = {'status': '0', 'msg': '上传失败！', 'error': err};
                        console.log(json);
                        res.json(json);
                    } else{
                        //插入操作记录
                        var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="1",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
                        db.query(recordsql, function(err) {
                            if (err) {
                                console.log(err);
                                var json = {'status': '0', 'msg': '添加操作记录失败！', 'error': err};
                                console.log(json);
                                res.json(json);
                                return;
                            }
                            var json = {'status': '1', 'msg': '上传成功！'};
                            console.log(json);
                            res.json(json);
                        });
                    }
                });


            }
        });

    }
});
router.post('/getUploadRecords', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取上传记录失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        var sql = 'SELECT * FROM ' + req.body.moduleID + '_uploadrecords WHERE binglihao=' + req.body.binglihao + ' AND tableName="' + req.body.tableName + '" ORDER BY uptime';
        db.query(sql, function(err, result) {
            if (err) {
                console.log(err);
                var json = {'status':'0','msg':'获取上传记录失败！','error':err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status':'1','msg':'获取上传记录成功！','data':result};
            console.log(json);
            res.json(json);
        });
    }
});
router.post('/deleteUpload', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'删除图像失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'DELETE FROM ' + req.body.moduleID + '_uploadrecords WHERE binglihao=' + req.body.binglihao + ' AND folder="' + req.body.folder + '"';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '删除图像失败！', 'error': err};
                console.log(json);
                res.json(json);
            }else{
                //插入操作记录
                var recordsql = 'UPDATE ' + req.body.moduleID + '_records SET opstaff="' + req.session.user.username + '",optype="1",optime="' + utils.getDate() + '" WHERE binglihao=' + req.body.binglihao;
                db.query(recordsql, function(err) {
                    if (err) {
                        console.log(err);
                        var json = {'status': '0', 'msg': '添加操作记录失败！', 'error': err};
                        console.log(json);
                        res.json(json);
                        return;
                    }
                    var deletePath = path.resolve(__dirname, '..', 'public/data', req.body.moduleID, req.body.binglihao, req.body.folder);
                    rimraf(deletePath, function(err){
                        if (err) {
                            console.log(err);
                            var json = {'status': '0', 'msg': '删除图像文件失败！需手动删除！', 'error': err};
                            console.log(json);
                            res.json(json);
                        }else{
                            var json = {'status': '1', 'msg': '删除图像成功！'};
                            console.log(json);
                            res.json(json);
                        }
                    });
                });

            }
        });
    }
});
router.post('/getImageName', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取图像失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        var filePath = path.resolve(__dirname, '..', 'public/data', req.body.moduleID, req.body.binglihao, req.body.folder);
        var data = utils.findFileSync(filePath);
        var json = {'status':'1','msg':'获取上传记录成功！','data':data};
        console.log(json);
        res.json(json);
    }
});

module.exports = router;

