'use strict'

angular.module('pruebaFinalApp').service('createNewTarea', [function(){
	this.crearTarea = function(count) {
		var divMayor= $('#divTotal');


		//var remove= $("<a class='close-btn' ng-click='remove(this.parent()' >x</a>");


		var div = $('<div class="col-md-12 "></div>');
		var ul = $('<ul id="list"></ul>')
		var li1 = $('<li></li>');
		var span = $('<span>Tarea ' + count + '</span>');
		li1.append([span]);

		var li2 = $('<li></li>');
		var input = $('<input type="text" id="list-input" ng-model="valor" placeholder="Ingrese su tarea" />');
		var button = $('<button type="button" id="add-btn" ng-click="addItem(valor)">Add</button>');
		li2.append(input);
		li2.append(button);

		ul.append(li1);
		ul.append(li2);

		div.append(ul);
		//div.append(remove)
		divMayor.append(div);
		//$('body').append(div);
	};
}]);