'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .state('codingExerciseOne', {
        url:"/codingExerciseOne",
        templateUrl: 'views/codingExerciseOne.html',
        controller: 'codingExerciseOneCtrl',
        controllerAs: 'vm'
      })
      .state('codingExerciseTwo', {  
        url:"/codingExerciseTwo",   
        templateUrl: 'views/codingExerciseTwo.html',
        controller: 'codingExerciseTwoCtrl',
        controllerAs: 'vm'
      }) 
      
   });
// Manually Botstrapping ng-application
  angular.element(document).ready(function() {
    angular.bootstrap(document,['angularJsApp']);
  });
