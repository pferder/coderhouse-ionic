// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var modulo = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


// modulo
// $urlRouterProvider.otherwise('/otherwise');

angular.module('starter').config(function($stateProvider,
    $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/tabs',
            templateUrl: 'templates/tabs.html'
        })

    $stateProvider.state('index.home', {
        url: '/home',
        views: {
            "home-view": {
                templateUrl: 'templates/home.html'
            }
        }
    })

    $stateProvider.state('index.list', {
        url: '/list',
        views: {
            "list-view": {
                templateUrl: 'templates/list.html'
            }
        }
    })

    $stateProvider.state('index.item', {
        url: '/item',
        views: {
            "list-view": {
                templateUrl: 'templates/item.html'
            }
        }
    })


    $stateProvider.state('index.settings', {
        url: '/settings',
        views: {
            "settings-view": {
                templateUrl: 'templates/settings.html'
            }
        }
    })

    // $stateProvider.state("nombreDelEstado",{ /* config*/ })

    $urlRouterProvider.otherwise('/tabs/home');

})