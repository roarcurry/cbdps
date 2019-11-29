var db = require('./db');
var xml = require('./xml');
var utils = require('./utils');

function createDb(moduleID) {
    xml.getXml(moduleID, function (result) {
        var data = utils.xmlToArray(result.data);

        //删除所有表
        var sql = 'DROP TABLE IF EXISTS ';
        sql += data.id + '_records';
        sql += ',' + data.id + '_uploadrecords';
        for(var i=0; i<data.node.length; i++){
            for(var j=0; j<data.node[i].children.length; j++){
                if(data.node[i].children[j].id){
                    sql += ',' + data.node[i].children[j].id;
                }else if(data.node[i].children[j].children){
                    for(var k=0; k<data.node[i].children[j].children.length; k++){
                        if(data.node[i].children[j].children[k].id){
                            sql += ',' + data.node[i].children[j].children[k].id;
                        }
                    }
                }
            }
        }
        sql += ',' + data.main.id;
        console.log('删除所有表 ' + data.id + ':');
        console.log(sql);
        console.log('\n');

        db.query(sql, function(err){
            if(err){
                return console.log(err);
            }

            //创建主表
            var sql = 'CREATE TABLE ' + data.main.id +'(binglihao int(11) NOT NULL UNIQUE auto_increment,';
            data.main.leaf.forEach(function(leaf){
                if(leaf.id!='binglihao'){
                    sql += leaf.id + ' varchar(255),';
                }
            });
            sql += 'PRIMARY KEY (binglihao)';
            sql += ')';
            console.log('创建主表 ' + data.main.id + ':');
            console.log(sql);
            console.log('\n');

            db.query(sql, function(err){
                if(err){
                    return console.log(err);
                }

                data.node.forEach(function(node){
                    node.children.forEach(function(children){
                        if(children.hasOwnProperty('children')){
                            children.children.forEach(function(childchildren){
                                var sql = 'CREATE TABLE ' + childchildren.id +'(binglihao int(11) NOT NULL UNIQUE,';
                                childchildren.leaf.forEach(function(leaf){
                                    if(leaf.type=='text'){
                                        sql += leaf.id + ' text,';
                                    }else if(leaf.type=='number'){
                                        sql += leaf.id + ' int,';
                                    }else if(leaf.type=='textarea'){
                                        sql += leaf.id + ' text,';
                                    }else if(leaf.type=='radio'){
                                        sql += leaf.id + ' text,';
                                    }else if(leaf.type=='checkbox'){
                                        sql += leaf.id + ' text,';
                                    }else if(leaf.type=='date'){
                                        sql += leaf.id + ' text,';
                                    }else if(leaf.type=='select'){
                                        sql += leaf.id + ' text,';
                                    }
                                });
                                sql += 'FOREIGN KEY (binglihao) REFERENCES ' + data.main.id + '(binglihao) ON DELETE CASCADE ON UPDATE CASCADE';
                                sql += ')';
                                console.log('创建子表 ' + childchildren.id + ':');
                                console.log(sql);
                                console.log('\n');

                                db.query(sql, function(err){
                                    if(err){
                                        return console.log(err);
                                    }
                                });
                            });
                        }else if(children.hasOwnProperty('leaf')){
                            var sql = 'CREATE TABLE ' + children.id +'(binglihao int(11) NOT NULL UNIQUE,';
                            children.leaf.forEach(function(leaf){
                                if(leaf.type=='text'){
                                    sql += leaf.id + ' text,';
                                }else if(leaf.type=='number'){
                                    sql += leaf.id + ' int,';
                                }else if(leaf.type=='textarea'){
                                    sql += leaf.id + ' text,';
                                }else if(leaf.type=='radio'){
                                    sql += leaf.id + ' text,';
                                }else if(leaf.type=='checkbox'){
                                    sql += leaf.id + ' text,';
                                }else if(leaf.type=='date'){
                                    sql += leaf.id + ' text,';
                                }else if(leaf.type=='select'){
                                    sql += leaf.id + ' text,';
                                }
                            });
                            sql += 'FOREIGN KEY (binglihao) REFERENCES ' + data.main.id + '(binglihao) ON DELETE CASCADE ON UPDATE CASCADE';
                            sql += ')';
                            console.log('创建子表 ' + children.id + ':');
                            console.log(sql);
                            console.log('\n');

                            db.query(sql, function(err){
                                if(err){
                                    return console.log(err);
                                }
                            });
                        }
                    });

                });


                //创建记录表
                var sql = 'CREATE TABLE ' + data.id +'_records(binglihao int(11) NOT NULL, opstaff varchar(255), optype varchar(255), optime datetime, addtime datetime,';
                sql += 'FOREIGN KEY (binglihao) REFERENCES ' + data.main.id + '(binglihao) ON DELETE CASCADE ON UPDATE CASCADE';
                sql += ')';
                console.log('创建记录表 ' + data.id +'_records' + ':');
                console.log(sql);
                console.log('\n');
                db.query(sql, function(err){
                    if(err){
                        return console.log(err);
                    }
                });


                //创建上传记录表
                var sql = 'CREATE TABLE ' + data.id +'_uploadrecords(binglihao int(11) NOT NULL, tableName varchar(255), name varchar(255), description text, uptime datetime, upstaff varchar(255), folder varchar(255),';
                sql += 'FOREIGN KEY (binglihao) REFERENCES ' + data.main.id + '(binglihao) ON DELETE CASCADE ON UPDATE CASCADE';
                sql += ')';
                console.log('创建上传记录表 ' + data.id +'_records' + ':');
                console.log(sql);
                console.log('\n');
                db.query(sql, function(err){
                    if(err){
                        return console.log(err);
                    }
                });

            });

        });

    });
}

createDb('appendicitis');
createDb('megacolon');
createDb('cardioidAnastomosis');