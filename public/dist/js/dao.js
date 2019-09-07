function dao(){
    this.info = "数据交互";
}

// 获取模块列表 get module list
dao.prototype.getModuleList = function(callback){
    var data = {};
    $.ajax({
        data: data,
        url: '/dao/getModuleList',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getModuleList',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
// 创建模块 newModule
dao.prototype.newModule = function(data, callback){
    $.ajax({
        data: data,
        url: '/dao/newModule',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('newModule', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
// 编辑模块 editModule
dao.prototype.editModule = function(index, module, callback){
    var data = module;
    data.index = index;
    $.ajax({
        data: data,
        url: '/dao/editModule',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('editModule', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
// 删除模块 moduleDelete
dao.prototype.moduleDelete = function(index, callback){
    var data = {};
    data.index = index;
    $.ajax({
        data: data,
        url: '/dao/moduleDelete',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('moduleDelete', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};


/*
* getPatientList
* */
dao.prototype.getPatientList = function(moduleID, callback){
    var data = {};
    data.moduleID = moduleID;
    $.ajax({
        data: data,
        url: '/dao/getPatientList',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getPatientList',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* newPatient
* */
dao.prototype.newPatient = function(moduleID, patient, callback){
    var data = patient;
    data.moduleID = moduleID;

    $.ajax({
        data: data,
        url: '/dao/newPatient',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('newPatient', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* deletePatient 删除病历
* */
dao.prototype.deletePatient = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/deletePatient',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('deletePatient', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* auditApply 提交审核
* */
dao.prototype.auditApply = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/auditApply',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('auditApply', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* auditBack 撤回提交审核
* */
dao.prototype.auditBack = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/auditBack',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('auditBack', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* auditPass 通过审核
* */
dao.prototype.auditPass = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/auditPass',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('auditPass', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* auditFail 未通过审核
* */
dao.prototype.auditFail = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/auditFail',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('auditFail', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* getPatient
* */
dao.prototype.getPatient = function(moduleID, binglihao, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/getPatient',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getPatient',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* getXml
* */
dao.prototype.moduleInfo = function(moduleID, callback){
    var data = {};
    data.moduleID = moduleID;
    $.ajax({
        data: data,
        url: '/dao/moduleInfo',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('moduleInfo',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* getPatientForm
* */
dao.prototype.getPatientForm = function(table, binglihao, callback){
    var data = {};
    data.table = table;
    data.binglihao = binglihao;
    $.ajax({
        data: data,
        url: '/dao/getPatientForm',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getPatientForm',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* savePatientForm
* */
dao.prototype.savePatientForm = function(moduleID, table, patientForm, callback){
    var data = patientForm;
    data.moduleID = moduleID;
    data.table = table;
    utils.printInfo('savePatientForm',data);
    $.ajax({
        data: data,
        url: '/dao/savePatientForm',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('savePatientForm',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};




//getUploadRecords 获取上传记录
dao.prototype.getUploadRecords = function(moduleID, binglihao, tableName, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    data.tableName = tableName;
    $.ajax({
        data: data,
        url: '/dao/getUploadRecords',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getUploadRecords',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
//deleteUpload 删除上传图像
dao.prototype.deleteUpload = function(moduleID, binglihao, folder, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    data.folder = folder;
    $.ajax({
        data: data,
        url: '/dao/deleteUpload',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('deleteUpload', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
//getImageName 获取图像文件夹下的所有图像文件名
dao.prototype.getImageName = function(moduleID, binglihao, folder, callback){
    var data = {};
    data.moduleID = moduleID;
    data.binglihao = binglihao;
    data.folder = folder;
    $.ajax({
        data: data,
        url: '/dao/getImageName',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getImageName',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};





/*
* users
* */

/*
* login
* */
dao.prototype.login = function(data, callback){
    $.ajax({
        data: data,
        url: '/users/login',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('login',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* register
* */
dao.prototype.register = function(data, callback){
    $.ajax({
        data: data,
        url: '/users/register',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('register',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
dao.prototype.usernameValid = function(username, callback){
    var data = {};
    data.username = username;
    $.ajax({
        data: data,
        url: '/users/usernameValid',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('usernameValid',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* logout
* */
dao.prototype.logout = function(callback){
    $.ajax({
        url: '/users/logout',
        dataType: 'json',
        type:"get",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('login',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* getSession
* */
dao.prototype.getSession = function(callback){
    $.ajax({
        url: '/users/getSession',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(data){
            callback(data);
            utils.printInfo('getSession',data);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* getUserList
* */
dao.prototype.getUserList = function(callback){
    var data = {};
    $.ajax({
        data: data,
        url: '/users/getUserList',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result){
            callback(result);
            utils.printInfo('getUserList',result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};

/*
* deleteUser 删除用户
* */
dao.prototype.deleteUser = function(username, callback){
    var data = {};
    data.username = username;
    $.ajax({
        data: data,
        url: '/users/deleteUser',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('deleteUser', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
/*
* userPass 用户通过审核
* */
dao.prototype.userPass = function(username, callback){
    var data = {};
    data.username = username;
    $.ajax({
        data: data,
        url: '/users/userPass',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('userPass', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
/*
* userFail 用户未通过审核
* */
dao.prototype.userFail = function(username, callback){
    var data = {};
    data.username = username;
    $.ajax({
        data: data,
        url: '/users/userFail',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('userFail', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
/*
* userReset 重设用户密码为123456
* */
dao.prototype.userReset = function(username, callback){
    var data = {};
    data.username = username;
    $.ajax({
        data: data,
        url: '/users/userReset',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('userReset', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};
/*
* userChange 更改用户权限
* */
dao.prototype.userChange = function(username, param, type, callback){
    var data = {};
    data.username = username;
    data.param = param;
    data.type = type;
    $.ajax({
        data: data,
        url: '/users/userChange',
        dataType: 'json',
        type:"post",
        cache: false,
        timeout: 5000,
        success: function(result) {
            callback(result);
            utils.printInfo('userChange', result);
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
    });
};




var dao = new dao();