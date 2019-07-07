var fs = require('fs');
var join = require('path').join;

/**
 * 获取某文件夹下的所有文件的文件名
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
exports.findFileSync = function (startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            // if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(val);
        });

    }
    finder(startPath);
    return result;
};

/**
 * 自动补零：如果int num的长度小于length，自动补零，返回String
 */
exports.PrefixInteger = function (num, length) {
    return (Array(length).join('0') + num).slice(-length);
};

/**
 * 去掉字符串前面的0，返回String
 */
exports.PrefixString = function (str) {
    var regexp = /^[0]+/;
    return str.replace(regexp, '');
};
/**
 获取随机整数
 */
exports.GetRandomNum = function (Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};

/**
 获得格式化日期
 2019-07-01 12:00:00
 */
exports.getDate = function () {
    var date = new Date();
    var year = exports.PrefixInteger(date.getFullYear()),
        month = exports.PrefixInteger((date.getMonth() + 1)),//月份是从0开始的
        day = exports.PrefixInteger(date.getDate()),
        hour = exports.PrefixInteger(date.getHours()),
        min = exports.PrefixInteger(date.getMinutes()),
        sec = exports.PrefixInteger(date.getSeconds());
    return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
};

/**
 格式化日期
 2019-07-01 12:00:00
 */
exports.formatDate = function (date) {
    var year = exports.PrefixInteger(date.getFullYear()),
        month = exports.PrefixInteger((date.getMonth() + 1)),//月份是从0开始的
        day = exports.PrefixInteger(date.getDate()),
        hour = exports.PrefixInteger(date.getHours()),
        min = exports.PrefixInteger(date.getMinutes()),
        sec = exports.PrefixInteger(date.getSeconds());
    return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
};

// 将配置文件中的节点转为数组
exports.xmlToArray = function(root){
    //将root.node转为数组
    if(root.node && !Array.isArray(root.node)){
        var temp = root.node;
        root.node = [];
        root.node.push(temp);
    }

    if(root.node){
        for(var i=0; i<root.node.length; i++){
            //将root.node[i].children转为数组
            if(root.node[i].children && !Array.isArray(root.node[i].children)){
                var temp = root.node[i].children;
                root.node[i].children = [];
                root.node[i].children.push(temp);
            }

            if(root.node[i].children){
                for(var j=0; j<root.node[i].children.length; j++){
                    //将root.node[i].children[j].leaf转为数组
                    if(root.node[i].children[j].leaf && !Array.isArray(root.node[i].children[j].leaf)){
                        var temp = root.node[i].children[j].leaf;
                        root.node[i].children[j].leaf = [];
                        root.node[i].children[j].leaf.push(temp);
                    }

                    //将root.node[i].children[j].children转为数组
                    if(root.node[i].children[j].children && !Array.isArray(root.node[i].children[j].children)){
                        var temp = root.node[i].children[j].children;
                        root.node[i].children[j].children = [];
                        root.node[i].children[j].children.push(temp);
                    }

                    if(root.node[i].children[j].children){
                        for(var k=0; k<root.node[i].children[j].children.length; k++){
                            //将root.node[i].children[j].children[k].leaf转为数组
                            if(root.node[i].children[j].children[k].leaf && !Array.isArray(root.node[i].children[j].children[k].leaf)){
                                var temp = root.node[i].children[j].children[k].leaf;
                                root.node[i].children[j].children[k].leaf = [];
                                root.node[i].children[j].children[k].leaf.push(temp);
                            }
                        }
                    }
                }
            }
        }
    }

    return root;
};