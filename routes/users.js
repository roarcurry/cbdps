var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users');
});

/* user dao */
router.post('/login', function(req, res, next) {
    console.log('用户登录:');
    console.log(req.body);

    var sql = 'SELECT * FROM user WHERE username="' + req.body.username + '"AND password="' + req.body.password + '" LIMIT 1';
    db.query(sql, function(err, result){
        if(err){//查询出错
            console.log(err);
            var json = {'status':'0','msg':'登录失败！','error':'内部错误！请与管理员联系！'};
            console.log(json);
            res.json(json);
            return;
        }

        if(result.length>0){//查询到用户
            if(result[0].status==0){//用户未审核
                var json = {'status':'0','msg':'登录失败！','error':'用户未审核！请与管理员联系！'};
                console.log(json);
                res.json(json);
                return;
            }else if(result[0].status==-1){
                var json = {'status':'0','msg':'登录失败！','error':'用户审核未通过！请与管理员联系！'};
                console.log(json);
                res.json(json);
                return;
            }else if(result[0].status==1){//登陆成功
                //记住我cookie
                if(req.body.remember=='true'){
                    res.cookie("user",{"username":req.body.username,"password":req.body.password},{maxAge:1000*60*60});
                }
                //将登录信息保存进session
                req.session.user = result[0];
                //返回登录成功消息
                var json = {'status':'1','msg':'登录成功！'};
                console.log(json);
                res.json(json);
                return;
            }
        }else{//用户名或密码错误
            var json = {'status':'0','msg':'登录失败！','error':'用户名或密码错误！'};
            console.log(json);
            res.json(json);
            return;
        }

    });
});

router.post('/register', function(req, res, next) {
    console.log('register:');
    console.log(req.body);

    var user = req.body;
    delete user.confirmPassword;
    var uuid = require('uuid');
    user.id = uuid.v1();
    user.status = 0;

    var sql = 'INSERT INTO user SET ';
    Object.keys(user).forEach(function(key, index){
        sql += key + '="' + user[key] + '"';
        if(index<Object.keys(user).length-1){
            sql += ',';
        }
    });
    db.query(sql, function(err, result){
        if(err){
            console.log(err);
            var json = {'status':'0','msg':'注册失败！','error':err};
            console.log(json);
            res.json(json);
            return;
        }
        var json = {'status':'1','msg':'注册成功！'};
        console.log(json);
        res.json(json);
    });
});

router.post('/usernameValid', function(req, res, next) {
    //检查用户名是否存在
    var selectsql = 'SELECT username FROM user WHERE username="' + req.body.username + '" LIMIT 1';
    db.query(selectsql, function(err, result){
        if(err){
            console.log(err);
            var json = {'status':'0','msg':'用户名验证失败！','error':err};
            console.log(json);
            res.json(json);
            return;
        }
        if(result.length>0){//用户名已存在
            var json = {'status':'0','msg':'用户名已存在！'};
            console.log(json);
            res.json(json);
        }else{//用户名不存在
            var json = {'status':'1','msg':'用户名不存在！'};
            console.log(json);
            res.json(json);
        }
    });

});

router.get('/logout', function(req, res, next) {
    req.session.destroy();
    res.json({'status': '1', 'msg': '注销成功'});
});

router.post('/getSession', function(req, res, next) {
    res.json(req.session.user);
});

router.post('/getUserList', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'获取用户列表失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else{//登录状态
        var sql = 'SELECT * FROM user ORDER BY authority,status,username';
        db.query(sql, function(err, result) {
            if (err) {
                console.log(err);
                var json = {'status':'0','msg':'获取用户列表失败！','error':err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status':'1','msg':'获取用户列表成功！','data':result};
            console.log({'status':'1','msg':'获取用户列表成功！'});
            res.json(json);
        });
    }
});

router.post('/deleteUser', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'删除用户失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'DELETE FROM user WHERE username="' + req.body.username + '"';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '删除用户失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status': '1', 'msg': '删除用户成功！'};
            console.log(json);
            res.json(json);
        });

    }
});
router.post('/userPass', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'通过审核失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE user SET status="1" WHERE username="' + req.body.username + '"';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '通过审核失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status': '1', 'msg': '通过审核成功！'};
            console.log(json);
            res.json(json);
        });
    }
});
router.post('/userFail', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'否决审核失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE user SET status="-1" WHERE username="' + req.body.username + '"';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '否决审核失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status': '1', 'msg': '否决审核成功！'};
            console.log(json);
            res.json(json);
        });
    }
});
router.post('/userReset', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'重设密码失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
        var sql = 'UPDATE user SET password="123456" WHERE username="' + req.body.username + '"';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                var json = {'status': '0', 'msg': '重设密码失败！', 'error': err};
                console.log(json);
                res.json(json);
                return;
            }
            var json = {'status': '1', 'msg': '重设密码成功！'};
            console.log(json);
            res.json(json);
        });
    }
});
router.post('/userChange', function(req, res, next) {
    if (!req.session.user) {//非登录状态
        var json = {'status':'0','msg':'更改用户权限失败！','error':'用户未登录！'};
        console.log(json);
        res.json(json);
    }else {//登录状态
    	var type = req.body.type;
	    var sql = '';
	    switch(type){
		    case 'authority':
		    	sql += 'UPDATE user SET authority="' + req.body.param + '" WHERE username="' + req.body.username + '"';
		    	break;
		    case 'module':
			    sql += 'UPDATE user SET module="' + req.body.param + '" WHERE username="' + req.body.username + '"';
		    	break;
		    default:

	    }
	    if(sql){
		    db.query(sql, function (err, result) {
			    if (err) {
				    console.log(err);
				    var json = {'status': '0', 'msg': '更改用户权限失败！', 'error': err};
				    console.log(json);
				    res.json(json);
				    return;
			    }
			    var json = {'status': '1', 'msg': '更改用户权限成功！'};
			    console.log(json);
			    res.json(json);
		    });
	    }else{
		    var json = {'status': '0', 'msg': '更改用户权限失败！', 'error': '类型错误！'};
		    console.log(json);
		    res.json(json);
	    }

    }
});

module.exports = router;
