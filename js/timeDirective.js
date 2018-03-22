angular.module('app').directive('showTime', function(){
    return {
        scope: {
            parentTime: '@',
            start: '&'
        },
        templateUrl: './js/time.html'
    };
});