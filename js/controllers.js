'use strict';

// Each machine with each view and locations of parts (in pixels). Location taken from top-left.
var machines = [
        {name: 'Bandsaw',
        id: 'bandsaw',
        views: { //Temporary locations
            front: [
                {name: 'On/Off Switch',
                description: 'Makes the machine run or stop, but does not cut power to the machine and should never be substituted for unplugging the power when required.',
                count: 1,
                x0: 85, y0: 340},
                {name: 'Fence Lock Handle',
                description: 'Locks the fence in place for cutting operations and unlocks the fence for adjustments or removal.',
                count: 1,
                x0: 80, y0: 458},
                {name: 'Hinged Wheel Covers',
                description: 'Allows wheels and pulleys to be easily accessed for maintenance, blade changes, or adjestmens.',
                count: 2,
                x0: 190, y0: 130,
                x1: 155, y1: 570,
                borderColor: {r: 157, g: 38, b: 29} //red
                },
                {name: 'Blade Guide Assemblies',
                description: 'Two assemblies, 1 upper and 1 lower, each consisting of 2 roller bearing blade guides for side-to-side support and 1 roller bearing to support the back of the blade.',
                count: 2,
                x0: 295, y0: 323,
                x1: 304, y1: 460,
                borderColor: {r: 70, g: 165, b: 70} //green
                },
                {name: 'Table Trunnion Adjustment Knobs',
                description: 'Loosens the table on the trunnions for tilt adjustments and locks and table in place at a desired angle.',
                count: 2,
                x0: 335, y0: 440,
                x1: 254, y1: 462,
                borderColor: {r: 122, g: 67, b: 182} //purple
                },
                {name: 'Table Tilt Scale',
                description: 'Displays the current angle of table tilt.',
                count: 1,
                x0: 202, y0: 457}
            ],
            rear: [
                {name: 'Quick Blade Tension Lever',
                description: 'Quickly releases or engages blade tension for blade changes.',
                count: 1,
                x0: 480, y0: 257},
                {name: 'Blade Tension Adjustment Knob',
                description: 'Controls minor/moderate blade tension adjustments.',
                count: 1,
                x0: 314, y0: 21},
                {name: 'Blade Tracking Adjustment Knob',
                description: 'Controls the tilt angle of the upper wheel, which defines how the blade will track on the wheel.',
                count: 1,
                x0: 281, y0: 324},
                {name: 'Guide Post Lock Knob',
                description: 'Loosenes the guide post for adjusments and locks the guide post in place after adjustments.',
                count: 1,
                x0: 100, y0: 408},
                {name: 'Blade Tension Scale',
                description: 'Displays the current blade tension and is marked with a scale for a range of blade sizes.',
                count: 1,
                x0: 312, y0: 276}
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
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    //               blue-l     blue-d     green-l    green-d    red        yellow     orange     pink       purple
    borderColors = ['#02b5ff', '#005db3', '#31d831', '#016b01', '#e61d1d', '#ffc40d', '#f87a06', '#f831a0', '#7a43b6'];

/* Controllers */

function MainCtrl($scope) {
    $scope.machines = machines;
}

function NavCtrl($scope, $location) {
    $scope.routeIs = function(routeNames) {
        var loc = $location.path();

        // If the routes were given as an array...
        if (routeNames instanceof Array) {
            // Loop through each
            for (var i = 0, len = routeNames.length; i < len; i++) {
                // If the current route is equal to one given, return true
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
    
    $scope.borderColors = borderColors;
    $scope.colors = {currentPart: null, currentIndex: null, currentViewIndex: null, colors: null};
    
    // Returns a array of length `num`. Used in `ng-repeat` to repeat `num` times
    $scope.makeArray = function(num) {
        return new Array(num);   
    };
    
    // Toggles the description of each part
    $scope.toggle = function($event){
       $($event.target).next().toggleClass('ui-helper-hidden-accessible');
        //console.log('toggled', part);
    };
}
