(function () {
	
	var app = angular.module('LunchCheck', []);
	var ctr = app.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = '';
		$scope.btnClick = function () {

		}
	}
	//.controller("LunchCheckController", LunchCheckController);
	
	
});