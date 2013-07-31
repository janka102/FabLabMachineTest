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
        views: {
            inTable_front: [
                {name: 'Housing Index Line',
                description: '',
                count: 1,
                x0: 203, y0: 227},
                
                {name: 'Base Handle',
                description: '',
                count: 1,
                x0: 369, y0: 323},
                
                {name: 'Zero-Line',
                description: '',
                count: 1,
                x0: 205, y0: 264},
                
                {name: 'Clamp Screw',
                description: '',
                count: 1,
                x0: 102, y0: 332},
                
                {name: 'Motor',
                description: '',
                count: 1,
                x0: 265, y0: 100},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 100, y0: 243}
            ],
            inTable_top: [
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 208, y0: 110},
                
                {name: 'Variable Speed Control',
                description: '',
                count: 1,
                x0: 5, y0: 86}
            ],
            handheld_front: [
                {name: 'Collet Nut',
                description: '',
                count: 1,
                x0: 166, y0: 357},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 169, y0: 79},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 220, y0: 184},
                
                {name: 'Clamp Knob',
                description: '',
                count: 1,
                x0: 80, y0: 259}
            ],
            handheld_side: [
                {name: 'Sub-Base',
                description: '',
                count: 1,
                x0: 255, y0: 392},
                
                {name: 'Motor Unit',
                description: '',
                count: 1,
                x0: 230, y0: 99},
                
                {name: 'Base unit',
                description: '',
                count: 1,
                x0: 93, y0: 260},
                
                {name: 'Ring Spring',
                description: '',
                count: 1,
                x0: 154, y0: 194}
            ],
            bits: [  //Temporary locations
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
        views: {
            front: [
                {name: 'Fence',
                description: '',
                count: 1,
                x0: 270, y0: 27},
                
                {name: 'Base',
                description: '',
                count: 1,
                x0: 260, y0: 255},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 256, y0: 149},
                
                {name: 'Rear Outfeed Table',
                description: '',
                count: 1,
                x0: 10, y0: 85},
                
                {name: 'Guard',
                description: '',
                count: 1,
                x0: 194, y0: 57},
                
                {name: 'Front Table Adjustment',
                description: '',
                count: 1,
                x0: 255, y0: 77},
                
                {name: 'Rear Table Adjustment',
                description: '',
                count: 1,
                x0: 141, y0: 93},
                
                {name: 'Front Table Infeed',
                description: '',
                count: 1,
                x0: 360, y0: 40},
                
                {name: 'Fence Control Handle',
                description: '',
                count: 1,
                x0: 232, y0: -3}
            ],
            cuts: [
                {name: 'Edge & End Planing',
                description: '',
                count: 1,
                x0: 350, y0: 119},
                
                {name: 'Face Planing',
                description: '',
                count: 1,
                x0: 172, y0: 435},
                
                {name: 'Rabbet',
                description: '',
                count: 1,
                x0: 170, y0: 12},
                
                {name: 'Chamfer',
                description: '',
                count: 1,
                x0: 170, y0: 220},
                
                {name: 'Bevel',
                description: '',
                count: 1,
                x0: 351, y0: 329},
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
                {name: 'Table Insert',
                description: '',
                count: 1,
                x0: 252, y0: 76},
                
                {name: 'Rip Fence',
                description: '',
                count: 1,
                x0: 445, y0: 31},
                
                {name: 'Elevation Hand Wheel',
                description: '',
                count: 1,
                x0: 361, y0: 228},
                
                {name: 'On/Off Paddle',
                description: '',
                count: 1,
                x0: 275, y0: 242},
                
                {name: 'Tilt Hand Wheel',
                description: '',
                count: 1,
                x0: 190, y0: 257},
                
                {name: 'Table Top',
                description: '',
                count: 1,
                x0: 130, y0: 117},
                
                {name: 'Blade Guard',
                description: '',
                count: 1,
                x0: 270, y0: 34},
                
                {name: 'Rip Fence Scale',
                description: '',
                count: 1,
                x0: 480, y0: 110},
                
                {name: 'System Switch',
                description: '',
                count: 1,
                x0: 300, y0: 198},
                
                {name: 'Miter Guage Slot',
                description: '',
                count: 1,
                x0: 277, y0: 111},
                
                {name: 'Tilt Angle Scale',
                description: '',
                count: 1,
                x0: 407, y0: 239}
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
