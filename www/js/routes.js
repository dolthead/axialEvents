angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'eventsCtrl'
    })
        
      
    
      
        
    .state('atlantaSummit2016', {
      url: '/events/atlanta',
      templateUrl: 'templates/atlantaSummit2016.html',
      controller: 'atlantaSummit2016Ctrl'
    })
        
      
    
      
        
    .state('sanFranciscoSummit2016', {
      url: '/events/sanfrancisco',
      templateUrl: 'templates/sanFranciscoSummit2016.html',
      controller: 'sanFranciscoSummit2016Ctrl'
    })
        
      
    
      
        
    .state('dallasSummit2016', {
      url: '/events/dallas',
      templateUrl: 'templates/dallasSummit2016.html',
      controller: 'dallasSummit2016Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/events');

});