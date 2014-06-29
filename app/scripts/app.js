(function(){
'use strict';


  angular.module('personalSiteApp', ['ngCookies','ngResource','ngSanitize','ui.router','HomePageModule','HeaderModule','WorkModule','BlogModule',
  'ContactModule', 'ngAnimate'])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
    .state('work', {
        url: '/work',
        templateUrl: 'views/work.html',
        controller:'WorkCtrl'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: 'views/blog.html',
        controller:'BlogCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller:'ContactCtrl'
    })
  })

})()




