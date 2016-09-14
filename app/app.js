var app = angular.module('myApp', ['ngRoute', 'ngHandsontable']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
            title: 'Excel Offline',
            templateUrl: 'partials/grid.html',
            controller: 'gridCtrl'
        });
  }]);