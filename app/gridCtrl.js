app.controller('gridCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

    $scope.data = [[]];

    Data.get('attribute.json').then(function (results) {
		$scope.resultData = results.header;        
    });

    $scope.settings = {
    	contextMenu: true,
	    	// callbacks have 'on' prefix
	    onAfterInit: function() {
	      console.log('onAfterInit call');
	    },
	    onAfterSelectionEnd: function(index, amount) {
	      console.log('onAfterSelectionEnd call => index:' + index + ', amount: ' + amount);
	    },
	    onAfterCreateRow: function(index, amount) {
	      console.log('onAfterCreateRow call => index:' + index + ', amount: ' + amount);
	    },
	    onAfterRemoveRow: function(index, amount) {
	      console.log('onAfterRemoveRow call => index:' + index + ', amount: ' + amount);
	    }
    }

});
