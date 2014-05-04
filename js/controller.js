var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'homeCtrl'
    })

    // route for the home page
    .when('/home', {
      templateUrl : 'views/home.html',
      controller  : 'homeCtrl'
    })

    // route for the about page
    .when('/resume', {
      templateUrl : 'views/resume.html',
      controller  : 'resumeCtrl'
    })
});

mainApp.controller('MainCtrl', function ($scope, $location) {
  $scope.getNavItemClass = function(path) {
    var relativeUrl = $location.path();
    if ( (!relativeUrl || relativeUrl.length < 1 || relativeUrl === "/") && (path == "/home")) {
      return "active";
    } else if (relativeUrl.substr(0, path.length) == path) {
      return "active"
    } else {
      return ""
    }
  }
});

mainApp.controller('homeCtrl', function($scope) {
  // create a message to display in our view
  $scope.message = 'Home';
});

mainApp.controller('resumeCtrl', function($scope) {
  $scope.message = 'Résumé';
});
