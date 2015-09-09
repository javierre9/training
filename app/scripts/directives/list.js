'use strict';

/**
 * @ngdoc directive
 * @name challenge1App.directive:activityList
 * @description
 * # activityList
 */
angular.module('challenge1App')
  .directive('activityList', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/list.html'
    };
  });
