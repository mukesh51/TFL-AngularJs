var app =  angular.module('tflFunApp',['ngRoute','ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			controller : 'lineController',
			templateUrl : 'app/views/line.html'
		})
		.when('/stn/:lineName', {
			controller: 'stationsLineController',
			templateUrl: 'app/views/stationsLine.html'
		})
		.when('/livedeparture/:lineName/:stnCode', {
			controller: 'liveDepartureController',
			templateUrl: 'app/views/liveDeparture.html'
		})
		.when('/overground',{
			controller : 'overgroundController',
			templateUrl : 'app/views/overgroundDeparture.html'
		})		
		.otherwise({redirectTo: '/'});
});