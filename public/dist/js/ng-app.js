//index
var app = angular.module('app', ['ui.router']);

app.run(function($rootScope, $state){
	$state.go('home');
	dao.getSession(function(data){
        $rootScope.user = data;
        $rootScope.$apply();
	});
    $rootScope.logout = function(){
		dao.logout(function(result){
			if(result.status=='1'){
                location.reload();
			}
		})
	}

    $(function(){
        $(document).ajaxStart(function(){
            $("#loaderDiv").show();
        });
        $(document).ajaxStop(function(){
            $("#loaderDiv").hide();
        });
    });
});

app.config(function($stateProvider, $locationProvider){
    $locationProvider.hashPrefix('');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'/pages/home.html',
			controller:'homeCtrl',
			title:'Home'
		})
        //模块管理
        .state('moduleManage',{
            url:'/moduleManage',
            cache:'false',
            templateUrl:'/pages/dataItemManage/moduleManage/moduleManage.html',
            controller:'moduleManageCtrl',
        })
        .state('moduleNew',{
            url:'/moduleNew',
            cache:'false',
            templateUrl:'/pages/dataItemManage/moduleManage/moduleNew.html',
            controller:'moduleNewCtrl',
        })
        .state('moduleEdit',{
            url:'/moduleEdit/:index',
            cache:'false',
            templateUrl:'/pages/dataItemManage/moduleManage/moduleEdit.html',
            controller:'moduleEditCtrl',
            params:{index:null}
        })
        //数据项管理
        .state('dataItemManage',{
            url:'/dataItemManage',
            cache:'false',
            templateUrl:'/pages/dataItemManage/dataItemManage.html',
            controller:'dataItemManageCtrl',
        })
        //用户信息
        .state('userInfo',{
            url:'/userInfo',
            cache:'false',
            templateUrl:'/pages/userInfo.html',
            controller:'userInfoCtrl',
        })
        //病历管理
		.state('patientList',{
			url:'/patientList',
			cache:'false',
			templateUrl:'/pages/dataManage/dataInput/patientList.html',
			controller:'patientListCtrl',
            params:{index:null}
		})
        .state('newPatient',{
            url:'/newPatient/:index',
            cache:'false',
            templateUrl:'/pages/dataManage/dataInput/newPatient.html',
            controller:'newPatientCtrl',
            params:{index:null}
        })
        .state('patientEdit',{
            url:'/patientEdit/:moduleID/:binglihao',
            cache:'false',
            templateUrl:'/pages/dataManage/dataInput/patientEdit.html',
            controller:'patientEditCtrl',
            params:{moduleID:null, module:null, binglihao:null, index:null},
        })
        .state('patientEdit.patientForm',{
            url:'/patientForm',
            cache:'false',
            templateUrl:'/pages/dataManage/dataInput/patientEdit.patientForm.html',
            controller:'patientFormCtrl'
        })

        //自定义页面
        .state('patientEdit.appendicitis_03_sqjc',{
            url:'/appendicitis_03_sqjc',
            cache:'false',
            templateUrl:'/module/appendicitis/appendicitis_03_sqjc.html',
            controller:'appendicitis_03_sqjc_Ctrl'
        })
        .state('patientEdit.appendicitis_04_szxx',{
            url:'/appendicitis_04_szxx',
            cache:'false',
            templateUrl:'/module/appendicitis/appendicitis_04_szxx.html',
            controller:'appendicitis_04_szxx_Ctrl'
        })
        .state('patientEdit.appendicitis_05_shfc',{
            url:'/appendicitis_05_shfc',
            cache:'false',
            templateUrl:'/module/appendicitis/appendicitis_05_shfc.html',
            controller:'appendicitis_05_shfc_Ctrl'
        })
        .state('patientEdit.appendicitis_05_cyqfc',{
            url:'/appendicitis_05_cyqfc',
            cache:'false',
            templateUrl:'/module/appendicitis/appendicitis_05_cyqfc.html',
            controller:'appendicitis_05_cyqfc_Ctrl'
        })
        .state('patientEdit.appendicitis_06_sfxx',{
            url:'/appendicitis_06_sfxx',
            cache:'false',
            templateUrl:'/module/appendicitis/appendicitis_06_sfxx.html',
            controller:'appendicitis_06_sfxx_Ctrl'
        })


        //用户管理
        .state('userManage',{
            url:'/userManage',
            cache:'false',
            templateUrl:'/pages/systemManage/userManage.html',
            controller:'userManageCtrl',
        })
        .state('message',{
            url:'/message',
            cache:'false',
            templateUrl:'/pages/message.html',
            controller:'messageCtrl',
        })
		;
});

app.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});

//users
var users = angular.module('users', ['ui.router']);

users.run(function($rootScope, $state, $log){
	$state.go('login');
});

users.config(function($stateProvider){
	$stateProvider
		.state('login',{
			url:'/login',
			templateUrl: 'pages/user/login.html',
			controller:'loginCtrl'
		})
		.state('register',{
			url:'/register',
			templateUrl: 'pages/user/register.html',
			controller:'registerCtrl'
		})
		;
});





