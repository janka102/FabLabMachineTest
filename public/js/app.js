'use strict';

// Declare app level module with routes
var app = angular.module('fabLab', [], function($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'partials/main.html',
                controller: MainCtrl
            });
            
        $routeProvider.when('/about',
            {
                templateUrl: 'partials/about.html'
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
    }),
    alert = '<div class="alert alert-error"><strong>Uh-oh!</strong> You missed # part$!</div>';

function checkSubmit(){
    var parts = $('.part-group'),
        partsLength = parts.length,
        filledPartsLength = parts.has('.ui-state-highlight').length,
        partAlert = '',
        numCorrect = 0,
        percent = 0,
        cssClass = '',
        bad = [':O', ':(', '(O.O)', 'ಠ╭╮ಠ', 'ರ_ರ', 'you should probably try again'],
        medium = ['maybe next time you\'ll get it'],
        good = [':)', '(^∇^)', '◕‿◕', '☺', 'very good!'],
        message = '';
        
    if ($('.alert-error')) {
        $('.alert-error').remove();
    }
        
    if (filledPartsLength < partsLength) {
        //Fill in the number of unfilled parts and add an 's' if the number is not 1
        partAlert = $(alert.replace('#', (partsLength - filledPartsLength)).replace('$', (partsLength - filledPartsLength) !== 1 ? 's' : ''));
        
        $('.details').prepend(partAlert);
        return;
    }
        
    for (var i = 0, currPart; i < partsLength; i++) {
        currPart = parts.eq(i);
        
        if (currPart.data('part-id') === currPart.children().eq(0).data('part-id')) {
            numCorrect++;
        }
    }
    
    percent = (numCorrect / partsLength) * 100;
    
    switch(true) {
    // [0, 60] is red
    case (percent >= 0 && percent <= 60):
        cssClass = 'text-error';
        message = bad[Math.floor(Math.random() * bad.length)];
        break;
        
    // (60, 90) is yellow
    case (percent > 60 && percent < 90):
        cssClass = 'text-warning';
        message = medium[Math.floor(Math.random() * medium.length)];
        break;
        
    // [90, 100] is green
    default:
        cssClass = 'text-success';
        message = good[Math.floor(Math.random() * good.length)];
    }
    
    //console.log('correct:', numCorrect, 'total:', partsLength);

    $('#check-parts').find('.score').removeClass().addClass('score ' + cssClass).html('You got ' + numCorrect + ' out of ' + partsLength + ' correct, that\'s ' + percent.toFixed(2) + '%... ' + message);
}

function resetParts() {
    var partsList = $('.parts-list'),
        partDrops = $('.part-drop');
        
    if ($('.alert-error')) {
        $('.alert-error').remove();
    }
    
    $('#check-parts').find('.score').html('').removeClass().addClass('score');
    
    partsList.children().each(function(){
        $(this).data('dropped', false).draggable('enable').removeClass('ui-state-disabled');
    });
    
    partDrops.each(function(){
        $(this).removeData('part-id').text('').removeClass('ui-state-highlight');
    });
    
    //console.log('machine reset!');
}

