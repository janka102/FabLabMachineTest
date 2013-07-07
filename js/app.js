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
}).directive('draggable', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var vars = scope.$eval(attrs.draggable),
                options = {
                    addClass: false,
                    cursorAt: { left: 17, top: 17 },
                    revert: true,
                    zIndex: 900,
                    scope: vars.scope,
                    helper: function(event) {
                        return $('<div data-part-id="' + vars.helper.view + vars.helper.letter + '">'+ vars.helper.letter + '</div>');
                    },
                    start: function(event, ui) {
                        var self = $(this);
                        if (self.hasClass('ui-state-disabled')) {
                            self.draggable({ disabled: true });
                        } else {
                            self.addClass('ui-state-disabled');   
                        }
                    },
                    stop: function(evenr, ui) {
                        var self = $(this);
                        if (self.hasClass('ui-state-disabled')) {
                            self.draggable({ disabled: false });
                            self.removeClass('ui-state-disabled');
                        }
                    }
                };
            
            elm.draggable(options);
            console.log('draggable:', options);
        }
    };
}).directive('droppable', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var vars = scope.$eval(attrs.droppable),
                options = {
                    hoverClass: 'ui-state-hover',
                    scope: vars.scope
                };
                
            elm.droppable(options);
            console.log('droppable:', options);
        }
    };
});