'use strict';

/**
 * @ngdoc overview
 * @name pruebaFinalApp
 * @description
 * # pruebaFinalApp
 *
 * Main module of the application.
 */
angular
  .module('pruebaFinalApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chat',{
        templateUrl: 'friendlychat/web-start/index.html'
      });
  });
