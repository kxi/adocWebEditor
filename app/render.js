(function(angular, undefined) {
	"use strict";
	angular
	.module('renderApp', ['ngMaterial'])
	.controller('RenderCtrl', RenderController);
	function RenderController($scope, $mdDialog) {
		var renderer = this;
		var name;
		//$scope.showDialog = showDialog;
		
		renderer.render = function() {
			var viewer = document.getElementById('viewer')
			if (typeof viewer != 'undefined') {
				viewer.innerHTML = Opal.Asciidoctor.$convert(renderer.rawText)
			}
			renderer.save();
		};
		
		renderer.save = function() {
			localStorage.setItem("asdoc", renderer.rawText);
		}
		
		renderer.load = function() {
			renderer.rawText = localStorage.getItem("asdoc");
			if (renderer.rawText === null) renderer.rawText="";
			renderer.render();
		}
		
		renderer.showDialog = function() {
			alert("hallo");
			$mdDialog.show({template:'<md-dialog><md-dialog-content></md-dialog-content></md-dialog>'});
		}
		
		this.load();
	};
})(angular);