(function () {
	
	var app = angular.module("LunchCheck", []);
	var ctr = app.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = '';
		$scope.message = '';
		$scope.btnClick = function () {
			if ($scope.items == '')  {
				$scope.message = "Please enter data first";
			} else {
				var splitted = $scope.items.split(',');
				var len = splitted.length;
				if (len <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		}
	}
	
}());