'use strict';

// Declare app level module with routes
var app = angular.module('fabLab', [], function($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'partials/main.html',
                controller: MainCtrl
            });
            
        $routeProvider.when('/:machine',
            {
                templateUrl: 'partials/details.html',
                controller: MachineCtrl
            });
            
        $routeProvider.otherwise(
            {
                redirectTo: '/'
            });
    });

function checkSubmit(){
    var machineViews = $('.machine-view'),
        numCorrect = 0,
        partsLength = 0,
        incompleteViews = 0,
        scoreObj,
        message1 = '<span class="text-error"><strong>Uh-oh!</strong> %msg%</span>',
        message2 = '<span class="text-error">%msg%</span>',
        score = function(percent) {
            var bad = [':(', '(O.O)', 'ಠ╭╮ಠ', 'ರ_ರ', 'you should probably try again'],
                medium = ['maybe next time you\'ll get it'],
                good = [':)', '(^∇^)', '(^_^)', '◕‿◕', 'very good!'],
                cssClass = '',
                scoreMessage = '',
                getRand = function(array) {
                    return array[Math.floor(Math.random() * array.length)];
                };

            switch(true) {
            // [0, 70] is red
            case (percent >= 0 && percent <= 70):
                cssClass = 'text-error';
                scoreMessage = getRand(bad);
                break;
                
            // (70, 90) is yellow
            case (percent > 70 && percent < 90):
                cssClass = 'text-warning';
                scoreMessage = getRand(medium);
                break;
                
            // [90, 100] is green
            default:
                cssClass = 'text-success';
                scoreMessage = getRand(good);
            }

            return {'klass': cssClass, 'message': scoreMessage};
        };

    machineViews.each(function(index){
        var self = $(this),
            parts = self.find('.part-group'),
            viewPartsLength = parts.length,
            filledviewPartsLength = parts.has('.ui-state-highlight').length,
            viewNumCorrect = 0,
            percent = 0;

        if (filledviewPartsLength === 0) {
            incompleteViews += 1;
            self.siblings().find('.score').html(message1.replace('%msg%', 'You did not fill in any parts!'));
            return;
        } else if (filledviewPartsLength < viewPartsLength) {
            incompleteViews += 1;
            self.siblings().find('.score').html(message1.replace('%msg%', 'You forgot ' + (viewPartsLength - filledviewPartsLength) + ' part' + ((viewPartsLength - filledviewPartsLength) !== 1 ? 's' : '') + '!'));
            return;
        }

        parts.each(function(index) {
            var self = $(this);

            if (self.data('part-id') === self.children().data('part-id')) {
                viewNumCorrect += 1;
            }
        });

        numCorrect += viewNumCorrect;
        partsLength += viewPartsLength;

        percent = (viewNumCorrect / viewPartsLength) * 100;

        scoreObj = score(percent);

        // console.log(this, percent, scoreMessage);

        self.siblings().find('.score').html(message2.replace(/text-[a-z]+/, scoreObj.klass).replace('%msg%', 'You got ' + viewNumCorrect + ' out of ' + viewPartsLength + ' correct, that\'s ' + percent.toFixed(2) + '%... ' + scoreObj.message));        
    });

    if (incompleteViews === 0) {
        scoreObj = score(numCorrect / partsLength * 100);
        $('#check-parts').find('.score').html(message2.replace(/text-[a-z]+/, scoreObj.klass).replace('%msg%', '<strong>Total:</strong> You got ' + numCorrect + ' out of ' + partsLength + ' correct, that\'s ' + ((numCorrect / partsLength) * 100).toFixed(2) + '%... ' + scoreObj.message));
    }
}

function resetParts() {
    var partsList = $('.parts-list'),
        partDrops = $('.part-drop');
        
    // Clears out old scores and flashes "Reset..."
    $('.score').html('');
    $('#check-parts').find('.score').html('Reset...');
    setTimeout(function() {$('#check-parts').find('.score').html('');}, 1250);
    
    partsList.children().each(function(){
        $(this).data('dropped', false).draggable('enable').removeClass('ui-state-disabled');
    });
    
    partDrops.each(function(){
        $(this).removeData('part-id').text('').removeClass('ui-state-highlight');
    });
    
    //console.log('machine reset!');
}

