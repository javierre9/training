'use strict';

/**
 * @ngdoc overview
 * @name challenge1App
 * @description
 * # challenge1App
 *
 * Main module of the application.
 */
angular
  .module('challenge1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/twitter', {
        templateUrl: 'views/twitter.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
