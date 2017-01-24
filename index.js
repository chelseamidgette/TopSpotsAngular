myApp = angular.module('myApp', []);
myApp.controller('TopSpotsCtrl', ['$scope', '$http', function($scope, $http) {

	$http({
		method: 'GET', 
		url: 'topspots.json'
	}).then(function(response) {
		$scope.topspots = response.data;
	});

	$scope.addrow = function() {
		$scope.topspots.push({'name':$scope.name, 'description':$scope.description, 'location':$scope.location});
		$scope.name = '';
		$scope.description = '';
		$scope.location = '';
	};
}])