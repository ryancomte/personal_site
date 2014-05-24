(function(){
    'use strict';
    var app = angular.module('HeaderModule',[]);

    app.directive('navHeader', function(){
        return{
            restrict: 'E',
            templateUrl: 'views/header.html',
            controller: function(){}
        }
    })
})()