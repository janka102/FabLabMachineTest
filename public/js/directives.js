'use strict';

var dragOps = {
    addClass: false,
    cursorAt: { left: 17, top: 17 },
    revert: 'invalid',
    zIndex: 900,
    start: function(event, ui) {
        var self = $(this);
        //console.log('drag-start', self);
        self.addClass('ui-state-disabled');
    },
    stop: function(event, ui) {
        var self = $(this);
        //console.log('drag-stop', self);
        if (!self.data('dropped')) {
            self.draggable('enable');
            self.removeClass('ui-state-disabled');
        }
    }
},
dropOps = {
    addClasses: false,
    tolerance: 'intersect',
    over: function(event, ui) {
        var self = $(this);
        //console.log('drop-over', self);
        self.add(self.siblings()).addClass('ui-state-hover');
    },
    out: function(event, ui) {
        var self = $(this);
        //console.log('drop-out', self);
        self.add(self.siblings()).removeClass('ui-state-hover');
    },
    drop: function(event, ui) {
        $('.alert-error').remove();
        
        var self = $(this),
        selfGroup = self.add(self.siblings()),
        prevPart = ui.draggable,
        prevGroup = prevPart.add(prevPart.siblings()),
        letter = prevPart.data('part-id').replace(/[a-z]/g, ''), // remove lowercase letters to leave the single uppercase part letter
        oldID = self.data('part-id');
        //console.log('drop-drop', self);
        
        if (selfGroup.hasClass('ui-state-hover')) { selfGroup.removeClass('ui-state-hover'); }
        
        // Dragged from the list to a spot...
        if (!prevPart.hasClass('part-drop')) {
            // that is empty
            if (self.data('part-id') === undefined) {
                //console.log('list to empty');
                prevPart.data('dropped', true).draggable('disable');
            }
            // that is already occupied
            else {
                //console.log('list to occupied');
                //console.log(self.clone());
                
                prevPart.data('dropped', true).draggable('disable');
                prevPart.siblings().each(function(){
                    var self = $(this);
                    
                    if (self.data('part-id') === oldID) {
                        self.data('dropped', false).draggable('enable').removeClass('ui-state-disabled');
                        
                        return false;
                    }
                });
            }
            
            selfGroup.addClass('ui-state-highlight').text(letter).data('part-id', prevPart.data('part-id'));
        }
        // Rearrange...
        else {
            // to a different part...
            if (self.data('part-id') !== prevPart.data('part-id')) {
                // that is empty
                if (self.data('part-id') === undefined) {
                    //console.log('rearrange to empty');
                    prevGroup.removeClass('ui-state-highlight').text('');
                }
                // that is already occupied
                else {
                    //console.log('rearrange to occupied', prevPart.data('part-id'), '>', self.data('part-id'));
                    
                    selfGroup.data('part-id', prevPart.data('part-id'));
                   //console.log(self.data('part-id'));
                    selfGroup.text(prevPart.text());
                    
                    prevGroup.data('part-id', oldID);
                    prevGroup.text(oldID.replace(/[a-z]/g, ''));
                    
                    return;
                }
            }
            // to a spot that is of the same part
            else if (self.data('part-id') === prevPart.data('part-id')) {
                //console.log('canceled drop b/c part was the same', self.data('part-id'), prevPart.data('part-id'))
                return false;
            }
            
            selfGroup.addClass('ui-state-highlight').text(letter).data('part-id', prevPart.data('part-id'));
            prevGroup.removeData('part-id');
        }
        
        //console.log(self.data());
    }
},
rearrangeOps = {
    addClass: false,
    cursorAt: { left: 17, top: 17 },
    revert: 'invalid',
    zIndex: 900,
    start: function(event, ui) {
        var self = $(this);
        //console.log('rearrange-start', self);
        
        if (!self.data('part-id')) {
            //console.log('canceled rearrange b/c it has no partID');
            return false;
        } else { 
            self.add(self.siblings()).addClass('ui-draggable-disabled');
        }
    },
    stop: function(event, ui) {
        var self = $(this);
        //console.log('rearrange-stop', self);
        
        self.add(self.siblings()).removeClass('ui-draggable-disabled');
    }
};

/* Directives */

app.directive('uiDraggable', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.uiDraggable),
            options = dragOps;
            
            //console.log(vars);
            options.scope = vars.scope;
            options.helper = function(event) {
                return $('<div></div>').text(vars.helper.letter);
            };
            
            elem.draggable(options);
            //console.log('drAGGable:', options);
        }
    };
}).directive('uiDroppable', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.uiDroppable),
                options = dropOps;
                
                options.scope = vars.scope;
                
            elem.droppable(options);
            //console.log('drOPPable:', options);
        }
    };
}).directive('uiRearrange', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.uiRearrange),
            options = rearrangeOps;
            
            //console.log(vars);
            options.scope = vars.scope;
            
            options.helper = function(event) {
                return $('<div></div>').text(elem.data('part-id') ? elem.data('part-id').replace(/[a-z]/g, '') : '');
            };
            
            elem.draggable(options);
            //console.log('rearrange:', options);
        }
    };
}).directive('addPartId', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.data('part-id', scope.partId);
            //console.log(elem.data('part-id'));
        }
    };
}).directive('stylePart', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.stylePart),
                part = vars.part,
                count = vars.count,
                viewIndex = vars.viewIndex,
                borderColors = scope.borderColors,
                
                style = {top: part['y' + count], left: part['x' + count]},
                colors = scope.colors,
                currentColor,
                randColor = function() {
                    if (colors.currentviewIndex !== viewIndex) {
                        //console.log('currentviewIndex:', colors.currentviewIndex, 'viewIndex:', viewIndex);
                        colors.currentviewIndex = viewIndex;
                        colors.colors = borderColors.slice(0);
                        //console.log(borderColors);
                    }
                    
                    if (colors.currentPart !== part.name) {
                        colors.currentPart = part.name;
                        
                        if (colors.currentIndex !== null) {
                            colors.colors.splice(colors.currentIndex, 1);
                        }
                        
                        colors.currentIndex = Math.floor(Math.random() * colors.colors.length);
                    }
                    
                    currentColor = colors.colors[colors.currentIndex];
                    
                    scope.colors = colors;
                    //console.log(colors.colors, colors.currentIndex, currentColor);
                    return currentColor;
                };
            
            style['border-color'] = randColor();
            
            elem.css(style);
        }
    };
});
