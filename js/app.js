'use strict';

// Declare app level module with routes
var app = angular.module('fabLab', [], function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'partials/main.html',
            controller: MainCtrl
        });
        $routeProvider.when('/about',
            {
                templateUrl: 'partials/about.html'
            });
        $routeProvider.when('/:machine',
            {
                templateUrl: 'partials/details.html',
                controller: MachineCtrl
            });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
});