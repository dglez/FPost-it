/**
 * Created by Daniel Gonzalez {DG} on 2/3/17.
 */
//var requires = ['ngRoute', 'appRoutes', 'MainController', 'PostsController', 'appService'];

var app = angular.module('app', ['ngRoute', 'appRoutes', 'MainCtrl', 'PostsCtrl', 'AppService']);

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        console.log('Route error', rejection);
    });
});