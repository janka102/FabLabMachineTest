'use strict';

// Each machine with each view and locations of parts (in pixels). Location taken from top-left.
var machines = [
        {name: 'Bandsaw',
        id: 'bandsaw',
        views: {
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
                x1: 155, y1: 570},
                
                {name: 'Blade Guide Assemblies',
                description: 'Two assemblies, 1 upper and 1 lower, each consisting of 2 roller bearing blade guides for side-to-side support and 1 roller bearing to support the back of the blade.',
                count: 2,
                x0: 295, y0: 323,
                x1: 304, y1: 460},
                
                {name: 'Table Trunnion Adjustment Knobs',
                description: 'Loosens the table on the trunnions for tilt adjustments and locks and table in place at a desired angle.',
                count: 2,
                x0: 335, y0: 440,
                x1: 254, y1: 462},
                
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
        views: { //Temporary locations
            front: [
                {name: 'Belt and Pully Housing',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Base',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Variable Speed Control',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Quill Lock',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Column',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Quill Feed Lever',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Depth Stop',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Motor',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Speed Range Control',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Tilting Table',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Spindle',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rack and Pinion Mechanism',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Chuck',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            bits: [
                {name: 'Spade bit',
                description: 'The long point makes it easy to locate the hole exactaly where you want.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Multispur bit',
                description: 'Bores very clean holes at any angle. It should be used only in a drill press.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Hole saw',
                description: 'Cuts large holes in wood, plastic, and thin metal. It is mounted onto a special arbor with a bit in he middle to guide the saw into the wood in the correct location.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Twist bit',
                description: 'Designed for wood.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Forstner bit',
                description: 'Drills a smooth, shallow hole. It has a small center spur, so it can drill a nearly flat-bottomed hole.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Countersink bit',
                description: 'Drills a neat taper for the head of a screw.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Brad-point bit',
                description: 'Has a center point to help guide the drill bit to the desired position. It drills a clean hole, like those needed for fine woodworking.',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Screw pilot bit',
                description: 'Drills the shank and pilot hole for wood screws.',
                count: 1,
                x0: 480, y0: 257}
            ]
        }},

        {name: 'Routers',
        id: 'routers',
        views: { //Temporary locations
            inTable_front: [
                {name: 'Housing Index Line',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Base Handle',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Zero-Line',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Clamp Screw',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Motor',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            inTable_top: [
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Variable Speed Control',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            handheld_front: [
                {name: 'Collet Nut',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Switch',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Clamp Knob',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            handheld_side: [
                {name: 'Sub-Base',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Motor Unit',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Base unit',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Ring Spring',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            bits: [
                {name: 'Core Box',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Cove',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rabbeting',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Chamfer 45° Bevel',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Straight One Piece',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'V Grooveing',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Dovetail',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Corner Rounding',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ]
        }},

        {name: 'Jointer',
        id: 'jointer',
        views: { //Temporary locations
            front: [
                {name: 'Fence',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Base',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rear Outfeed Table',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Guard',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Front Table Adjustment',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rear Table Adjustment',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Front Table Infeed',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Fence Control Handle',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ],
            cuts: [
                {name: 'Edge & End Planing',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Face Planing',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rabbet',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Chamfer',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Bevel',
                description: '',
                count: 1,
                x0: 480, y0: 257},
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
        views: { //Temporary locations
            front: [
                {name: 'Table Insert',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rip Fence',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Elevation Hand Wheel',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'On/Off Paddle',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Tilt Hand Wheel',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Table Top',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Blade Guard',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Rip Fence Scale',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'System Switch',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Miter Guage Slot',
                description: '',
                count: 1,
                x0: 480, y0: 257},
                
                {name: 'Tilt Angle Scale',
                description: '',
                count: 1,
                x0: 480, y0: 257}
            ]
        }}
    ],
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    //               blue-l     blue-d     bluegreen  green-l    green-d    lime       red        salmon     maroonish  yellow     orange     pink       hotpink    purple
    borderColors = ['#ADD8E6', '#00008B', '#0D98BA', '#90EE90', '#177245', '#32CD32', '#FF0F29', '#FF8C69', '#C32148', '#FFF000', '#FF6700', '#FF93C9', '#FF4174', '#69359C'];

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
