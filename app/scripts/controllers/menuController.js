'use strict'

angular.module('pruebaFinalApp')
								.controller('menuController', ['$scope','$log', function($scope, $log){
									$log.debug('hola esto funciona');
									$scope.menu = ['LISTAS', 'EQUIPOS', 'PERFIL'];
								}]);