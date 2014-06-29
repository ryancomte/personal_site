(function(){
    'use strict';
    var app = angular.module('HeaderModule',[]);

    app.directive('navHeader', function($window){
        return{
            restrict: 'E',
            templateUrl: 'views/header.html',
            link: function(scope,elms,attrs){
                scope.getWidth = function() {
                    return $window.innerWidth;
                };
                scope.$watch(scope.getWidth, function(newValue, oldValue) {
                    if(newValue < 650){
                        scope.isMobile = true;
                    }else{
                        scope.isMobile = false;
                    }
                });
                $window.onresize = function(){
                    scope.$apply();
                };

                scope.selected = false;


            }
        }
    })
})()