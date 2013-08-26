'use strict';

// Each machine with each view and locations of parts (in percent). Location taken from top-left.
var machines = [
        {name: 'Bandsaw',
        id: 'bandsaw',
        home_page: 'home_page',
        views: {
            front: [
                {name: 'On/Off Switch',
                description: 'Makes the machine run or stop, but does not cut power to the machine and should never be substituted for unplugging the power when required.',
                count: 1,
                x0: 17.3, y0: 46.9},

                {name: 'Fence Lock Handle',
                description: 'Locks the fence in place for cutting operations and unlocks the fence for adjustments or removal.',
                count: 1,
                x0: 16.3, y0: 62.9},
                
                {name: 'Hinged Wheel Covers',
                description: 'Allows wheels and pulleys to be easily accessed for maintenance, blade changes, or adjestmens.',
                count: 2,
                x0: 38.8, y0: 18.4,
                x1: 31.6, y1: 78.1},
                
                {name: 'Blade Guide Assemblies',
                description: 'Two assemblies, 1 upper and 1 lower, each consisting of 2 roller bearing blade guides for side-to-side support and 1 roller bearing to support the back of the blade.',
                count: 2,
                x0: 60.2, y0: 44.6,
                x1: 62.0, y1: 63.2},
                
                {name: 'Table Trunnion Adjustment Knobs',
                description: 'Loosens the table on the trunnions for tilt adjustments and locks and table in place at a desired angle.',
                count: 2,
                x0: 51.8, y0: 63.6,
                x1: 68.4, y1: 60.6},
                
                {name: 'Table Tilt Scale',
                description: 'Displays the current angle of table tilt.',
                count: 1,
                x0: 41.2, y0: 62.8}
            ],
            rear: [
                {name: 'Quick Blade Tension Lever',
                description: 'Quickly releases or engages blade tension for blade changes.',
                count: 1,
                x0: 71.2, y0: 50.9},
                
                {name: 'Blade Tension Adjustment Knob',
                description: 'Controls minor/moderate blade tension adjustments.',
                count: 1,
                x0: 46.8, y0: 4.4},
                
                {name: 'Blade Tracking Adjustment Knob',
                description: 'Controls the tilt angle of the upper wheel, which defines how the blade will track on the wheel.',
                count: 1,
                x0: 41.7, y0: 64.2},
                
                {name: 'Guide Post Lock Knob',
                description: 'Loosenes the guide post for adjusments and locks the guide post in place after adjustments.',
                count: 1,
                x0: 14.8, y0: 80.8},
                
                {name: 'Blade Tension Scale',
                description: 'Displays the current blade tension and is marked with a scale for a range of blade sizes.',
                count: 1,
                x0: 46.3, y0: 54.7}
            ]
        }},

        {name: 'Drill Press',
        id: 'drillpress',
        home_page: 'front',
        views: {
            front: [
                {name: 'Belt and Pully Housing',
                description: '',
                count: 1,
                x0: 62.1, y0: 0.8},
                
                {name: 'Base',
                description: '',
                count: 1,
                x0: 34.5, y0: 89.1},
                
                {name: 'Variable Speed Control',
                description: '',
                count: 1,
                x0: 16.6, y0: 4.7},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 23.4, y0: 13.6},
                
                {name: 'Quill Lock',
                description: '',
                count: 1,
                x0: 39.7, y0: 20.5},
                
                {name: 'Column',
                description: '',
                count: 1,
                x0: 57.9, y0: 56.8},
                
                {name: 'Quill Feed Lever',
                description: '',
                count: 1,
                x0: 69.7, y0: 23.2},
                
                {name: 'Depth Stop',
                description: '',
                count: 1,
                x0: 25.2, y0: 22.8},
                
                {name: 'Motor',
                description: '',
                count: 1,
                x0: 77.9, y0: 14.3},
                
                {name: 'Speed Range Control',
                description: '',
                count: 1,
                x0: 89.0, y0: 4.4},
                
                {name: 'Tilting Table',
                description: '',
                count: 1,
                x0: 24.1, y0: 38.4},
                
                {name: 'Spindle',
                description: '',
                count: 1,
                x0: 34.5, y0: 23.8},
                
                {name: 'Rack and Pinion Mechanism',
                description: '',
                count: 1,
                x0: 67.6, y0: 42.4},
                
                {name: 'Chuck',
                description: '',
                count: 1,
                x0: 34.5, y0: 27.2}
            ],
            bits: [
                {name: 'Multispur bit',
                description: 'The long point makes it easy to locate the hole exactaly where you want.',
                count: 1,
                x0: 34.8, y0: 27.6},
                
                {name: 'Spade bit',
                description: 'Bores very clean holes at any angle. It should be used only in a drill press.',
                count: 1,
                x0: 23.6, y0: 63.1},
                
                {name: 'Hole saw',
                description: 'Cuts large holes in wood, plastic, and thin metal. It is mounted onto a special arbor with a bit in he middle to guide the saw into the wood in the correct location.',
                count: 1,
                x0: 68.6, y0: 55.1},
                
                {name: 'Twist bit',
                description: 'Designed for wood.',
                count: 1,
                x0: 72.9, y0: 9.7},
                
                {name: 'Forstner bit',
                description: 'Drills a smooth, shallow hole. It has a small center spur, so it can drill a nearly flat-bottomed hole.',
                count: 1,
                x0: 18.9, y0: 22.1},
                
                {name: 'Countersink bit',
                description: 'Drills a neat taper for the head of a screw.',
                count: 1,
                x0: 89.4, y0: 75.7},
                
                {name: 'Brad-point bit',
                description: 'Has a center point to help guide the drill bit to the desired position. It drills a clean hole, like those needed for fine woodworking.',
                count: 1,
                x0: 25.6, y0: 87.6},
                
                {name: 'Screw pilot bit',
                description: 'Drills the shank and pilot hole for wood screws.',
                count: 1,
                x0: 4.7, y0: 15.6}
            ]
        }},

        {name: 'Routers',
        id: 'routers',
        home_page: 'inTable_front',
        views: {
            inTable_front: [
                {name: 'Housing Index Line',
                description: '',
                count: 1,
                x0: 49.5, y0: 46.0},
                
                {name: 'Base Handle',
                description: '',
                count: 1,
                x0: 89.5, y0: 65.4},
                
                {name: 'Zero-Line',
                description: '',
                count: 1,
                x0: 50.0, y0: 53.4},
                
                {name: 'Clamp Screw',
                description: '',
                count: 1,
                x0: 24.9, y0: 67.2},
                
                {name: 'Motor',
                description: '',
                count: 1,
                x0: 64.6, y0: 20.2},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 24.4, y0: 49.2}
            ],
            inTable_top: [
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 75.9, y0: 57.6},
                
                {name: 'Variable Speed Control',
                description: '',
                count: 1,
                x0: 1.8, y0: 45.0}
            ],
            handheld_front: [
                {name: 'Collet Nut',
                description: '',
                count: 1,
                x0: 47.8, y0: 81.1},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 48.7, y0: 18.0},
                
                {name: 'Depth Adjusting Ring',
                description: '',
                count: 1,
                x0: 63.4, y0: 41.8},
                
                {name: 'Clamp Knob',
                description: '',
                count: 1,
                x0: 23.1, y0: 58.9}
            ],
            handheld_side: [
                {name: 'Sub-Base',
                description: '',
                count: 1,
                x0: 73.5, y0: 89.1},
                
                {name: 'Motor Unit',
                description: '',
                count: 1,
                x0: 66.3, y0: 22.5},
                
                {name: 'Base unit',
                description: '',
                count: 1,
                x0: 26.8, y0: 59.1},
                
                {name: 'Ring Spring',
                description: '',
                count: 1,
                x0: 44.4, y0: 44.1}
            ],
            bits: [
                {name: 'Core Box',
                description: '',
                count: 1,
                x0: 43.3, y0: 56.6},
                
                {name: 'Cove',
                description: '',
                count: 1,
                x0: 28.4, y0: 90.1},
                
                {name: 'Rabbeting',
                description: '',
                count: 1,
                x0: 49.1, y0: 23.7},
                
                {name: 'Chamfer 45° Bevel',
                description: '',
                count: 1,
                x0: 14.0, y0: 56.8},
                
                {name: 'Straight One Piece',
                description: '',
                count: 1,
                x0: 14.4, y0: 24.5},
                
                {name: 'V Grooveing',
                description: '',
                count: 1,
                x0: 66.4, y0: 89.7},
                
                {name: 'Dovetail',
                description: '',
                count: 1,
                x0: 79.6, y0: 57.6},
                
                {name: 'Corner Rounding',
                description: '',
                count: 1,
                x0: 85.8, y0: 23.1}
            ]
        }},

        {name: 'Jointer',
        id: 'jointer',
        home_page: 'front',
        views: {
            front: [
                {name: 'Fence',
                description: '',
                count: 1,
                x0: 67.5, y0: 7.5},
                
                {name: 'Base',
                description: '',
                count: 1,
                x0: 65.0, y0: 70.4},
                
                {name: 'On/Off Switch',
                description: '',
                count: 1,
                x0: 64.0, y0: 41.2},
                
                {name: 'Rear Outfeed Table',
                description: '',
                count: 1,
                x0: 2.5, y0: 23.5},
                
                {name: 'Guard',
                description: '',
                count: 1,
                x0: 48.5, y0: 15.7},
                
                {name: 'Front Table Adjustment',
                description: '',
                count: 1,
                x0: 63.7, y0: 21.3},
                
                {name: 'Rear Table Adjustment',
                description: '',
                count: 1,
                x0: 35.3, y0: 25.7},
                
                {name: 'Front Table Infeed',
                description: '',
                count: 1,
                x0: 90.0, y0: 11.0},
                
                {name: 'Fence Control Handle',
                description: '',
                count: 1,
                x0: 58.0, y0: -0.8}
            ],
            cuts: [
                {name: 'Edge & End Planing',
                description: '',
                count: 1,
                x0: 64.4, y0: 21.9},
                
                {name: 'Face Planing',
                description: '',
                count: 1,
                x0: 32.1, y0: 80.1},
                
                {name: 'Rabbet',
                description: '',
                count: 1,
                x0: 31.8, y0: 2.2},
                
                {name: 'Chamfer',
                description: '',
                count: 1,
                x0: 31.8, y0: 40.5},
                
                {name: 'Bevel',
                description: '',
                count: 1,
                x0: 65.6, y0: 60.6}
            ]
        }},

        {name: 'Chopsaw',
        id: 'chopsaw',
        home_page: 'front',
        views: {
            front: [
                {name: 'Digital Display',
                description: '',
                count: 1,
                x0: 51.8, y0: 3.4},

                {name: 'Handle',
                description: '',
                count: 1,
                x0: 67.0, y0: 12.4},

                {name: 'Motor',
                description: '',
                count: 1,
                x0: 36.0, y0: 20.6},

                {name: 'Upper Blade Guard',
                description: '',
                count: 1,
                x0: 53.5, y0: 30.6},

                {name: 'lower Blade Guard',
                description: '',
                count: 1,
                x0: 65.3, y0: 45.9},

                {name: 'Depth Adjustment Knob',
                description: '',
                count: 1,
                x0: 34.7, y0: 36.4},

                {name: 'Dust Bag',
                description: '',
                count: 1,
                x0: 9.6, y0: 29.8},

                {name: 'Saw Blade',
                description: '',
                count: 1,
                x0: 49.6, y0: 45.4},

                {name: 'Bevel Clamp Lever',
                description: '',
                count: 1,
                x0: 14.0, y0: 41.7},

                {name: 'Laser Marker',
                description: '',
                count: 1,
                x0: 38.6, y0: 52.6},

                {name: 'Bevel Scale Indicator',
                description: '',
                count: 1,
                x0: 23.0, y0: 62.4},

                {name: 'Left Fence',
                description: '',
                count: 1,
                x0: 34.2, y0: 75.3},

                {name: 'Right Fence',
                description: '',
                count: 1,
                x0: 77.9, y0: 65.1},

                {name: 'Vise Assembly',
                description: '',
                count: 1,
                x0: 40.4, y0: 70.6},

                {name: 'Table Insert',
                description: '',
                count: 1,
                x0: 72.8, y0: 79.1},

                {name: 'Base',
                description: '',
                count: 1,
                x0: 39.8, y0: 91.2},

                {name: 'Turntable',
                description: '',
                count: 1,
                x0: 86.7, y0: 84.2},

                {name: 'Side Handle',
                description: '',
                count: 1,
                x0: 95.6, y0: 91.2},

                {name: 'Release Lever',
                description: '',
                count: 1,
                x0: 88.6, y0: 92.0},

                {name: 'Miter Scale Indicator',
                description: '',
                count: 1,
                x0: 61.9, y0: 84.2}
            ],
            rear: [
                {name: 'Trigger Switch',
                description: '',
                count: 1,
                x0: 37.4, y0: 10.0},

                {name: 'Spindle Lock',
                description: '',
                count: 1,
                x0: 35.5, y0: 35.6},

                {name: 'Indicator',
                description: '',
                count: 1,
                x0: 70.0, y0: 75.3},

                {name: 'Slide Securing Knob',
                description: '',
                count: 2,
                x0: 57.5, y0: 36.3,
                x1: 67.0, y1: 38.4}
                
            ]
        }},

        {name: 'Table Saw',
        id: 'tablesaw',
        home_page: 'front',
        views: {
            front: [
                {name: 'Table Insert',
                description: '',
                count: 1,
                x0: 36.8, y0: 15.9},
                
                {name: 'Rip Fence',
                description: '',
                count: 1,
                x0: 63.6, y0: 6.4},
                
                {name: 'Elevation Hand Wheel',
                description: '',
                count: 1,
                x0: 51.4, y0: 45.6},
                
                {name: 'On/Off Paddle',
                description: '',
                count: 1,
                x0: 39.1, y0: 50.3},
                
                {name: 'Tilt Hand Wheel',
                description: '',
                count: 1,
                x0: 27.4, y0: 51.7},
                
                {name: 'Table Top',
                description: '',
                count: 1,
                x0: 12.6, y0: 19.7},
                
                {name: 'Blade Guard',
                description: '',
                count: 1,
                x0: 36.1, y0: 4.1},
                
                {name: 'Rip Fence Scale',
                description: '',
                count: 1,
                x0: 70.5, y0: 22.3},
                
                {name: 'System Switch',
                description: '',
                count: 1,
                x0: 42.7, y0: 40.0},
                
                {name: 'Miter Guage Slot',
                description: '',
                count: 1,
                x0: 42.9, y0: 24.1},
                
                {name: 'Tilt Angle Scale',
                description: '',
                count: 1,
                x0: 59.1, y0: 47.1}
            ]
        }}
    ],
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/* Controllers */

function MainCtrl($scope) {
    $scope.machines = machines;

    $scope.numColumns = 3;
    $scope.machineRows = [];
    $scope.machineRows.length = Math.ceil($scope.machines.length / $scope.numColumns);
    $scope.machineCols = [];
    $scope.machineCols.length = $scope.numColumns;
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
        validMachine = false,
        viewLengths = [];

        function array_shuffle (aArray) {
            for (var mTemp, j, i = aArray.length; i; ) {
                j = parseInt(Math.random() * i);
                mTemp = aArray[--i];
                aArray[i] = aArray[j];
                aArray[j] = mTemp;
            }
        }

        /* http://snipplr.com/view/14590/hsv-to-rgb */
        function hsvToRgb(h, s, v) {
            var r, g, b;
            var i;
            var f, p, q, t;
            h = Math.max(0, Math.min(360, h));
            s = Math.max(0, Math.min(100, s));
            v = Math.max(0, Math.min(100, v));
            s /= 100;
            v /= 100;
            if(s == 0) {
                r = g = b = v;
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            }
            h /= 60; // sector 0 to 5
            i = Math.floor(h);
            f = h - i; // factorial part of h
            p = v * (1 - s);
            q = v * (1 - s * f);
            t = v * (1 - s * (1 - f));
            switch(i) {
                case 0:
                    r = v; g = t; b = p; break;
                case 1:
                    r = q; g = v; b = p; break;
                case 2:
                    r = p; g = v; b = t; break;
                case 3:
                    r = p; g = q; b = v; break;
                case 4:
                    r = t; g = p; b = v; break;
                default: // case 5:
                    r = v; g = p; b = q;
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }

        // Generates just enough for each machines parts to be differnt
        // Example: one machine has at most 6 parts on a view,
        // so this will only generate 6 colors for that machine
        $scope.genUniqueRandomColors = function(amount, name) {
            amount = amount >= 5 ? amount : 5; // Mimimum of 5 colors

            var h = 0,
                s = 100,
                v = 100,
                amountArr = new Array(amount),
                darken = false,
                newColor = '',
                tmpColors = [];

            if (amount > 7) {
                darken = true;
            }

             for (var i = amountArr.length - 1; i >= 0; i-=1) {
                newColor = 'rgb(' + hsvToRgb(h, s, v).join(', ') + ')';
                //console.log(i + ': hsl(' + h + ', ' + s + ', ' + v + ') => ' + newColor);

                // If amount < 7, devide the spectrum into `amount` pieces
                if (!darken) {
                    h += 360/amount;
                }
                // Else divide the spectrum into about half `amount` pieces
                // I do this because the other half will be the original, but darker
                else {
                    h += 360/Math.ceil(amount/2);
                }

                // If the hue is over 360, then start over, but darker
                if (Math.round(h) > 360) { // Math.round b/c `h` can equal 360.00000...000006 for example
                    h = (h - 360);
                    v = 40;
                }

                // Push the new color
                tmpColors.push(newColor);
             }

             // Used for the random border colors on the .part-drop
             $scope[name + 'Colors'] = {currentPart: null, currentIndex: null, currentViewIndex: null, colors: null};
             $scope[name + 'BorderColors'] = tmpColors;
        }
    
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

    for (var view in $scope.machine.views) {
        if ($scope.machine.views.hasOwnProperty(view)) {
            array_shuffle($scope.machine.views[view]); // Randomizes the part order

            viewLengths.push($scope.machine.views[view].length); // For genUniqueRandomColors()
        }
    }

    // For displaying the parts
    $scope.alphabet = alphabet;
    
    // Returns an array of length `num`. Used in `ng-repeat` to repeat `num` times
    $scope.makeArray = function(num) {
        return new Array(num);
    };
    
    // Toggles the description of each part
    $scope.toggle = function($event){
       $($event.target).next().toggleClass('ui-helper-hidden-accessible');
        //console.log('toggled', part);
    };
}
