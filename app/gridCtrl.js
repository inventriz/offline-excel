app.controller('gridCtrl', function ($scope, $http, Data) {

    Data.get('attribute.json').then(function (results) {
        $scope.xd = results.header;
        $scope.xdColumns = Object.keys($scope.xd[0]);
    });
    
    /*$scope.xd = [
        {
            "ID": "1",
            "primary": "2",
            "title": "mytitle1"
        }, {
            "ID": "2",
            "primary": "3",
            "title": "mytitle2"
        }, {
            "ID": "3",
            "primary": "4",
            "title": "mytitle3"
        }
    ];*/
 
    //$scope.xdColumns = Object.keys($scope.xd[0]);  
});