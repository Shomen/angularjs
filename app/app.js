var app = angular.module('profile', ['ngAnimate']);
var profile = angular.module('profile', ['ngRoute']);

// configure our routes
profile.config(function($routeProvider) {

$routeProvider
        
        .when('/', {
                templateUrl : 'templates/index.html',
                //controller  : 'mainCtrl'
        })

        
        .when('/resume', {
        templateUrl : 'templates/resume.html',
        controller  : 'resumeCtrl'
        })
		
		.when('/portfolio', {
        templateUrl : 'templates/portfolio.html',
        controller  : 'portfolioCtrl'
        })

        
        .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactCtrl'
        });
});

// Angular's $scope
profile.controller('mainCtrl', function($scope) {
    
});

profile.controller('resumeCtrl', function($scope) {
         $scope.href = '/angularjs/assets/css/resume.css';
		 $scope.type ='text/css';        
});

profile.controller('portfolioCtrl', function($scope) {
        $scope.href = '/angularjs/assets/css/portfolio.css';
		 $scope.type ='text/css';        
});

profile.controller('contactCtrl', function($scope) {
          $scope.href = '/angularjs/assets/css/contact.css';
		 $scope.type ='text/css';
});

function MenuController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

profile.controller('validateCtrl', function($scope) {
    $scope.user = '';
    $scope.email = '';
});
