'use strict';

/* Directives */
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
            self.draggable({ disabled: false });
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
            var self = $(this),
            selfGroup = self.add(self.siblings()),
            listPart = ui.draggable,
            letter = listPart.find('.part-letter').text();
            //console.log('drop-drop', self);
            if (selfGroup.hasClass('ui-state-hover')) {
                selfGroup.removeClass('ui-state-hover');
            }
            
            listPart.data('dropped', true).draggable({ disabled: true });
            selfGroup.addClass('ui-state-highlight').text(letter).each(function(){ $(this).data('part-id', listPart.data('part-id')); });
            //console.log(self.data());
        }
    };
    
app.directive('draggable', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.draggable),
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
}).directive('droppable', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var vars = scope.$eval(attrs.droppable),
                options = dropOps;
                
                options.scope = vars.scope;
                
            elem.droppable(options);
            //console.log('drOPPable:', options);
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
