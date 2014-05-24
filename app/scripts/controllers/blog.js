(function(){
    'use strict';

    angular.module('BlogModule',[])
        .controller('BlogCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

})()