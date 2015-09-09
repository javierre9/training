'use strict';

/**
 * @ngdoc function
 * @name challenge1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the challenge1App
 */
angular.module('challenge1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.toDoList = [
    	'Attend Meeting',
    	'Upload Code',
    	'Create Report'
    ];
    $scope.activity = "";
    $scope.addActivity = function () {
      	$scope.toDoList.push($scope.activity);
    	$scope.activity = "";
    };

  });
