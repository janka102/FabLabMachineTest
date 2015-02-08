var VIEW_NAME_REGEX = new RegExp(/[a-zA-Z_]+[a-z]/g),
    dragOps = {
        addClass: false,
        cursorAt: {
            left: 17,
            top: 17
        },
        revert: 'invalid',
        zIndex: 900,
        start: function() {
            var self = $(this);
            //console.log('drag-start', self);
            self.addClass('ui-state-disabled');
        },
        stop: function() {
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
        over: function() {
            var self = $(this);
            //console.log('drop-over', self);
            self.add(self.siblings()).addClass('ui-state-hover');
        },
        out: function() {
            var self = $(this);
            //console.log('drop-out', self);
            self.add(self.siblings()).removeClass('ui-state-hover');
        },
        drop: function(event, ui) {
            var self = $(this),
                selfGroup = self.add(self.siblings()),
                prevPart = ui.draggable,
                prevGroup = prevPart.add(prevPart.siblings()),
                letter = prevPart.data('part-id').replace(VIEW_NAME_REGEX, ''), // gets the single uppercase part letter
                selfID = self.data('part-id'),
                partsList = self.parents('.machine-view').siblings('.span3'),
                score = partsList.find('.score').add($('.check-total').find('.score'));
            //console.log('drop-drop', self);

            if (score.length) {
                score.html('');

                self.parent().siblings().add(self.parent()).children().each(function() {
                    var self = $(this);

                    self.css('border-color', self.data('border-color'));
                });
            }

            if (selfGroup.hasClass('ui-state-hover')) {
                selfGroup.removeClass('ui-state-hover');
            }

            // Dragged from the list to a spot...
            if (!prevPart.hasClass('part-drop')) {
                // that is empty
                if (self.data('part-id') === undefined) {
                    //console.log('list to empty');
                    prevPart.data('dropped', true).draggable('disable');
                } else { // that is already occupied
                    //console.log('list to occupied');
                    //console.log(self.clone());

                    prevPart.data('dropped', true).draggable('disable');
                    prevPart.siblings().each(function() {
                        var self = $(this);

                        if (self.data('part-id') === selfID) {
                            self.data('dropped', false).draggable('enable').removeClass('ui-state-disabled');

                            return false;
                        }
                    });
                }

                selfGroup.addClass('ui-state-highlight').text(letter).data('part-id', prevPart.data('part-id'));
            } else { // Rearrange...
                // to a different part...
                if (self.data('part-id') !== prevPart.data('part-id')) {
                    // that is empty
                    if (self.data('part-id') === undefined) {
                        //console.log('rearrange to empty');
                        prevGroup.removeClass('ui-state-highlight').text('');
                    } else { // that is already occupied
                        //console.log('rearrange to occupied', prevPart.data('part-id'), '>', self.data('part-id'));
                        selfGroup.data('part-id', prevPart.data('part-id'));
                        //console.log(self.data('part-id'));
                        selfGroup.text(prevPart.text());

                        // prevGroup.data('part-id', selfID);
                        // prevGroup.text(selfID.replace(VIEW_NAME_REGEX, ''));

                        prevGroup.removeData('part-id').text('').removeClass('ui-state-highlight');
                        partsList.find('.part').each(function() {
                            var self = $(this);

                            if (self.data('part-id') === selfID) {
                                self.data('dropped', false).draggable('enable').removeClass('ui-state-disabled');
                            }
                        });

                        return;
                    }
                } else { // to a spot that is of the same part
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
        cursorAt: {
            left: 17,
            top: 17
        },
        revert: 'invalid',
        zIndex: 900,
        start: function() {
            var self = $(this);
            //console.log('rearrange-start', self);

            if (!self.data('part-id')) {
                //console.log('canceled rearrange b/c it has no partID');
                return false;
            } else {
                self.add(self.siblings()).addClass('ui-draggable-disabled');
            }
        },
        stop: function() {
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
            options.helper = function() {
                return $('<div></div>').text(vars.helper.letter);
            };

            elem.draggable(options).tap(function() {
                var self = $(this),
                    touchActive = self.siblings('.ui-touch-active')
                        .add(self.parents('.span3').siblings('.span9').find('.ui-touch-active'));

                if (!self.hasClass('ui-draggable-disabled')) {
                    //console.log('touch-drag', self.clone());

                    self.toggleClass('ui-touch-active');

                    if (touchActive.length) {
                        touchActive.removeClass('ui-touch-active');
                    }
                }
            });

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

            elem.droppable(options).tap(function() {
                var self = $(this),
                    listTouchActive = self.parents('.span9').siblings('.span3').find('.ui-touch-active'),
                    dropTouchActive = self.parent().siblings().find('.ui-touch-active'),
                    touchActive = listTouchActive.add(dropTouchActive);

                //console.log(listTouchActive, dropTouchActive, self);

                if (touchActive.length) {
                    //console.log('touch-drop', touchActive.clone());

                    // Makes touchActive more like the actual ui-draggable I am passing it in as
                    touchActive.context = touchActive[0];
                    delete touchActive.prevObject;
                    delete touchActive.selector;

                    options.drop.call(self, event, {
                        draggable: touchActive.eq(0)
                    });

                    touchActive.removeClass('ui-touch-active');
                } else if (!listTouchActive.length && !self.hasClass('ui-draggable-disabled') && self.hasClass('ui-state-highlight')) {
                    //console.log('touch-rearrange', self.clone());

                    self.add(self.siblings()).toggleClass('ui-touch-active');

                    if (touchActive.length) {
                        touchActive.removeClass('ui-touch-active');
                    }
                }
            });

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

            options.helper = function() {
                return $('<div></div>').text(elem.data('part-id') ? elem.data('part-id').replace(VIEW_NAME_REGEX, '') : '');
            };

            elem.draggable(options);
            //console.log('rearrange:', options);
        }
    };
}).directive('addPartId', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            elem.data('part-id', scope.partId);
            //console.log(elem.data('part-id'));
        }
    };
}).directive('addPartDescription', function() {
    return {
        restrict: 'A',
        link: function(scope, elem) {
            var icon, description;

            if (scope.part.description) {
                icon = $('<i class="icon-question-sign get-description ui-icon" title="Hint" data-toggle="tooltip"></i>').click(function() {
                    scope.toggle(event);
                });
                description = $('<span class="part-description ui-helper-hidden-accessible">' + scope.part.description + '</span>');

                elem.append(icon).append(description);
                // console.log('description', elem);
            }
        }
    };
}).directive('stylePart', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var DEFAULT_COLOR = 'rgb(0, 136, 204)',
                vars = scope.$eval(attrs.stylePart),
                part = vars.part,
                count = vars.count,
                viewIndex = vars.viewIndex,
                name = vars.name,
                borderColors = scope[name + 'BorderColors'],
                style = {
                    left: part['x' + count] + '%',
                    top: part['y' + count] + '%'
                },
                colors = scope[name + 'Colors'],
                randColor = function() {
                    if (colors.currentviewIndex !== viewIndex) {
                        // console.log('currentviewIndex:', colors.currentviewIndex, 'viewIndex:', viewIndex);

                        // reset
                        scope[name + 'Colors'].currentIndex = null;

                        colors.currentviewIndex = viewIndex;
                        colors.colors = borderColors.slice(0);

                        // console.log(borderColors);
                    }

                    if (colors.currentPart !== part.name) {
                        colors.currentPart = part.name;

                        if (colors.currentIndex !== null) {
                            colors.colors.splice(colors.currentIndex, 1);
                        }

                        colors.currentIndex = Math.floor(Math.random() * colors.colors.length);
                    }

                    var currentColor = colors.colors[colors.currentIndex];

                    scope[name + 'Colors'] = colors;

                    // console.log(colors.colors, colors.currentIndex, currentColor);

                    return currentColor;
                };

            style['border-color'] = borderColors.length ? randColor() : DEFAULT_COLOR;

            elem.css(style).data('border-color', style['border-color']);
        }
    };
});
