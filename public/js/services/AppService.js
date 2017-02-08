/**
 * Created by alfredo on 2/8/2017.
 */

angular.module("AppService", []).factory('app', ['$http', function($http){

    return {
        // Gets all the posts
        get: function() {
            return $http.get('/api/posts');
        },

        // Creates a new post
        create: function(post) {
            return $http.post('/api/posts', post);
        },

        // Deletes a post
        delete: function (id) {
            return $http.delete('/api/posts' + id);
        }
    }
}]);