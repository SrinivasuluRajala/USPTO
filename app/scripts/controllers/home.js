'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('homeCtrl', function ($scope,$state) {
  	$scope.exerciseOne = function() {
  		$state.go("codingExerciseOne");
  	}

  	$scope.exerciseTwo = function() {  		
  		$state.go("codingExerciseTwo");
  	}
  	
  });
