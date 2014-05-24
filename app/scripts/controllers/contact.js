(function(){
    'use strict';

    angular.module('ContactModule',[])
        .controller('ContactCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

})()