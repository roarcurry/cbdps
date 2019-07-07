var mysql = require('mysql');
var dbcfg = require('../config/dbcfg');


var pool = mysql.createPool({
    host: dbcfg.HOST,
    port: dbcfg.PORT,
    user: dbcfg.USER,
    password: dbcfg.PASSWORD,
    database: dbcfg.DATABASE,
    connectionLimit: dbcfg.connectionLimit
});

exports.query = function(sql, params, callback){
    pool.getConnection(function(err, connection){
        if(err){
            callback(err, null, null);
        }else{
            connection.query(sql, params, function(err, results, fields){
                //释放连接
                // connection.release();//此方法无效
                //事件驱动回调
                callback(err, results, fields);
            });
        }
        //释放连接
        pool.releaseConnection(connection);
    });
};


exports.createDB = function(moduleID, callback){

};