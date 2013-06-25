'use strict';

/* Controllers */

// Each machine with each view and locations of parts (in pixles). Location taken from top-left.
// Parts have a unique name and a description.
var machines = [
        {name: 'Bandsaw',
        id: 'bandsaw',
        views: {
            front: [
                {name: 'On/Off Switch',
                description: 'Makes the machine run or stop, but does not cut power to the machine and should never be substituted for unplugging the power when required.'
                x: 200, y: 150}  //Temporary
            ],
            rear: [
                {name: 'Blade Tension Adjustment Knob',
                description: 'Controls minor/moderate blade tension adjustments.',
                x: 100, y: 50} //Temporary
            ]
        }},

        {name: 'Drill Press',
        id: 'drillpress',
        views: {
            front: [
            ],
            bits: [
            ]
        }},

        {name: 'Routers',
        id: 'routers',
        views: {
            inTable_front: [
            ],
            inTable_top: [
            ],
            handheld_front: [
            ],
            handheld_side: [
            ],
            bits: [
            ]
        }},

        {name: 'Jointer',
        id: 'jointer',
        views: {
            front: [
            ],
            cuts: [
            ]
        }},

        // TODO: Last!!
        {name: 'Chopsaw',
        id: 'chopsaw',
        views: {
            front: [
            ],
            rear: [
            ]
        }},

        {name: 'Table Saw',
        id: 'tablesaw',
        views: {
            front: [
            ]
        }}
    ];

function MainCtrl($scope) {
    $scope.machines = machines;
}

function NavCtrl($scope, $location) {
    $scope.routeIs = function(routeNames) {
        var loc = $location.path();

        // If the routes were given as an array, loop through each
        if (routeNames instanceof Array) {
            for (var i = 0, len = routeNames.length; i < len; i++) {
                // If the current route is eaqual to one given, return true
                if (loc === routeNames[i]) {
                    return true;
                }
            }
            
            // Otherwise return false
            return false;
        }

        // If the current route is equal to the one given, return true, otherwise return false.
        return loc === routeNames;
    };
}

function MachineCtrl($scope) {
    $scope.machines = machines;
}

