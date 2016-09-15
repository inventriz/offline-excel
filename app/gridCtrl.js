app.controller('gridCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.data = [[]];

    Data.get('attribute.json').then(function (results) {
		$scope.resultData = results.header;        
    });
});