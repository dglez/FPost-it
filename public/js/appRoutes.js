/**
 * Created by Daniel Gonzalez {DG} on 2/3/17.
 */

var appRoutes = angular.module('appRoutes', []);

appRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        //home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'PostsController'
        });

    $locationProvider.html5Mode(true);
}]);