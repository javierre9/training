'use strict';

/**
 * @ngdoc function
 * @name challenge1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challenge1App
 */
angular.module('challenge1App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
    'ngSanitize',
    'twitterApp.services',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
