'use strict';

/* Filters */

app.filter('startFrom', function() {
    return function(input, idx) {
        var i=idx, len=input.length, result = [];
        for (; i<len; i++)
            result.push(input[i]);
        return result;
    };
});