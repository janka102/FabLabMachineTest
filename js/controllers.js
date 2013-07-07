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
                description: 'Makes the machine run or stop, but does not cut power to the machine and should never be substituted for unplugging the power when required.',
                count: 1,
                x: 87, y: 340},  //Temporary locations
                {name: 'Fence Lock Handle',
                description: 'Locks the fence in place for cutting operations and unlocks the fence for adjustments or removal.',
                count: 1,
                x: 80, y: 460},  //Temporary locations
                {name: 'Hinged Wheel Covers',
                description: 'Allows wheels and pulleys to be easily accessed for maintenance, blade changes, or adjestmens.',
                count: 2,
                x: 190, y: 130}  //Temporary locations
            ],
            rear: [
                {name: 'Blade Tension Adjustment Knob',
                description: 'Controls minor/moderate blade tension adjustments.',
                count: 1,
                x: 100, y: 50}, //Temporary locations
                {name: 'Blade Tracking Adjustment Knob',
                description: 'Controls the tilt angle of the upper wheel, which defines how the blade will track on the wheel.',
                count: 1,
                x: 150, y: 100} //Temporary locations
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
    ],
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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

function MachineCtrl($scope, $location, $routeParams) {
    var paramMachine = $routeParams.machine,
        validMachine = false;
    
    for (var i = 0, len = machines.length; i < len; i++) {
        if (machines[i].id === paramMachine) {
            validMachine = true;
            $scope.machine = machines[i];
            break;
        }
    }
    
    if (!validMachine) {
        $location.path('/');
        return;
    }
    
    // For displaying the parts
    $scope.alphabet = alphabet;
    
    $scope.toggle = function(part){
        $('.' + part).toggleClass('ui-helper-hidden-accessible');
        
        console.log('toggled', part);
    };
    
    $scope.styleLocation = function(part) {
        return {top: part.y, left: part.x};  
    };
}

