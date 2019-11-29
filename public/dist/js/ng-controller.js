//app
app.controller('homeCtrl', function($rootScope, $scope) {
    $(function() {

        //获取模块列表 project list
        dao.getModuleList(function(result){
            if(result.status=='1'){//成功
                $scope.moduleList = result.data;
                $scope.$apply();

                //获取patientList
                dao.getPatientList($scope.moduleList[0].id, function(result){
                    if(result.status=='1'){//成功
                        $scope.patientList = result.data;

                        $scope.count = {};
                        $scope.count.total = $scope.patientList.length;
                        $scope.count.male = 0;
                        $scope.count.female = 0;
                        $scope.count.group_1 = 0;
                        $scope.count.group_2 = 0;
                        var gender_donut_data = [];

                        $scope.patientList.forEach(function(patient){
                            if(patient.sex=='男'){
                                $scope.count.male ++;
                            }else if(patient.sex=='女'){
                                $scope.count.female ++;
                            }

                            if(patient.fenzu=='1'){
                                $scope.count.group_1 ++;
                            }else if(patient.fenzu=='2'){
                                $scope.count.group_2 ++;
                            }
                        });
                        $scope.$apply();

                        if( $scope.count.total==0){//如果没有数据
                            gender_donut_data =  [
                                {
                                    label: "暂无数据",
                                    value:  0
                                }
                            ];
                        }else{
                            gender_donut_data =  [
                                {
                                    label: "男",
                                    value:  $scope.count.male
                                },
                                {
                                    label: "女",
                                    value:  $scope.count.female
                                }
                            ];
                        }

                        //绘制饼状图
                        // Morris.Donut({
                        //     element: 'gender-donut',
                        //     data: gender_donut_data,
                        //     resize: true
                        // });

                        //绘制柱状图
                        // Morris.Bar({
                        //     element: 'data-input',
                        //     data: [{
                        //         y: '2006',
                        //         a: 100,
                        //         b: 90
                        //     }, {
                        //         y: '2007',
                        //         a: 75,
                        //         b: 65
                        //     }, {
                        //         y: '2008',
                        //         a: 50,
                        //         b: 40
                        //     }, {
                        //         y: '2009',
                        //         a: 75,
                        //         b: 65
                        //     }, {
                        //         y: '2010',
                        //         a: 50,
                        //         b: 40
                        //     }, {
                        //         y: '2011',
                        //         a: 75,
                        //         b: 65
                        //     }, {
                        //         y: '2012',
                        //         a: 100,
                        //         b: 90
                        //     }],
                        //     xkey: 'y',
                        //     ykeys: ['a', 'b'],
                        //     labels: ['Series A', 'Series B'],
                        //     hideHover: 'auto',
                        //     resize: true
                        // });


                    }else if(result.status=='0'){//失败
                        //弹出警告框
                        $rootScope.alert = {};
                        $rootScope.alert.title = result.msg;
                        $rootScope.alert.content = result.err;
                        $rootScope.$apply();
                        $('#alertDanger').fadeIn(function () {
                            setTimeout(function(){
                                $('#alertDanger').fadeOut();
                            }, 3000);
                        });
                    }
                });

            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });


        // Morris.Area({
        //     element: 'morris-area-chart',
        //     data: [{
        //         period: '2010 Q1',
        //         iphone: 2666,
        //         ipad: null,
        //         itouch: 2647
        //     }, {
        //         period: '2010 Q2',
        //         iphone: 2778,
        //         ipad: 2294,
        //         itouch: 2441
        //     }, {
        //         period: '2010 Q3',
        //         iphone: 4912,
        //         ipad: 1969,
        //         itouch: 2501
        //     }, {
        //         period: '2010 Q4',
        //         iphone: 3767,
        //         ipad: 3597,
        //         itouch: 5689
        //     }, {
        //         period: '2011 Q1',
        //         iphone: 6810,
        //         ipad: 1914,
        //         itouch: 2293
        //     }, {
        //         period: '2011 Q2',
        //         iphone: 5670,
        //         ipad: 4293,
        //         itouch: 1881
        //     }, {
        //         period: '2011 Q3',
        //         iphone: 4820,
        //         ipad: 3795,
        //         itouch: 1588
        //     }, {
        //         period: '2011 Q4',
        //         iphone: 15073,
        //         ipad: 5967,
        //         itouch: 5175
        //     }, {
        //         period: '2012 Q1',
        //         iphone: 10687,
        //         ipad: 4460,
        //         itouch: 2028
        //     }, {
        //         period: '2012 Q2',
        //         iphone: 8432,
        //         ipad: 5713,
        //         itouch: 1791
        //     }],
        //     xkey: 'period',
        //     ykeys: ['iphone', 'ipad', 'itouch'],
        //     labels: ['iPhone', 'iPad', 'iPod Touch'],
        //     pointSize: 2,
        //     hideHover: 'auto',
        //     resize: true
        // });

        // Morris.Donut({
        //     element: 'morris-donut-chart',
        //     data: [{
        //         label: "Download Sales",
        //         value: 12
        //     }, {
        //         label: "In-Store Sales",
        //         value: 30
        //     }, {
        //         label: "Mail-Order Sales",
        //         value: 20
        //     }],
        //     resize: true
        // });


    });
});

app.controller('userInfoCtrl', function($scope, $state, $rootScope) {
    //返回首页更改样式
    $('a.back-menu').click(function(){
        console.log(1)
        $('ul.nav a.side-menu-child:first').addClass('active').parent('li').parent('ul').addClass('in');//根据选择的a元素，展开上级ul
    });
});


//数据项管理
app.controller('moduleManageCtrl', function($scope, $rootScope, $state, $stateParams) {
    //获取模块列表 module list
    dao.getModuleList(function(result){
        if(result.status=='1'){//成功
            $scope.moduleList = result.data;
            $scope.$apply();

            //初始化dataTables
            $('#moduleList').DataTable({
                responsive: true,
                "pagingType": "full_numbers",
                "sLoadingRecords": "正在加载数据...",
                "sZeroRecords": "暂无数据",
                "order": [],
                "language": {
                    "processing": "玩命加载中...",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "zeroRecords": "没有匹配结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "infoPostFix": "",
                    "url": "",
                    "paginate": {
                        "first": "首页",
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "末页"
                    }
                },
                columnDefs: [
                    {targets: 0, responsivePriority: 1},
                    {targets: 4, responsivePriority: 2}
                ],
                retrieve: true
            });
        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.err;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //新建项目
    $scope.toNewModule = function(){
        $state.go('moduleNew');
    };

    //刷新
    $scope.refresh = function(){
        $state.reload('moduleManage');
    };

    //编辑项目
    $scope.moduleEdit = function(index){
        $state.go('moduleEdit', {'index':index});
    }

    //删除项目
    $scope.moduleDelete = function(index){
        dao.moduleDelete(index, function(result){
            if(result.status=='1'){//新建成功返回列表
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });

                $state.reload("moduleManage");
            }else if(result.status=='0'){//新建失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    }
});
app.controller('moduleNewCtrl', function($scope, $rootScope, $state, $stateParams) {
    //创建模块
    $scope.newModule= function(inValid){
        if(!inValid){
            utils.printInfo('newModule',$scope.module);
            dao.newModule($scope.module, function(result){
                if(result.status=='1'){//新建成功返回列表
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertSuccess').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertSuccess').fadeOut();
                        }, 3000);
                    });

                    $state.go("moduleManage");
                }else if(result.status=='0'){//新建失败
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertDanger').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertDanger').fadeOut();
                        }, 3000);
                    });
                }
            });
        }else{
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = '创建项目失败！';
            $rootScope.alert.content = '请检查项目表单是否正确！';
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    }

    //返回列表
    $scope.backToList = function(){
        $state.go('moduleManage');
    }
});
app.controller('moduleEditCtrl', function($scope, $rootScope, $state, $stateParams) {
    $scope.moduleIndex = $stateParams.index;

    //获取模块列表 module list
    dao.getModuleList(function(result){
        if(result.status=='1'){//成功
            $scope.moduleList = result.data;
            $scope.module = $scope.moduleList[$scope.moduleIndex];
            $scope.$apply();

            //初始化dataTables
            $('#moduleList').DataTable({
                responsive: true,
                "pagingType": "full_numbers",
                "sLoadingRecords": "正在加载数据...",
                "sZeroRecords": "暂无数据",
                "order": [],
                "language": {
                    "processing": "玩命加载中...",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "zeroRecords": "没有匹配结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "infoPostFix": "",
                    "url": "",
                    "paginate": {
                        "first": "首页",
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "末页"
                    }
                },
                columnDefs: [
                    {targets: 0, responsivePriority: 1},
                    {targets: 4, responsivePriority: 2}
                ],
                retrieve: true
            });
        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.err;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //编辑模块
    $scope.editModule= function(inValid){
        if(!inValid){
            utils.printInfo('editModule',$scope.module);
            dao.editModule($scope.moduleIndex, $scope.module, function(result){
                if(result.status=='1'){//新建成功返回列表
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertSuccess').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertSuccess').fadeOut();
                        }, 3000);
                    });

                    $state.go("moduleManage");
                }else if(result.status=='0'){//新建失败
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertDanger').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertDanger').fadeOut();
                        }, 3000);
                    });
                }
            });
        }else{
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = '编辑模块失败！';
            $rootScope.alert.content = '请检查表单是否正确！';
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    }

    //返回列表
    $scope.backToList = function(){
        $state.go('moduleManage');
    }
});
app.controller('dataItemManageCtrl', function($scope, $rootScope, $state, $stateParams) {

});


app.controller('patientListCtrl', function($scope, $state, $rootScope, $stateParams) {
    $scope.moduleIndex = $stateParams.index==null ? '0' : $stateParams.index;

    //获取模块列表 project list
    dao.getModuleList(function(result){
        if(result.status=='1'){//成功
        	if($rootScope.user.module !== 'all'){
		        $scope.moduleList = [result.data[$rootScope.user.module]];
	        }else{
		        $scope.moduleList = result.data;
	        }
            $scope.$apply();

            //获取patientList
            dao.getPatientList($scope.moduleList[$scope.moduleIndex].id, function(result){
                if(result.status=='1'){//成功
                    $scope.patientList = result.data;
                    $scope.$apply();

                    //初始化dataTables
                    $('#dataTables').DataTable({
                        responsive: true,
                        "pagingType":   "full_numbers",
                        "sLoadingRecords": "正在加载数据...",
                        "sZeroRecords": "暂无数据",
                        "order": [[ 0, "asc" ]],
                        "language": {
                            "processing": "玩命加载中...",
                            "lengthMenu": "显示 _MENU_ 项结果",
                            "zeroRecords": "没有匹配结果",
                            "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                            "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                            "infoFiltered": "(由 _MAX_ 项结果过滤)",
                            "infoPostFix": "",
                            "url": "",
                            "paginate": {
                                "first":    "首页",
                                "previous": "上一页",
                                "next":     "下一页",
                                "last":     "末页"
                            }
                        },
                        columnDefs: [
                            { targets: 0, responsivePriority: 1  },
                            { targets: 9, responsivePriority: 2  }
                        ],
                        destroy: true
                    });
                }else if(result.status=='0'){//失败
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertDanger').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertDanger').fadeOut();
                        }, 3000);
                    });
                }
            });

        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.err;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //根据模块获取病历列表
    $scope.changeList = function(){
        //获取patientList
        $('#dataTables').DataTable().destroy();
        dao.getPatientList($scope.moduleList[$scope.moduleIndex].id, function(result){
            if(result.status=='1'){//成功
                $scope.patientList = result.data;
                $scope.$apply();

                //初始化dataTables
                $('#dataTables').DataTable({
                    responsive: true,
                    "pagingType":   "full_numbers",
                    "sLoadingRecords": "正在加载数据...",
                    "sZeroRecords": "暂无数据",
                    "order": [[ 0, "asc" ]],
                    "language": {
                        "processing": "玩命加载中...",
                        "lengthMenu": "显示 _MENU_ 项结果",
                        "zeroRecords": "没有匹配结果",
                        "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                        "infoFiltered": "(由 _MAX_ 项结果过滤)",
                        "infoPostFix": "",
                        "url": "",
                        "paginate": {
                            "first":    "首页",
                            "previous": "上一页",
                            "next":     "下一页",
                            "last":     "末页"
                        }
                    },
                    columnDefs: [
                        { targets: 0, responsivePriority: 1  },
                        { targets: 9, responsivePriority: 2  }
                    ],
                    destroy: true
                });
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //前往新建患者
    $scope.toNewPatient = function(){
        $state.go("newPatient", {"index":$scope.moduleIndex, moduleList:$scope.moduleList});
    };

    //刷新patientList
    $scope.refresh = function(){
        $state.go('patientList', {"index":$scope.moduleIndex}, {reload: true});
    };

    //前往查看病历
    $scope.patientView = function(binglihao){
        var params = {};
        params.moduleID = $scope.moduleList[$scope.moduleIndex].id;
        params.module = $scope.moduleList[$scope.moduleIndex];
        params.binglihao = binglihao;
        params.index = $scope.moduleIndex;
        $state.go("patientEdit", params);
    };

    //前往编辑病例
    $scope.patientEdit = function(binglihao){
        var params = {};
        params.moduleID = $scope.moduleList[$scope.moduleIndex].id;
        params.module = $scope.moduleList[$scope.moduleIndex];
        params.binglihao = binglihao;
        params.index = $scope.moduleIndex;
        $state.go("patientEdit", params);
    };

    //删除病历确认框
    $scope.deleteConfirm = function(index){
        $('#deleteConfirm').modal('show');
        $scope.deleteIndex = index;
    };
    //删除病历
    $scope.deletePatient = function(index){
        dao.deletePatient($scope.moduleList[$scope.moduleIndex].id, $scope.patientList[index].binglihao, function(result){
            if(result.status=='1'){
                // $scope.patientList.splice(index, 1);
                // $scope.$apply();
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //提交审核
    $scope.auditApply = function(binglihao){
        dao.auditApply($scope.moduleList[$scope.moduleIndex].id, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //撤回审核
    $scope.auditBack = function(binglihao){
        dao.auditBack($scope.moduleList[$scope.moduleIndex].id, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //通过审核
    $scope.auditPass = function(binglihao){
        dao.auditPass($scope.moduleList[$scope.moduleIndex].id, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //否决审核
    $scope.auditFail = function(binglihao){
        dao.auditFail($scope.moduleList[$scope.moduleIndex].id, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
});

app.controller('newPatientCtrl', function($scope, $state, $rootScope, $stateParams) {
    $scope.moduleIndex = $stateParams.index;
    $scope.moduleList = $stateParams.moduleList;

	// 新增患者
	$scope.newPatient = function(inValid){
		console.log('inValid? '+inValid);
		if(!inValid){
		    utils.printInfo('newPatient',$scope.patient);
            dao.newPatient($scope.moduleList[$scope.moduleIndex].id, $scope.patient, function(result){
				if(result.status=='1'){//新建成功返回列表
                    $state.go("patientList", {"index":$scope.moduleIndex});
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;

                    // 随机分组
                    $rootScope.alert.content = '随机分组：' + $scope.moduleList[$scope.moduleIndex]['group_'+result.fenzu];

                    $rootScope.$apply();
                    $('#alertSuccess').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertSuccess').fadeOut();
                        }, 3000);
                    });
				}else if(result.status=='0'){//新建失败
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = result.err;
                    $rootScope.$apply();
                    $('#alertDanger').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertDanger').fadeOut();
                        }, 3000);
                    });
				}
			});
		}
	};

	//返回列表
    $scope.backToList = function(){
        $state.go("patientList", {"index":$scope.moduleIndex});
    };

    //性别列表
    $scope.genderList = [
        {
            "id": "0",
            "name": "男"
        },
        {
            "id": "1",
            "name": "女"
        }
    ];
});

app.controller('patientEditCtrl', function($scope, $stateParams, $rootScope, $state) {
    $scope.params = $stateParams;
    utils.printInfo('疾病模块',$scope.params.moduleID);
    utils.printInfo('病历号',$scope.params.binglihao);

    //获取病历基本信息
    dao.getPatient($scope.params.moduleID, $scope.params.binglihao, function(result){
        if(result.status==1){//成功
            $scope.patient = result.data;

            //zTree
            $scope.curNode = null; //表示选中的节点
            var zTree_Menu = null;

            getZNodes(function(zNodes){
                //树设置
                var setting = {
                    view: {
                        showLine: false, //设置 zTree是否显示节点之间的连线
                        showIcon: false,
                        selectedMulti: false, //设置是否允许同时选中多个节点
                        dblClickExpand: false, //双击节点时，是否自动展开父节点的标识
                        addDiyDom: addDiyDom
                    },
                    callback: {
                        beforeClick: beforeClick,
                        onClick: onClick
                    }
                };

                $(document).ready(function(){
                    //初始化树
                    $.fn.zTree.init($("#zTree"), setting, zNodes);
                    // zTree_Menu
                    zTree_Menu = $.fn.zTree.getZTreeObj("zTree");
                    // 初始化打开所有父节点
                    zTree_Menu.expandAll(true);
                    // 初始化选中第一个子节点
                    $scope.curNode = zTree_Menu.getNodes()[0].children[0];
                    while($scope.curNode.isParent) {
                        $scope.curNode = $scope.curNode.children[0];
                    }
                    zTree_Menu.selectNode($scope.curNode);

                    //添加showIcon
                    $("#zTree").addClass("showIcon");

                    // 初始化加载第一个表单
                    utils.printInfo('clicked node', $scope.curNode);
                    //从数据库获取表单数据
                    if($scope.curNode.type=='form'){
                        dao.getPatientForm($scope.curNode.id, $scope.patient.binglihao, function(result){
                            if(result.status==1){//成功
                                $scope.patientForm = result.data;
                                //将多选框字符串转换为数组
                                $scope.curNode.leaf.forEach(function(leaf){
                                    if(leaf.type=='checkbox'){
                                        if($scope.patientForm[leaf.id] && !Array.isArray($scope.patientForm[leaf.id])){
                                            $scope.patientForm[leaf.id] = $scope.patientForm[leaf.id].split(',');
                                        }else if(!$scope.patientForm[leaf.id]){
                                            var arr = [];
                                            for(var i=0; i<leaf.value.length; i++){
                                                arr.push('0');
                                            }
                                            $scope.patientForm[leaf.id] = arr;
                                        }
                                    }
                                });
                                $scope.$apply();

                                //bootstrap-datetimepicker 日期时间插件
                                $('.form_datetime').datetimepicker({
                                    language: 'zh-CN',
                                    format: 'yyyy/mm/dd hh:ii',
                                    weekStart: 1,
                                    todayBtn:  1,
                                    todayHighlight: 1,
                                    autoclose: 1,
                                    startView: 2,
                                    forceParse: 0
                                }).on('changeDate', function(ev){
                                    $scope.patientForm[$scope.dateLeafId] = $(ev.target).val();
                                });

                                $scope.datetimePicker = function(leafId, ev){//点击时获得id
                                    //$(ev.target).datetimepicker('show');
                                    $scope.dateLeafId = leafId;
                                };

                                //初始化上传插件 fileinput
                                initFileInput();
                                function initFileInput() {
                                    var projectfileoptions = {
                                        // theme: "explorer",
                                        language : 'zh',//设置语言
                                        uploadUrl: '/dao/uploadImage', //上传的地址
                                        uploadAsync: false,//是否异步上传
                                        allowedFileExtensions: ['dib','webp','jpeg','svgz','gif','jpg','ico','png','svg','tif','xbm','bmp','jfif','pjpeg','pjp','tiff'],//接收的文件后缀
                                        allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash'],
                                        maxFileCount: 10,//设置最大上传文件数
                                        browseClass: 'btn btn-primary fileinput-browse',//选择文件按钮css
                                        // browseLabel: '选择', //选择文件提示
                                        // buttonLabelClass: '',//选择文件提示css
                                        // browseIcon: '', //选择文件icon
                                        showRemove: true, //是否显示删除按钮
                                        showUpload: true, //是否显示上传按钮
                                        showCaption: true,//是否显示输入栏
                                        dropZoneEnabled: true,//是否显示拖拽区域
                                        browseOnZoneClick:true,//点击拖拽区域浏览文件
                                        enctype: 'multipart/form-data',
                                        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
                                        msgPlaceholder:"请选择图像文件……",
                                        maxFileSize:2048,
                                        msgSizeTooLarge:"文件太大！",
                                        required:true,//是否必须选择文件
                                        previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',//默认预览图标
                                        previewSettings:{

                                        },
                                        fileActionSettings:{
                                            showRemove: true,
                                            showUpload: true,
                                            showDownload: false,
                                            showZoom: false,
                                            showDrag: true,
                                            removeIcon: '<i class="fa fa-trash" aria-hidden="true"></i>',
                                            uploadIcon:'<i class="fa fa-cloud-upload" aria-hidden="true"></i>',
                                        },
                                        uploadExtraData: function (previewId, index) {
                                            var data = {};
                                            data.moduleID = $scope.params.moduleID;
                                            data.binglihao = $scope.params.binglihao;
                                            data.tableName = $scope.curNode.id;
                                            data.name = $scope.uploadName ? $scope.uploadName : '未命名';
                                            data.description = $scope.uploadDescription ? $scope.uploadDescription : '无';
                                            return data;
                                        }
                                    };
                                    $("#uploadImage_"+$scope.curNode.id).fileinput(projectfileoptions).on('filebatchuploadsuccess',function(event,data){
                                        utils.printInfo('uploadImage', data);
                                        $scope.refreshUploadRecords();
                                    });
                                }

                                //获取上传记录
                                dao.getUploadRecords($scope.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
                                    if(result.status=='1'){//成功
                                        $scope.uploadRecords = result.data;
                                        $scope.$apply();
                                    }else if(result.status=='0'){//失败
                                        //弹出警告框
                                        $rootScope.alert = {};
                                        $rootScope.alert.title = result.msg;
                                        $rootScope.alert.content = result.error;
                                        $rootScope.$apply();
                                        $('#alertDanger').fadeIn(function () {
                                            setTimeout(function(){
                                                $('#alertDanger').fadeOut();
                                            }, 3000);
                                        });
                                    }
                                });

                                $scope.$watch('uploadRecords', function(newValue, oldValue){
                                    if(newValue && newValue.length>0){
                                        //初始化dataTables
                                        $('#'+$scope.curNode.id).DataTable({
                                            searching : false,//显示搜索框
                                            lengthChange: false,//显示每页数目调整
                                            info: false,//显示信息
                                            paging: false,//显示分页
                                            responsive: true,
                                            "pagingType":   "full_numbers",
                                            "sLoadingRecords": "正在加载数据...",
                                            "sZeroRecords": "暂无数据",
                                            "order": [],
                                            "language": {
                                                "processing": "玩命加载中...",
                                                "lengthMenu": "显示 _MENU_ 项结果",
                                                "zeroRecords": "没有匹配结果",
                                                "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                                                "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                                                "infoFiltered": "(由 _MAX_ 项结果过滤)",
                                                "infoPostFix": "",
                                                "url": "",
                                                "paginate": {
                                                    "first":    "首页",
                                                    "previous": "上一页",
                                                    "next":     "下一页",
                                                    "last":     "末页"
                                                }
                                            },
                                            columnDefs: [
                                                { targets: 0, responsivePriority: 1  },
                                                { targets: 1, responsivePriority: 5  },
                                                { targets: 2, responsivePriority: 4  },
                                                { targets: 3, responsivePriority: 3  },
                                                { targets: 4, responsivePriority: 2  }
                                            ],
                                            destroy: true
                                        });
                                        $('.dataTables_empty').hide();
                                    }else{
                                        //初始化dataTables
                                        $('#'+$scope.curNode.id).DataTable({
                                            searching : false,//显示搜索框
                                            lengthChange: false,//显示每页数目调整
                                            info: false,//显示信息
                                            paging: false,//显示分页
                                            responsive: true,
                                            "pagingType":   "full_numbers",
                                            "sLoadingRecords": "正在加载数据...",
                                            "sZeroRecords": "暂无数据",
                                            "order": [],
                                            "language": {
                                                "processing": "玩命加载中...",
                                                "lengthMenu": "显示 _MENU_ 项结果",
                                                "zeroRecords": "没有匹配结果",
                                                "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                                                "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                                                "infoFiltered": "(由 _MAX_ 项结果过滤)",
                                                "infoPostFix": "",
                                                "url": "",
                                                "paginate": {
                                                    "first":    "首页",
                                                    "previous": "上一页",
                                                    "next":     "下一页",
                                                    "last":     "末页"
                                                }
                                            },
                                            columnDefs: [
                                                { targets: 0, responsivePriority: 1  },
                                                { targets: 1, responsivePriority: 5  },
                                                { targets: 2, responsivePriority: 4  },
                                                { targets: 3, responsivePriority: 3  },
                                                { targets: 4, responsivePriority: 2  }
                                            ],
                                            destroy: true
                                        });
                                        $('.dataTables_empty').show();
                                    }
                                });

                                //刷新上传记录
                                $scope.refreshUploadRecords = function(){
                                    //获取上传记录
                                    dao.getUploadRecords($scope.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
                                        if(result.status=='1'){//成功
                                            $scope.uploadRecords = result.data;
                                            $scope.$apply();
                                        }else if(result.status=='0'){//失败
                                            //弹出警告框
                                            $rootScope.alert = {};
                                            $rootScope.alert.title = result.msg;
                                            $rootScope.alert.content = result.error;
                                            $rootScope.$apply();
                                            $('#alertDanger').fadeIn(function () {
                                                setTimeout(function(){
                                                    $('#alertDanger').fadeOut();
                                                }, 3000);
                                            });
                                        }
                                    });
                                };

                                //删除上传记录
                                $scope.deleteUpload = function(moduleID, binglihao, folder) {
                                    dao.deleteUpload(moduleID, binglihao, folder, function(result){
                                        if(result.status=='1'){
                                            $scope.refreshUploadRecords();
                                            //
                                            $rootScope.alert = {};
                                            $rootScope.alert.title = result.msg;
                                            $rootScope.alert.content = '';
                                            $rootScope.$apply();
                                            //弹出警告框
                                            $('#alertSuccess').fadeIn(function () {
                                                setTimeout(function(){
                                                    $('#alertSuccess').fadeOut();
                                                }, 3000);
                                            });
                                        }else if(result.status=='0'){
                                            //弹出警告框
                                            $rootScope.alert = {};
                                            $rootScope.alert.title = result.msg;
                                            $rootScope.alert.content = result.err;
                                            $rootScope.$apply();
                                            $('#alertDanger').fadeIn(function () {
                                                setTimeout(function(){
                                                    $('#alertDanger').fadeOut();
                                                }, 3000);
                                            });
                                        }
                                    });
                                };

                                //查看图像
                                $scope.viewImage = function(moduleID, binglihao, folder){
                                    dao.getImageName(moduleID, binglihao, folder, function(result){
                                        if(result.status=='1'){//成功
                                            $scope.$apply(function(){
                                                $scope.viewBinglihao = binglihao;
                                                $scope.viewFolder = folder;
                                                $scope.images = result.data;
                                            });

                                            //baguetteBox
                                            var gallery = baguetteBox.run('.baguetteBoxGallery', {
                                                animation: 'fadeIn',
                                                buttons: false,
                                                noScrollbars: true,
                                                afterShow: function(){
                                                    console.log(111)
                                                },
                                                afterHide: function(){
                                                    console.log(222)
                                                }
                                            });
                                            baguetteBox.show(0,gallery[0]);
                                        }else if(result.status=='0'){//失败
                                            //弹出警告框
                                            $rootScope.alert = {};
                                            $rootScope.alert.title = result.msg;
                                            $rootScope.alert.content = result.error;
                                            $rootScope.$apply();
                                            $('#alertDanger').fadeIn(function () {
                                                setTimeout(function(){
                                                    $('#alertDanger').fadeOut();
                                                }, 3000);
                                            });
                                        }
                                    });
                                };
                            }else if(result.status==0){//失败
                                //弹出警告框
                                $rootScope.alert = {};
                                $rootScope.alert.title = result.msg;
                                $rootScope.alert.content = result.err;
                                $rootScope.$apply();
                                $('#alertDanger').fadeIn(function () {
                                    setTimeout(function(){
                                        $('#alertDanger').fadeOut();
                                    }, 3000);
                                });
                            }
                        });
                    }else if($scope.curNode.type=='link'){
                        $state.go('patientEdit.'+$scope.curNode.page);
                    }
                });
            });

            function beforeClick(treeId, node) {
                // 找到node的最上层父节点pNode
                var pNode = node;
                while (pNode && pNode.level !== 0) {
                    pNode = pNode.getParentNode();
                }

                // 找到curNode的最上层父节点pCurNode
                var pCurNode = $scope.curNode;
                while (pCurNode && pCurNode.level !== 0) {
                    pCurNode = pCurNode.getParentNode();
                }

                // 如果node是父节点，则展开/收缩
                if (node.isParent) {
                    zTree_Menu.expandNode(node);
                } else {
                    // 如果节点与之前所选节点在不同分支，则更改样式
                    if(pNode !== pCurNode){
                        //更改样式
                    }
                    $scope.curNode = node;
                }

                return !node.isParent;
            }

            function onClick(e, treeId, node) {
                utils.printInfo('clicked node', node);
                //从数据库获取表单数据
                dao.getPatientForm(node.id, $scope.patient.binglihao, function(result){
                    if(result.status==1){//成功
                        $scope.patientForm = result.data;
                        //将多选框字符串转换为数组
                        $scope.curNode.leaf.forEach(function(leaf){
                            if(leaf.type=='checkbox'){
                                if($scope.patientForm[leaf.id] && !Array.isArray($scope.patientForm[leaf.id])){
                                    $scope.patientForm[leaf.id] = $scope.patientForm[leaf.id].split(',');
                                }else if(!$scope.patientForm[leaf.id]){
                                    var arr = [];
                                    for(var i=0; i<leaf.value.length; i++){
                                        arr.push('0');
                                    }
                                    $scope.patientForm[leaf.id] = arr;
                                }
                            }
                        });
                        $scope.$apply();

                        //bootstrap-datetimepicker 日期时间插件
                        $('.form_datetime').datetimepicker({
                            language: 'zh-CN',
                            format: 'yyyy/mm/dd hh:ii',
                            weekStart: 1,
                            todayBtn:  1,
                            todayHighlight: 1,
                            autoclose: 1,
                            startView: 2,
                            forceParse: 0
                        }).on('changeDate', function(ev){
                            $scope.patientForm[$scope.dateLeafId] = $(ev.target).val();
                        });

                        //初始化上传插件 fileinput
                        initFileInput();
                        function initFileInput() {
                            var projectfileoptions = {
                                // theme: "explorer",
                                language : 'zh',//设置语言
                                uploadUrl: '/dao/uploadImage', //上传的地址
                                uploadAsync: false,//是否异步上传
                                allowedFileExtensions: ['dib','webp','jpeg','svgz','gif','jpg','ico','png','svg','tif','xbm','bmp','jfif','pjpeg','pjp','tiff'],//接收的文件后缀
                                allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash'],
                                maxFileCount: 10,//设置最大上传文件数
                                browseClass: 'btn btn-primary fileinput-browse',//选择文件按钮css
                                // browseLabel: '选择', //选择文件提示
                                // buttonLabelClass: '',//选择文件提示css
                                // browseIcon: '', //选择文件icon
                                showRemove: true, //是否显示删除按钮
                                showUpload: true, //是否显示上传按钮
                                showCaption: true,//是否显示输入栏
                                dropZoneEnabled: true,//是否显示拖拽区域
                                browseOnZoneClick:true,//点击拖拽区域浏览文件
                                enctype: 'multipart/form-data',
                                msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
                                msgPlaceholder:"请选择图像文件……",
                                maxFileSize:2048,
                                msgSizeTooLarge:"文件太大！",
                                required:true,//是否必须选择文件
                                previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',//默认预览图标
                                previewSettings:{

                                },
                                fileActionSettings:{
                                    showRemove: true,
                                    showUpload: true,
                                    showDownload: false,
                                    showZoom: false,
                                    showDrag: true,
                                    removeIcon: '<i class="fa fa-trash" aria-hidden="true"></i>',
                                    uploadIcon:'<i class="fa fa-cloud-upload" aria-hidden="true"></i>',
                                },
                                uploadExtraData: function (previewId, index) {
                                    var data = {};
                                    data.moduleID = $scope.params.moduleID;
                                    data.binglihao = $scope.params.binglihao;
                                    data.tableName = $scope.curNode.id;
                                    data.name = $scope.uploadName ? $scope.uploadName : '未命名';
                                    data.description = $scope.uploadDescription ? $scope.uploadDescription : '无';
                                    return data;
                                }
                            };
                            $("#uploadImage_"+$scope.curNode.id).fileinput(projectfileoptions).on('filebatchuploadsuccess',function(event,data){
                                utils.printInfo('uploadImage', data);
                                $scope.refreshUploadRecords();
                            });
                        }
                        //获取上传记录
                        dao.getUploadRecords($scope.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
                            if(result.status=='1'){//成功
                                $scope.uploadRecords = result.data;
                                $scope.$apply();

                            }else if(result.status=='0'){//失败
                                //弹出警告框
                                $rootScope.alert = {};
                                $rootScope.alert.title = result.msg;
                                $rootScope.alert.content = result.error;
                                $rootScope.$apply();
                                $('#alertDanger').fadeIn(function () {
                                    setTimeout(function(){
                                        $('#alertDanger').fadeOut();
                                    }, 3000);
                                });
                            }
                        });

                    }else if(result.status==0){//失败
                        //弹出警告框
                        $rootScope.alert = {};
                        $rootScope.alert.title = result.msg;
                        $rootScope.alert.content = result.error;
                        $rootScope.$apply();
                        $('#alertDanger').fadeIn(function () {
                            setTimeout(function(){
                                $('#alertDanger').fadeOut();
                            }, 3000);
                        });
                    }
                });
                if(node.type=='form'){
                    $state.go('patientEdit.patientForm');
                }else if(node.type=='link'){
                    $state.go('patientEdit.'+node.page);
                }

                //重置保存按钮状态
                $scope.saveClicked = false;
            }

            function addDiyDom(treeId, treeNode) {
                var spaceWidth = 5;
                var switchObj = $("#" + treeNode.tId + "_switch"),
                    icoObj = $("#" + treeNode.tId + "_ico");
                switchObj.remove();
                icoObj.before(switchObj);

                if (treeNode.level > 1) {
                    var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
                    switchObj.before(spaceStr);
                }
            }

            //获取zNodes
            function getZNodes(callback){
                //获取 moduleInfo
                dao.moduleInfo($scope.params.moduleID, function(result) {
                    if (result.status == 1) {//成功
                        $scope.moduleInfo = result.data;
                        $scope.$apply();

                        var zNodes = result.data.node;

                        utils.printInfo('zNodes', zNodes);
                        callback(zNodes);

                    } else if (result.status == 0) {//失败
                        //弹出警告框
                        $rootScope.alert = {};
                        $rootScope.alert.title = result.msg;
                        $rootScope.alert.content = result.error;
                        $rootScope.$apply();
                        $('#alertDanger').fadeIn(function () {
                            setTimeout(function () {
                                $('#alertDanger').fadeOut();
                            }, 3000);
                        });
                    }
                });
            }

        }else if(result.status==0){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.error;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }

    });

    //评定项具体操作流程
    $scope.evaluateFlowModal = function(){
        $('#evaluateFlow').modal('show');
    }

    $state.go('patientEdit.patientForm');

    //保存表单
    $scope.saveClicked = false;//保存按钮状态
    $scope.savePatientForm = function(flag, leaf){
        var data = JSON.parse(JSON.stringify($scope.patientForm));
        if(flag){//检查必填项
            if(check(leaf)){
                //将多选框数组转换为字符串
                Object.keys(data).forEach(function(key){
                    if(Array.isArray(data[key])){
                        data[key] = data[key].join(',');
                    }
                });
                dao.savePatientForm($scope.params.moduleID, $scope.curNode.id, data, function(result){
                    if(result.status=='1'){//成功
                        //弹出警告框
                        $rootScope.alert = {};
                        $rootScope.alert.title = result.msg;
                        $rootScope.alert.content = '';
                        $rootScope.$apply();
                        $('#alertSuccess').fadeIn(function () {
                            setTimeout(function(){
                                $('#alertSuccess').fadeOut();
                            }, 3000);
                        });
                    }else if(result.status=='0'){//失败
                        //弹出警告框
                        $rootScope.alert = {};
                        $rootScope.alert.title = result.msg;
                        $rootScope.alert.content = ' ';
                        $rootScope.$apply();
                        $('#alertDanger').fadeIn(function () {
                            setTimeout(function(){
                                $('#alertDanger').fadeOut();
                            }, 3000);
                        });
                    }
                })
            }else{
                return;
            }
            function check(leaf){
                for(var i=0; i<leaf.length; i++){
                    if(leaf[i].required=='true' && $scope.leafInValid(data[leaf[i].id])){
                        $('#requiredModal').modal('show');
                        //保存按钮状态
                        $scope.saveClicked = true;
                        return false;
                    }
                }
                return true;
            }
        }else{//不检查直接保存
            //将多选框数组转换为字符串
            Object.keys(data).forEach(function(key){
                if(Array.isArray(data[key])){
                    data[key] = data[key].join(',');
                }
            });
            dao.savePatientForm($scope.params.moduleID, $scope.curNode.id, data, function(result){
                if(result.status=='1'){//成功
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = '';
                    $rootScope.$apply();
                    $('#alertSuccess').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertSuccess').fadeOut();
                        }, 3000);
                    });
                }else if(result.status=='0'){//失败
                    //弹出警告框
                    $rootScope.alert = {};
                    $rootScope.alert.title = result.msg;
                    $rootScope.alert.content = ' ';
                    $rootScope.$apply();
                    $('#alertDanger').fadeIn(function () {
                        setTimeout(function(){
                            $('#alertDanger').fadeOut();
                        }, 3000);
                    });
                }
            })
        }
    };
    //Ctrl+s保存
    document.onkeydown = function(event) {
        if (event.ctrlKey == true && event.keyCode == 83) {//Ctrl+S
            event.returnValue = false;
            $scope.savePatientForm();
        }
    }

    //返回列表
    $scope.backToList = function(){
        $state.go("patientList", {"index":$scope.params.index});
    };

    //刷新，重新获取patient信息
    $scope.refresh = function(){
        //获取病历基本信息
        dao.getPatient($scope.params.moduleID, $scope.params.binglihao, function(result){
            if(result.status==1){//成功
                $scope.patient = result.data;
                $scope.$apply();
            }else if(result.status==0){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });

    };

    //删除病历确认框
    $scope.deleteConfirm = function(binglihao){
        $('#deleteConfirm').modal('show');
        $scope.deleteBinglihao = binglihao;
    };
    //删除病历
    $scope.deletePatient = function(binglihao){
        dao.deletePatient($scope.params.moduleID, binglihao, function(result){
            if(result.status=='1'){
                //删除病历返回列表
                $scope.backToList();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //提交审核
    $scope.auditApply = function(binglihao){
        dao.auditApply($scope.params.moduleID, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //撤回审核
    $scope.auditBack = function(binglihao){
        dao.auditBack($scope.params.moduleID, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //通过审核
    $scope.auditPass = function(binglihao){
        dao.auditPass($scope.params.moduleID, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //否决审核
    $scope.auditFail = function(binglihao){
        dao.auditFail($scope.params.moduleID, binglihao, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //找到上一节点
    $scope.getLastNode = function(){
        if($scope.curNode.isFirstNode){
            if($scope.curNode.level == 0){//当前为顶层节点，返回null
                return null;
            }else{//当前不是顶层节点
                var node = $scope.curNode.getParentNode();
                while(node.level!=0 || !node.isFirstNode){//结束循环：既是顶层节点，也是第一个节点
                    if(node.level!=0 && !node.isFirstNode){//既不是顶层节点，也不是第一个节点
                        node = node.getPreNode();
                        if(node.isParent){//该节点是父节点，返回此父节点下的最后一个节点
                            node = node.children[node.children.length-1];
                            while(node && node.isParent){
                                node = node.children[node.children.length-1];
                            }
                            return node;
                        }else{//该节点不是父节点，直接返回
                            return node;
                        }
                    }else if(node.level==0 && !node.isFirstNode){//是顶层节点，但不是第一个节点
                        node = node.getPreNode();
                        if(node.isParent){//该节点是父节点，返回此父节点下的最后一个节点
                            node = node.children[node.children.length-1];
                            while(node && node.isParent){
                                node = node.children[node.children.length-1];
                            }
                            return node;
                        }else{//该节点不是父节点，直接返回
                            return node;
                        }
                    }else if(node.level!=0 && node.isFirstNode) {//不是顶层节点，但是第一个节点
                        node = node.getParentNode();
                    }
                }
                return null;
            }
        }else{
            var node = $scope.curNode.getPreNode();
            if(node.isParent){//该节点是父节点，返回此父节点下的最后一个节点
                node = node.children[node.children.length-1];
                while(node && node.isParent){
                    node = node.children[node.children.length-1];
                }
                return node;
            }else{//该节点不是父节点，直接返回
                return node;
            }
        }
    };
    //找到下一节点
    $scope.getNextNode = function(){
        if($scope.curNode.isLastNode){
            if($scope.curNode.level == 0){//当前为顶层节点，返回null
                return null;
            }else{//当前不是顶层节点
                var node = $scope.curNode.getParentNode();
                while(node.level!=0 || !node.isLastNode){//结束循环：既是顶层节点，也是最后一个节点
                    if(node.level!=0 && !node.isLastNode){//既不是顶层节点，也不是最后一个节点
                        node = node.getNextNode();
                        if(node.isParent){//该节点是父节点，返回此父节点下的第一个节点
                            node = node.children[0];
                            while(node && node.isParent){
                                node = node.children[0];
                            }
                            return node;
                        }else{//该节点不是父节点，直接返回
                            return node;
                        }
                    }else if(node.level==0 && !node.isLastNode){//是顶层节点，但不是最后一个节点
                        node = node.getNextNode();
                        if(node.isParent){//该节点是父节点，返回此父节点下的第一个节点
                            node = node.children[0];
                            while(node && node.isParent){
                                node = node.children[0];
                            }
                            return node;
                        }else{//该节点不是父节点，直接返回
                            return node;
                        }
                    }else if(node.level!=0 && node.isLastNode) {//不是顶层节点，但是最后一个节点
                        node = node.getParentNode();
                    }
                }
                return null;
            }
        }else{
            var node = $scope.curNode.getNextNode();
            if(node.isParent){//该节点是父节点，返回此父节点下的第一个节点
                node = node.children[0];
                while(node && node.isParent){
                    node = node.children[0];
                }
                return node;
            }else{//该节点不是父节点，直接返回
                return node;
            }
        }
    };
    //上一页
    $scope.lastPage = function(){
        var lastNode = $scope.getLastNode();
        if(lastNode){
            $('#'+lastNode.tId+' a').trigger("click");
        }
    };
    //下一页
    $scope.nextPage = function(){
        var nextNode = $scope.getNextNode();
        if(nextNode){
            $('#'+nextNode.tId+' a').trigger("click");
        }
    };
    //监听节点变化，为上一页/下一页添加/删除class
    $scope.$watch('curNode',function(value){
        if(value){
            if(!$scope.getLastNode()){//第一个
                $('#lastPage').addClass('disabled');
                $('#nextPage').removeClass('disabled');
            }else if(!$scope.getNextNode()){//最后一个
                $('#lastPage').removeClass('disabled');
                $('#nextPage').addClass('disabled');
            }else{
                $('#lastPage').removeClass('disabled');
                $('#nextPage').removeClass('disabled');
            }
        }
    });

    //上一个病人
    $scope.lastPatient = function(){
        //获取patientList
        dao.getPatientList($scope.params.moduleID, function(result){
            if(result.status=='1'){//成功
                $scope.patientList = result.data;
                var index = $scope.patientList.findIndex(function(patient){
                    return $scope.patient.binglihao == patient.binglihao;
                });
                var lastIndex = index-1;
                if(lastIndex < 0){
                    lastIndex = $scope.patientList.length-1;
                }
                //前往编辑病例
                var params = {};
                params.moduleID = $scope.params.moduleID;
                params.binglihao = $scope.patientList[lastIndex].binglihao;
                $state.reload("patientEdit", params);
                window.scrollTo(0,0);
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    }
    //下一个病人
    $scope.nextPatient = function(){
        //获取patientList
        dao.getPatientList($scope.params.moduleID, function(result){
            if(result.status=='1'){//成功
                $scope.patientList = result.data;
                var index = $scope.patientList.findIndex(function(patient){
                    return $scope.patient.binglihao == patient.binglihao;
                });
                var nextIndex = index+1;
                if(nextIndex == $scope.patientList.length){
                    nextIndex = 0;
                }
                //前往编辑病例
                var params = {};
                params.moduleID = $scope.params.moduleID;
                params.binglihao = $scope.patientList[nextIndex].binglihao;
                $state.reload("patientEdit", params);
                window.scrollTo(0,0);
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    }

    //判断值是否在数组中，用于多次术后复查显示
    $scope.inArray = function(input, arr){
        if(Array.isArray(arr)){
            for(var i=0; i<arr.length; i++){
                if(input==arr[i]) return true;
            }
            return false;
        }else{
            return false;
        }
    };

    //判断必填项是否已填，true未填，false已填
    $scope.leafInValid = function(value){
        if(Array.isArray(value)){
            var flag = true;
            for(var i=0; i<value.length; i++){
                if(value[i]=='1'){
                    flag = false;
                    break;
                }
            }
            return flag;
        }else{
            if(!value) {
                return true;
            }
            return false;
        }
    };
});
app.controller('patientFormCtrl', function($scope, $stateParams, $rootScope, $state) {
    $scope.uploadModal = function(){
        $('#uploadModal').modal('show');
    };

});



app.controller('appendicitis_03_sqjc_Ctrl', function($scope, $stateParams, $rootScope, $state) {
    //初始化上传插件 fileinput
    initFileInput();
    function initFileInput() {
        var projectfileoptions = {
            // theme: "explorer",
            language : 'zh',//设置语言
            uploadUrl: '/dao/uploadImage', //上传的地址
            uploadAsync: false,//是否异步上传
            allowedFileExtensions: ['dib','webp','jpeg','svgz','gif','jpg','ico','png','svg','tif','xbm','bmp','jfif','pjpeg','pjp','tiff'],//接收的文件后缀
            allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash'],
            maxFileCount: 10,//设置最大上传文件数
            browseClass: 'btn btn-primary fileinput-browse',//选择文件按钮css
            // browseLabel: '选择', //选择文件提示
            // buttonLabelClass: '',//选择文件提示css
            // browseIcon: '', //选择文件icon
            showRemove: true, //是否显示删除按钮
            showUpload: true, //是否显示上传按钮
            showCaption: true,//是否显示输入栏
            dropZoneEnabled: true,//是否显示拖拽区域
            browseOnZoneClick:true,//点击拖拽区域浏览文件
            enctype: 'multipart/form-data',
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            msgPlaceholder:"请选择图像文件……",
            maxFileSize:2048,
            msgSizeTooLarge:"文件太大！",
            required:true,//是否必须选择文件
            previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',//默认预览图标
            previewSettings:{

            },
            fileActionSettings:{
                showRemove: true,
                showUpload: true,
                showDownload: false,
                showZoom: false,
                showDrag: true,
                removeIcon: '<i class="fa fa-trash" aria-hidden="true"></i>',
                uploadIcon:'<i class="fa fa-cloud-upload" aria-hidden="true"></i>',
            },
            uploadExtraData: function (previewId, index) {
                var data = {};
                data.moduleID = $scope.$parent.params.moduleID;
                data.binglihao = $scope.$parent.params.binglihao;
                data.tableName = $scope.curNode.id;
                data.name = $scope.uploadName ? $scope.uploadName : '未命名';
                data.description = $scope.uploadDescription ? $scope.uploadDescription : '无';
                return data;
            }
        };
        $("#uploadImage_sqjc").fileinput(projectfileoptions).on('filebatchuploadsuccess',function(event,data){
            utils.printInfo('uploadImage', data);
            $scope.refreshUploadRecords();
        });
    }

    //获取上传记录
    dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
        if(result.status=='1'){//成功
            $scope.uploadRecords = result.data;
            $scope.$apply();

            //初始化dataTables
            $('#sqjc_dataTables').DataTable({
                searching : false,//显示搜索框
                lengthChange: false,//显示每页数目调整
                info: false,//显示信息
                paging: false,//显示分页
                responsive: true,
                "pagingType":   "full_numbers",
                "sLoadingRecords": "正在加载数据...",
                "sZeroRecords": "暂无数据",
                "order": [],
                "language": {
                    "processing": "玩命加载中...",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "zeroRecords": "没有匹配结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "infoPostFix": "",
                    "url": "",
                    "paginate": {
                        "first":    "首页",
                        "previous": "上一页",
                        "next":     "下一页",
                        "last":     "末页"
                    }
                },
                columnDefs: [
                    { targets: 0, responsivePriority: 1  },
                    { targets: 1, responsivePriority: 5  },
                    { targets: 2, responsivePriority: 4  },
                    { targets: 3, responsivePriority: 3  },
                    { targets: 4, responsivePriority: 2  }
                ],
                destroy: true
            });
        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.error;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //刷新上传记录
    $scope.refreshUploadRecords = function(){
        //获取上传记录
        dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
            if(result.status=='1'){//成功
                $state.reload('patientEdit.appendicitis_03_sqjc');
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //删除上传记录
    $scope.deleteUpload = function(moduleID, binglihao, folder) {
        dao.deleteUpload(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){
                $scope.refreshUploadRecords();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //查看图像
    $scope.viewImage = function(moduleID, binglihao, folder){
        dao.getImageName(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){//成功
                $scope.$apply(function(){
                    $scope.viewBinglihao = binglihao;
                    $scope.viewFolder = folder;
                    $scope.images = result.data;
                });

                //baguetteBox
                var gallery = baguetteBox.run('.baguetteBoxGallery', {
                    animation: 'fadeIn',
                    buttons: false,
                    noScrollbars: true,
                    afterShow: function(){
                        console.log(111)
                    },
                    afterHide: function(){
                        console.log(222)
                    }
                });
                baguetteBox.show(0,gallery[0]);
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
});
app.controller('appendicitis_04_szxx_Ctrl', function($scope, $stateParams, $rootScope, $state) {
});
app.controller('appendicitis_05_shfc_Ctrl', function($scope, $stateParams, $rootScope, $state) {
    //bootstrap-datetimepicker 日期时间插件
    $('.form_datetime').datetimepicker({
        language: 'zh-CN',
        format: 'yyyy/mm/dd hh:ii',
        weekStart: 1,
        todayBtn:  1,
        todayHighlight: 1,
        autoclose: 1,
        startView: 2,
        forceParse: 0
    }).on('changeDate', function(ev){
        $scope.patientForm[$scope.dateLeafId] = $(ev.target).val();
    });


    //初始化上传插件 fileinput
    initFileInput();
    function initFileInput() {
        var projectfileoptions = {
            // theme: "explorer",
            language : 'zh',//设置语言
            uploadUrl: '/dao/uploadImage', //上传的地址
            uploadAsync: false,//是否异步上传
            allowedFileExtensions: ['dib','webp','jpeg','svgz','gif','jpg','ico','png','svg','tif','xbm','bmp','jfif','pjpeg','pjp','tiff'],//接收的文件后缀
            allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash'],
            maxFileCount: 10,//设置最大上传文件数
            browseClass: 'btn btn-primary fileinput-browse',//选择文件按钮css
            // browseLabel: '选择', //选择文件提示
            // buttonLabelClass: '',//选择文件提示css
            // browseIcon: '', //选择文件icon
            showRemove: true, //是否显示删除按钮
            showUpload: true, //是否显示上传按钮
            showCaption: true,//是否显示输入栏
            dropZoneEnabled: true,//是否显示拖拽区域
            browseOnZoneClick:true,//点击拖拽区域浏览文件
            enctype: 'multipart/form-data',
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            msgPlaceholder:"请选择图像文件……",
            maxFileSize:2048,
            msgSizeTooLarge:"文件太大！",
            required:true,//是否必须选择文件
            previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',//默认预览图标
            previewSettings:{

            },
            fileActionSettings:{
                showRemove: true,
                showUpload: true,
                showDownload: false,
                showZoom: false,
                showDrag: true,
                removeIcon: '<i class="fa fa-trash" aria-hidden="true"></i>',
                uploadIcon:'<i class="fa fa-cloud-upload" aria-hidden="true"></i>',
            },
            uploadExtraData: function (previewId, index) {
                var data = {};
                data.moduleID = $scope.$parent.params.moduleID;
                data.binglihao = $scope.$parent.params.binglihao;
                data.tableName = $scope.curNode.id;
                data.name = $scope.uploadName ? $scope.uploadName : '未命名';
                data.description = $scope.uploadDescription ? $scope.uploadDescription : '无';
                return data;
            }
        };
        $("#uploadImage_shfc").fileinput(projectfileoptions).on('filebatchuploadsuccess',function(event,data){
            utils.printInfo('uploadImage', data);
            $scope.refreshUploadRecords();
        });
    }

    //获取上传记录
    dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
        if(result.status=='1'){//成功
            $scope.uploadRecords = result.data;
            $scope.$apply();

            //初始化dataTables
            $('#shfc_dataTables').DataTable({
                searching : false,//显示搜索框
                lengthChange: false,//显示每页数目调整
                info: false,//显示信息
                paging: false,//显示分页
                responsive: true,
                "pagingType":   "full_numbers",
                "sLoadingRecords": "正在加载数据...",
                "sZeroRecords": "暂无数据",
                "order": [],
                "language": {
                    "processing": "玩命加载中...",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "zeroRecords": "没有匹配结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "infoPostFix": "",
                    "url": "",
                    "paginate": {
                        "first":    "首页",
                        "previous": "上一页",
                        "next":     "下一页",
                        "last":     "末页"
                    }
                },
                columnDefs: [
                    { targets: 0, responsivePriority: 1  },
                    { targets: 1, responsivePriority: 5  },
                    { targets: 2, responsivePriority: 4  },
                    { targets: 3, responsivePriority: 3  },
                    { targets: 4, responsivePriority: 2  }
                ],
                destroy: true
            });
        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.error;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //刷新上传记录
    $scope.refreshUploadRecords = function(){
        //获取上传记录
        dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
            if(result.status=='1'){//成功
                $state.reload('patientEdit.appendicitis_05_shfc');
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //删除上传记录
    $scope.deleteUpload = function(moduleID, binglihao, folder) {
        dao.deleteUpload(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){
                $scope.refreshUploadRecords();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //查看图像
    $scope.viewImage = function(moduleID, binglihao, folder){
        dao.getImageName(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){//成功
                $scope.$apply(function(){
                    $scope.viewBinglihao = binglihao;
                    $scope.viewFolder = folder;
                    $scope.images = result.data;
                });

                //baguetteBox
                var gallery = baguetteBox.run('.baguetteBoxGallery', {
                    animation: 'fadeIn',
                    buttons: false,
                    noScrollbars: true,
                    afterShow: function(){
                        console.log(111)
                    },
                    afterHide: function(){
                        console.log(222)
                    }
                });
                baguetteBox.show(0,gallery[0]);
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
});
app.controller('appendicitis_05_cyqfc_Ctrl', function($scope, $stateParams, $rootScope, $state) {
    //初始化上传插件 fileinput
    initFileInput();
    function initFileInput() {
        var projectfileoptions = {
            // theme: "explorer",
            language : 'zh',//设置语言
            uploadUrl: '/dao/uploadImage', //上传的地址
            uploadAsync: false,//是否异步上传
            allowedFileExtensions: ['dib','webp','jpeg','svgz','gif','jpg','ico','png','svg','tif','xbm','bmp','jfif','pjpeg','pjp','tiff'],//接收的文件后缀
            allowedPreviewTypes:['image', 'html', 'text', 'video', 'audio', 'flash'],
            maxFileCount: 10,//设置最大上传文件数
            browseClass: 'btn btn-primary fileinput-browse',//选择文件按钮css
            // browseLabel: '选择', //选择文件提示
            // buttonLabelClass: '',//选择文件提示css
            // browseIcon: '', //选择文件icon
            showRemove: true, //是否显示删除按钮
            showUpload: true, //是否显示上传按钮
            showCaption: true,//是否显示输入栏
            dropZoneEnabled: true,//是否显示拖拽区域
            browseOnZoneClick:true,//点击拖拽区域浏览文件
            enctype: 'multipart/form-data',
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            msgPlaceholder:"请选择图像文件……",
            maxFileSize:2048,
            msgSizeTooLarge:"文件太大！",
            required:true,//是否必须选择文件
            previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',//默认预览图标
            previewSettings:{

            },
            fileActionSettings:{
                showRemove: true,
                showUpload: true,
                showDownload: false,
                showZoom: false,
                showDrag: true,
                removeIcon: '<i class="fa fa-trash" aria-hidden="true"></i>',
                uploadIcon:'<i class="fa fa-cloud-upload" aria-hidden="true"></i>',
            },
            uploadExtraData: function (previewId, index) {
                var data = {};
                data.moduleID = $scope.$parent.params.moduleID;
                data.binglihao = $scope.$parent.params.binglihao;
                data.tableName = $scope.curNode.id;
                data.name = $scope.uploadName ? $scope.uploadName : '未命名';
                data.description = $scope.uploadDescription ? $scope.uploadDescription : '无';
                return data;
            }
        };
        $("#uploadImage_cyqfc").fileinput(projectfileoptions).on('filebatchuploadsuccess',function(event,data){
            utils.printInfo('uploadImage', data);
            $scope.refreshUploadRecords();
        });
    }

    //获取上传记录
    dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
        if(result.status=='1'){//成功
            $scope.uploadRecords = result.data;
            $scope.$apply();

            //初始化dataTables
            $('#cyqfc_dataTables').DataTable({
                searching : false,//显示搜索框
                lengthChange: false,//显示每页数目调整
                info: false,//显示信息
                paging: false,//显示分页
                responsive: true,
                "pagingType":   "full_numbers",
                "sLoadingRecords": "正在加载数据...",
                "sZeroRecords": "暂无数据",
                "order": [],
                "language": {
                    "processing": "玩命加载中...",
                    "lengthMenu": "显示 _MENU_ 项结果",
                    "zeroRecords": "没有匹配结果",
                    "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "infoFiltered": "(由 _MAX_ 项结果过滤)",
                    "infoPostFix": "",
                    "url": "",
                    "paginate": {
                        "first":    "首页",
                        "previous": "上一页",
                        "next":     "下一页",
                        "last":     "末页"
                    }
                },
                columnDefs: [
                    { targets: 0, responsivePriority: 1  },
                    { targets: 1, responsivePriority: 5  },
                    { targets: 2, responsivePriority: 4  },
                    { targets: 3, responsivePriority: 3  },
                    { targets: 4, responsivePriority: 2  }
                ],
                destroy: true
            });
        }else if(result.status=='0'){//失败
            //弹出警告框
            $rootScope.alert = {};
            $rootScope.alert.title = result.msg;
            $rootScope.alert.content = result.error;
            $rootScope.$apply();
            $('#alertDanger').fadeIn(function () {
                setTimeout(function(){
                    $('#alertDanger').fadeOut();
                }, 3000);
            });
        }
    });

    //刷新上传记录
    $scope.refreshUploadRecords = function(){
        //获取上传记录
        dao.getUploadRecords($scope.$parent.params.moduleID, $scope.params.binglihao, $scope.curNode.id, function(result){
            if(result.status=='1'){//成功
                $state.reload('patientEdit.appendicitis_05_cyqfc');
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //删除上传记录
    $scope.deleteUpload = function(moduleID, binglihao, folder) {
        dao.deleteUpload(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){
                $scope.refreshUploadRecords();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.err;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //查看图像
    $scope.viewImage = function(moduleID, binglihao, folder){
        dao.getImageName(moduleID, binglihao, folder, function(result){
            if(result.status=='1'){//成功
                $scope.$apply(function(){
                    $scope.viewBinglihao = binglihao;
                    $scope.viewFolder = folder;
                    $scope.images = result.data;
                });

                //baguetteBox
                var gallery = baguetteBox.run('.baguetteBoxGallery', {
                    animation: 'fadeIn',
                    buttons: false,
                    noScrollbars: true,
                    afterShow: function(){
                        console.log(111)
                    },
                    afterHide: function(){
                        console.log(222)
                    }
                });
                baguetteBox.show(0,gallery[0]);
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
});
app.controller('appendicitis_06_sfxx_Ctrl', function($scope, $stateParams, $rootScope, $state) {
});


app.controller('userManageCtrl', function($scope, $state, $rootScope) {
	//获取模块列表 module list
	dao.getModuleList(function(result){
		if(result.status=='1'){//成功
			$scope.moduleList = result.data;
			$scope.$apply();

		}else if(result.status=='0'){//失败
			//弹出警告框
			$rootScope.alert = {};
			$rootScope.alert.title = result.msg;
			$rootScope.alert.content = result.err;
			$rootScope.$apply();
			$('#alertDanger').fadeIn(function () {
				setTimeout(function(){
					$('#alertDanger').fadeOut();
				}, 3000);
			});
		}
	});

    //获取 getUserList
    if($rootScope.user.authority>=3){
        dao.getUserList(function(result){
            if(result.status=='1'){//成功
                $scope.userList = result.data;
                $scope.$apply();

                //初始化dataTables
                $('#dataTables').DataTable({
                    responsive: true,
                    "pagingType":   "full_numbers",
                    "sLoadingRecords": "正在加载数据...",
                    "sZeroRecords": "暂无数据",
                    "order": [[4,'asc'],[ 3, "asc" ],[0, 'asc']],
                    "language": {
                        "processing": "玩命加载中...",
                        "lengthMenu": "显示 _MENU_ 项结果",
                        "zeroRecords": "没有匹配结果",
                        "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                        "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
                        "infoFiltered": "(由 _MAX_ 项结果过滤)",
                        "infoPostFix": "",
                        "url": "",
                        "paginate": {
                            "first":    "首页",
                            "previous": "上一页",
                            "next":     "下一页",
                            "last":     "末页"
                        }
                    },
                    columnDefs: [
                        { targets: 0, responsivePriority: 1  },
                        { targets: 5, responsivePriority: 2  }
                    ]
                });
            }else if(result.status=='0'){//失败
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    }else{
        alert('权限不够！');
    }

    //刷新
    $scope.refresh = function(){
        $state.reload('userManage');
    };

    //删除用户确认框
    $scope.deleteConfirm = function(username){
        $('#deleteConfirm').modal('show');
        $scope.deleteUsername = username;
    };
    //删除用户
    $scope.deleteUser = function(username){
        dao.deleteUser(username, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //用户通过审核
    $scope.userPass = function(username){
        dao.userPass(username, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };
    //用户未通过审核
    $scope.userFail = function(username){
        dao.userFail(username, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //用户重设密码确认框
    $scope.resetConfirm = function(username){
        $('#resetConfirm').modal('show');
        $scope.resetUsername = username;
    };
    //用户重设密码
    $scope.userReset = function(username){
        dao.userReset(username, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

    //更改用户权限确认框
    $scope.changeConfirm = function(username, authority){
        $('#changeConfirm').modal('show');
        $scope.changeUsername = username;
        $scope.changeAuthority = authority;
    };
    //更改用户权限
    $scope.userChange = function(username, param, type){
        dao.userChange(username, param, type, function(result){
            if(result.status=='1'){
                $scope.refresh();
                //
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = '';
                $rootScope.$apply();
                //弹出警告框
                $('#alertSuccess').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertSuccess').fadeOut();
                    }, 3000);
                });
            }else if(result.status=='0'){
                //弹出警告框
                $rootScope.alert = {};
                $rootScope.alert.title = result.msg;
                $rootScope.alert.content = result.error;
                $rootScope.$apply();
                $('#alertDanger').fadeIn(function () {
                    setTimeout(function(){
                        $('#alertDanger').fadeOut();
                    }, 3000);
                });
            }
        });
    };

	//更改模块
	$scope.changeModule = function(username, module){
		$('#changeModuleConfirm').modal('show');
		$scope.changeUsername = username;
		$scope.changeModule = module;
	};
});

app.controller('messageCtrl', function($scope, $stateParams) {

});

//users
users.controller('loginCtrl', function($scope, $state) {
	$scope.submitForm = function(){
        utils.printInfo('login',$scope.login);

		dao.login($scope.login, function(result){
			if(result.status=='0'){
                $scope.loginResult = {};
                $scope.loginResult.msg = result.msg;
                $scope.loginResult.error = result.error;
                $scope.$apply();
			}else if(result.status=='1'){
                window.location.href='/';
			}
		});

		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	};
});

users.controller('registerCtrl', function($scope, $state) {
	//获取模块列表 module list
	dao.getModuleList(function(result){
		if(result.status=='1'){//成功
			$scope.moduleList = result.data;
			$scope.$apply();

		}else if(result.status=='0'){//失败
			//弹出警告框
			// $rootScope.alert = {};
			// $rootScope.alert.title = result.msg;
			// $rootScope.alert.content = result.err;
			// $rootScope.$apply();
			// $('#alertDanger').fadeIn(function () {
			// 	setTimeout(function(){
			// 		$('#alertDanger').fadeOut();
			// 	}, 3000);
			// });
			alert(result.msg);
		}
	});

	$scope.submitForm = function(){
        utils.printInfo('register',$scope.register);

		//验证账号唯一性
		dao.usernameValid($scope.register.username, function(result){
            $scope.registerResult = {};
			if(result.status=='0'){
				$scope.registerResult = result.msg;
				$scope.$apply();
			}else if(result.status==1){
				//注册
				var register = $scope.register;

				dao.register(register, function(result){
                    if(result.status=='0') {
                        $scope.registerResult = result.msg;
                        $scope.$apply();
                    }else if(result.status=='1') {
                        $('#success').modal('show');
                        setInterval(function(){
                            $('#success').modal('hide');
                            $state.go('login');
                        }, 3 * 1000 );
                    }
				})
			}
		});

		return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
	};

	$scope.cancel = function(){
	    $state.go('login');
    }
});

/*自定义指令--比较两个密码是否相等*/
users.directive('comparePwd',function(){
    /*angular 自定义指令，可上网自行查找*/
    return{
        require : 'ngModel',
        /*scope表示作用域，elem表示使用这个指令的元素对象（这里指第二个密码框），attrs。。。ctrl。。。*/
        link : function(scope,elem,attrs,ctrl){
            /*写自己的业务逻辑*/
            //注意这样取值的话，第一密码框的Id值必须要设置且必须与第二个密码框的compare-pwd属性的值相同
            var firstPwdIdObj = "#" + attrs.comparePwd;
            $(elem).add(firstPwdIdObj).on('keyup',function(){
                /*手动执行脏检查*/
                scope.$apply(function(){
                    var flag = elem.val() === $(firstPwdIdObj).val();
                    ctrl.$setValidity("pwdmatch",flag);//flag,表示是否相等。pwdmatch用于$error时的标识符，注意看页面，$setValidity是require中ngModel的方法！
                });
            });
        }
    }
});


