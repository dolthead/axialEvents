angular.module('app.services', [])

.service('EventsService', ['$http',
    function($http) {

        return {
            getEvents: function() {
                var promise = $http.get('http://localhost:3412/events').then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(response);
                });
                return promise;
            },
            getEventDetails: function(id) {
                var promise = $http.get('http://localhost:3412/events/'+id).then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(response);
                });
                return promise;
            },
            getEventAttendees: function(id) {
                var promise = $http.get('http://localhost:3412/events/'+id+'/attendees').then(function (response) {
                    return response.data;
                }, function (response) {
                    console.log(response);
                });
                return promise;
            }
        }
    }
]);
