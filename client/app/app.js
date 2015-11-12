angular.module('cookedin', [
  'cookedin.services',
  'cookedin.auth',
  'ng-route'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/createAccount.html',
      controller: 'AuthController'
    });
});