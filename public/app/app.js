'use strict';

var app = angular.module('app', ['ui.router', 'ui.bootstrap']);




app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/main/intro');
    
    $stateProvider
        
        .state('main', {
            url:'/main',
            templateUrl:'/app/components/main/main.html'
        })
    
        .state('main.intro', {
            url:'/intro',
            templateUrl:'/app/components/main/intro.html'
        })
    
        .state('main.breakfast', {
            url:'/breakfast',
            templateUrl:'/app/components/breakfast/breakfast-main.html'
        })
    
        .state('main.lunch', {
            url:'/lunch',
            templateUrl:'/app/components/lunch/lunch-main.html'
        })
    
        .state('main.dinner', {
            url:'/dinner',
            templateUrl:'/app/components/dinner/dinner-main.html'
        });
});