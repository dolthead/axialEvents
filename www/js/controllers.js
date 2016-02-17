angular.module('app.controllers', [])

.controller('eventsCtrl', function($scope, EventsService) {
    $scope.events = [];

    EventsService.getEvents().then(function(res) {
        $scope.events = res;
    });

})

.controller('eventCtrl', function($scope, $stateParams, EventsService) {
    $scope.event = [];

    EventsService.getEventDetails($stateParams.id).then(function(res) {
        $scope.event = res;

        EventsService.getEventAttendees($stateParams.id).then(function(res) {
            $scope.event.attendees = res;
        });

    });

})

