angular.module('cookedin.services', [])

.factory('Auth', function($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: 'api/users/signin',
      data: user
    })
    .then(function(res) {
      return res.data.token;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: 'api/users/signup',
      data: user
    })
    .then(function(res) {
      return res.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.cookedin');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.cookedin');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})
.factory('Listing', function() {
  var getListings = function() {
    return $http({
      method: 'GET',
      url: 'api/listings'
    })
    .then(function(res) {
      return res.data;
    });
  };

  var addListing = function(listing) {
    return $http({
      method: 'POST',
      url: 'api/listings',
      data: listing
    });
  };

  return {
    getListings: getListings,
    addListing: addListing
  };
});









