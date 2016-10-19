'use strict';

/**
 * @ngdoc function
 * @name pruebaFinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaFinalApp
 */
angular.module('pruebaFinalApp').controller('MainCtrl', ["$scope","$log","createNewTarea", function ($scope,$log,createNewTarea) {
	var list = $("#list");
	var input = $("#list-input").val();
	var count = 0;

	$scope.taskArray = [];
	$scope.valor="";


	$scope.addItem = function() {
		var inputValue = $scope.valor;

		if (inputValue !== null || inputValue !== "" || inputValue !== undefined)
		{
			$("#list-input").css('backgroundColor',"#efefef");
			$("#list-input").css("borderBottom","thin solid #ccc");

			$scope.taskArray.push(inputValue); //añadir al array
			$scope.valor = "";
		}
	};

	$scope.removeItem=function(index){
		$scope.taskArray.splice(index, 1);
	};

	$scope.newBoard = function() {
		count++;
		createNewTarea.crearTarea(count);
	}
  }]);
'use strict';

/**
 * @ngdoc function
 * @name pruebaFinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaFinalApp
 */
angular.module('pruebaFinalApp').controller('MainCtrl', ["$scope","$log","createNewTarea", function ($scope,$log,createNewTarea) {
	var list = $("#list");
	var input = $("#list-input").val();
	var count = 0;

	$scope.taskArray = [];
	$scope.valor="";


	$scope.addItem = function() {
		var inputValue = $scope.valor;

		if (inputValue !== null || inputValue !== "" || inputValue !== undefined)
		{
			$("#list-input").css('backgroundColor',"#efefef");
			$("#list-input").css("borderBottom","thin solid #ccc");

			$scope.taskArray.push(inputValue); //añadir al array
			$scope.valor = "";
		}
	};

	$scope.removeItem=function(index){
		$scope.taskArray.splice(index, 1);
	};

	$scope.newBoard = function() {
		count++;
		createNewTarea.crearTarea(count);
	}

	
	
  }]);
