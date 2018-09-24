'use strict';
var myApp = angular.module('myApp', ['ngResource', 'ui.router']);

myApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', configuration]);

function configuration($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/templates/home/index.html',
            controller: 'HomeCtrl',
        })
        .state('product', {
            url: '/product',
            templateUrl: '/templates/product/index.html',
            controller: 'ProductCtrl',
        })
        .state('product-edit', {
            url: '/product/:id',
            templateUrl: '/templates/product/edit.html',
            controller: 'EditProductCtrl',
        })
        .state('cultura', {
            url: '/cultura',
            templateUrl: '/templates/cultura/index.html',
            controller: 'CulturaCtrl',
        })
}