var fs = require('fs');
var xml2js = require('xml2js');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var path = require('path');
var pinyin = require("chinese-to-pinyin");

/**
 获取 module list
 */
exports.getModuleList = function (callback) {
    var file = path.resolve(__dirname, '../public/module', 'module.xml');

    var xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true});

    //读取xml文档
    fs.readFile(file, 'utf-8', function (err, result) {
        if (err) {
            callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
            return console.error(err);
        }
        var doc = new dom().parseFromString(result);
        //将xml解析成json
        xmlParser.parseString(doc, function (err, result) {
            if (err) {
                callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
                return console.error(err);
            }

            //将 module 节点转换成数组
            if(!result.root.module){//module
                result.root.module = [];
            }else{//project存在
                if(!Array.isArray(result.root.module)){
                    var temp = result.root.module;
                    result.root.module = [];
                    result.root.module.push(temp);
                }
            }
            callback({'status':'1','msg':'获取Xml配置文件成功！','data':result.root.module});
        });
    });
};
/**
 创建 module
 */
exports.newModule = function (module, callback) {
    var file = path.resolve(__dirname, '../public/module', 'module.xml');

    var xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true});

    //读取xml文档
    fs.readFile(file, 'utf-8', function (err, result) {
        if (err) {
            callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
            return console.error(err);
        }
        var doc = new dom().parseFromString(result);
        //将xml解析成json
        xmlParser.parseString(doc, function (err, result) {
            if (err) {
                callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
                return console.error(err);
            }

            //将 module 节点转换成数组
            if(!result.root.module){// module 不存在
                result.root.module = [];
            }else{// module 存在
                if(!Array.isArray(result.root.module)){
                    var temp = result.root.module;
                    result.root.module = [];
                    result.root.module.push(temp);
                }
            }

            var str = pinyin(module.name, {noTone: true, filterChinese: true});
            module.id = str.replace(/\s+/g,"");

            //将 module push进json数组
            result.root.module.push(module);

            //将json转化成xml
            var jsonBuilder = new xml2js.Builder();
            var json2xml = jsonBuilder.buildObject(result);

            //将增加后的结果写入xml中
            fs.writeFile(file,json2xml,function(err){
                if (err) {
                    callback({'status':'0','msg':'创建模块失败！', 'error':err});
                    return console.error(err);
                }
                callback({'status':'1','msg':'创建模块成功！'});
            });
        });
    });

};
/**
 编辑 module
 */
exports.editModule = function (index, module, callback) {
    var file = path.resolve(__dirname, '../public/module', 'module.xml');

    var xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true});

    //读取xml文档
    fs.readFile(file, 'utf-8', function (err, result) {
        if (err) {
            callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
            return console.error(err);
        }
        var doc = new dom().parseFromString(result);
        //将xml解析成json
        xmlParser.parseString(doc, function (err, result) {
            if (err) {
                callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
                return console.error(err);
            }

            //将 module 节点转换成数组
            if(!result.root.module){//project不存在
                result.root.module = [];
            }else{//project存在
                if(!Array.isArray(result.root.module)){
                    var temp = result.root.module;
                    result.root.module = [];
                    result.root.module.push(temp);
                }
            }

            //将project push进json数组
            result.root.module[index].name = module.name;
            result.root.module[index].administrator = module.administrator;
            result.root.module[index].hospital = module.hospital;
            result.root.module[index].department = module.department;
            result.root.module[index].description = module.description;

            //将json转化成xml
            var jsonBuilder = new xml2js.Builder();
            var json2xml = jsonBuilder.buildObject(result);

            //将增加后的结果写入xml中
            fs.writeFile(file,json2xml,function(err){
                if (err) {
                    callback({'status':'0','msg':'编辑模块失败！', 'error':err});
                    return console.error(err);
                }
                callback({'status':'1','msg':'编辑模块成功！'});
            });
        });
    });

};
/**
 删除 module
 */
exports.moduleDelete = function (index, callback) {
    var file = path.resolve(__dirname, '../public/module', 'module.xml');

    var xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true});

    //读取xml文档
    fs.readFile(file, 'utf-8', function (err, result) {
        if (err) {
            callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
            return console.error(err);
        }
        var doc = new dom().parseFromString(result);
        //将xml解析成json
        xmlParser.parseString(doc, function (err, result) {
            if (err) {
                callback({'status':'0','msg':'获取Xml配置文件失败！','error':err});
                return console.error(err);
            }

            //将 project 节点转换成数组
            if(!result.root.module){//project不存在
                result.root.module = [];
            }else{//project存在
                if(!Array.isArray(result.root.module)){
                    var temp = result.root.module;
                    result.root.module = [];
                    result.root.module.push(temp);
                }
            }

            //将project push进json数组
            result.root.module.splice(index, 1);

            //将json转化成xml
            var jsonBuilder = new xml2js.Builder();
            var json2xml = jsonBuilder.buildObject(result);

            //将增加后的结果写入xml中
            fs.writeFile(file,json2xml,function(err){
                if (err) {
                    callback({'status':'0','msg':'删除模块失败！', 'error':err});
                    return console.error(err);
                }
                callback({'status':'1','msg':'删除模块成功！'});
            });
        });
    });

};


/**
 获取xml
 */
exports.getXml = function (moduleID, callback) {
    var file = path.resolve(__dirname, '../public/module', moduleID, moduleID + '.xml');

    var xmlParser = new xml2js.Parser({explicitArray: false, ignoreAttrs: true});

    //读取xml文档
    fs.readFile(file, 'utf-8', function (err, result) {
        if (err) {
            callback({'status':'0','msg':'获取Xml配置文件失败！','err':err});
            return console.error(err);
        }
        var doc = new dom().parseFromString(result);
        //将xml解析成json
        xmlParser.parseString(doc, function (err, result) {
            if (err) {
                callback({'status':'0','msg':'获取Xml配置文件失败！','err':err});
                return console.error(err);
            }

            // 将node节点非数组转化为数组
            if(!Array.isArray(result.root.node)){
                var temp = result.root.node;
                result.root.node = [];
                result.root.node.push(temp);
            }
            result.root.node.forEach(function(node){
                if(!Array.isArray(node.children)){
                    var temp = node.children;
                    node.children = [];
                    node.children.push(temp);
                }
                node.children.forEach(function(child){
                    if(child.hasOwnProperty('leaf')){
                        if(!Array.isArray(child.leaf)){
                            var temp = child.leaf;
                            child.leaf = [];
                            child.leaf.push(temp);
                        }
                    }else if(child.hasOwnProperty('children')){
                        if(!Array.isArray(child.children)){
                            var temp = child.children;
                            child.children = [];
                            child.children.push(temp);
                        }
                        child.children.forEach(function(childchildren){
                            if(childchildren.hasOwnProperty('leaf')){
                                if(!Array.isArray(childchildren.leaf)){
                                    var temp = childchildren.leaf;
                                    childchildren.leaf = [];
                                    childchildren.leaf.push(temp);
                                }
                            }
                        })
                    }
                })
            });


            callback({'status':'1','msg':'获取Xml配置文件成功！','data':result.root});
        });
    });
};

// exports.getXml('appendicitis',function(result){
//     console.log(result.data)
// })