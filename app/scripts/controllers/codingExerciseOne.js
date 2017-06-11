'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
var app= angular.module('angularJsApp');
   app.controller('codingExerciseOneCtrl', function ($scope, $state) {
		var vm = this;
			vm.para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu";
			vm.Staticpara = vm.para;
			vm.home = function() {
				$state.go("home");
			}
			vm.exerciseTwo = function() {		  		
		  		$state.go("codingExerciseTwo");
  			}
	});

    app.filter('highlight', function() {
		return function(input, text, Staticpara){
			var index = input.indexOf(text);
		    if ( index >= 0 && text !== ""){
		    	var rgxp = new RegExp(text, 'g'); //here if we put 'ig' it will ignore the case
			    var htmlCode = '<span class="highlight">' + text + '</span>';
			    input = input.replace(rgxp, htmlCode);
			   	angular.element(document.querySelector('p')).html(input);
		    } else {
		    	angular.element(document.querySelector('p')).html(Staticpara);
			}
			return angular.element(document.querySelector('p')).text(); 
		}
	});
