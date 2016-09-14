app.controller('gridCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

    ctrl = this;
    columns = [];

    Data.get('attribute.json').then(function (results) {
        $scope.xd = results.header;

        angular.forEach($scope.xd,function(value,index){
            columns.push($scope.xd[index].label);
        });

        $scope.xdColumns = columns;
        console.log($scope.xdColumns);
    });
    $scope.xd1 = [
        {
            "ID": "1",
            "primary name": "2",
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
    ];
 
    $scope.xdColumns1 = Object.keys($scope.xd1[0]);  
    console.log($scope.xdColumns1);
});