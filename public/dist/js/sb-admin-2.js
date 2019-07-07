/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    // var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent();
    //
    // while (true) {
    //     if (element.is('li')) {
    //         element = element.parent().addClass('in').parent();
    //     } else {
    //         break;
    //     }
    // }

    //载入时更改侧边栏链接样式
    $('ul.nav a.side-menu-child').filter(function() {
        //根据url筛选出需要添加active的a元素
        return this.href == window.location;
    }).addClass('active').parent('li').parent('ul').addClass('in');//根据选择的a元素，展开上级ul

    //点击侧边栏链接更改样式
    $('ul.nav a.side-menu-child').click(function(){
        //移除所有a的active
        $('ul.nav a.side-menu-child').removeClass('active');
        //添加active
        $(this).addClass('active');
    });

    //点击顶部栏链接更改样式
    $('ul.nav a.dropdown-child').click(function(){
        //删除侧边栏a的样式active
        $('ul.nav a.side-menu-child').removeClass('active');
    });


});
