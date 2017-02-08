/**
 * Created by Daniel Gonzalez {DG} on 2/3/17.
 */

var appRoutes = angular.module('appRoutes', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        //home page
        .when('/', {
            templateURL: 'views/main.html',
            controller: 'MainController'
        });

    $locationProvider.html5Mode(true);
}]);