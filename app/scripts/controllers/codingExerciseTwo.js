'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
var app = angular.module('angularJsApp');

 app.controller('codingExerciseTwoCtrl', function ($scope, $state) {
    var vm = this;
    $scope.result = '';
    $scope.result1 = null; 
    vm.home= function() {
      $state.go('home')
    } 
    vm.exerciseOne= function() {
      $state.go('codingExerciseOne')
    }

  });

 app.directive("inputText", function(){
    return {
      scope:{
        result:"=result",
        result1: "=result1"
      },
      restrict:"E",
      template: "<input type='text' ng-model='result'>",
      link:function(scope, element, attrs, ngModel) {
        element.on('keypress', function(event) {
          // checking the enter value is number or not
          if(event.charCode >= 48 && event.charCode <= 57) {
            scope.$watch("result", function(oldValue, newValue) {
            var result = oldValue.toString().split("").sort().reverse();
            scope.result1 = result.join("");
            });
          } else {
            alert("please enter a number");
            event.preventDefault();
          }          
        });           
      }
    };
  });
