app.controller('gridCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

    ctrl = this;
    columns = [];

    Data.get('attribute.json').then(function (results) {
        $scope.xd = results.header;

        angular.forEach($scope.xd,function(value,index){
            columns.push($scope.xd[index].label);
        });
        
    });

    $scope.xdColumns = columns;
});