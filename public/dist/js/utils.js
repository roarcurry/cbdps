function utils(){
    this.info = "工具";
}

/*
* printInfo
* 带标题的输出
* */
utils.prototype.printInfo = function(title, obj){
    console.groupCollapsed(title);
    console.log(obj);
    console.groupEnd();
};


/**
 获取随机整数
 */
utils.prototype.GetRandomNum = function (Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
};



var utils = new utils();