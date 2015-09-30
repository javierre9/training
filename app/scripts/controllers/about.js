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
    	{name:'Attend Meeting', finished:false},
    	{name:'Upload Code', finished:true},
    	{name:'Create Report', finished:false}
    ];
    $scope.editable =false;
    $scope.activity = "";
    $scope.addActivity = function () {
      	$scope.toDoList.push({name:$scope.activity, finished:false});
    	  $scope.activity = "";
    };
    $scope.removeActivity = function (activity) {
        $scope.toDoList.pop(activity);
    };
    $scope.editList = function () {
        $scope.editable =true;
    };
     $scope.stopEdit = function () {
        $scope.editable =false;
    };
    $scope.edit = function () {
        debugger;
        //var result = $.grep(myArray, function(e){ return e.id == id; });
    };
    
  });
