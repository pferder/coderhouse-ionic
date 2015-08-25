// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider.state('layout',{
      abstract:true,
      controller:'LayoutCtrl',
      templateUrl:'templates/layout.html'
    });


    $stateProvider.state('layout.home',{
        url:'/?query&otroParam',
        templateUrl:'templates/home.html',
        controller:'HomeCtrl'
    });


    $stateProvider.state('layout.favs',{
        url:'/favs',
        templateUrl:'templates/favs.html'
    });


    $urlRouterProvider.otherwise('/');
})
.controller('LayoutCtrl',function($scope,$ionicSideMenuDelegate){
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('HomeCtrl',function($scope,
                                $state,
                                $stateParams,
                                $http,
                                $ionicLoading){
    
    $scope.data = {}
    var query = $stateParams.query;


    $scope.guardar = function(art){
        console.log(art);
    }
    
    if(query){
        var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+query;

        $ionicLoading.show();

        var promise = $http.get(url);

        promise.then(function(respuesta){
            console.log(respuesta)
            console.log(respuesta.status)
            $scope.data.resultadosDelServer = respuesta.data.results;
        })

        promise.catch(function(){
            console.log('catch error')
        });

        promise.finally(function(){
            $ionicLoading.hide();
        })
        

        // OOOOO

        // $http.get(url).then(function(respuesta){
        //     console.log(respuesta)
        // })

        

        console.log(url);

    }

    $scope.buscar = function(){
        var params = {
            query:$scope.data.parametroDeBusqueda
        };
        $state.go('layout.home',params);
    }
})
