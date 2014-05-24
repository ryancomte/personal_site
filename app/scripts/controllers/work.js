(function(){
    'use strict';

    angular.module('WorkModule',[])
        .controller('WorkCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

})()
