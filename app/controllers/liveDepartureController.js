(function(){
	var liveDepartureController = function($scope,$log,$routeParams,lineFactory,platformFinder){
		var lineName = $routeParams.lineName,
			stnCode  = $routeParams.stnCode;		

		$scope.departures = null;
			function init() {
				
				lineFactory.getLiveDeparture(lineName,stnCode)
					.success(function(departures){
						var lineNameUpperCase = lineName.charAt(0).toUpperCase() + lineName.slice(1)+" Line";
						$scope.lineName = lineName;
						$log.log(lineName);
						if(lineName === 'jubilee' && stnCode === 'LON') {
							$log.log('I am here '+lineNameUpperCase);
							$scope.westbound = departures.lines[lineNameUpperCase].platforms["Westbound - Platform 3"].departures;
							$scope.eastbound = departures.lines[lineNameUpperCase].platforms["Eastbound - Platform 4"].departures;							
						}
						else if(lineName === 'northern' && stnCode === 'LON') {
							$log.log('I am here '+lineNameUpperCase);
							$scope.westbound = departures.lines[lineNameUpperCase].platforms["Northbound - Platform 1"].departures;
							$scope.eastbound = departures.lines[lineNameUpperCase].platforms["Southbound - Platform 2"].departures;							
						}						
						
						//$log.log(departures.lines[lineNameUpperCase].platforms["Northbound - Platform 1"].departures);
						
						
					})
					.error(function(data,status,headers,config) {
						$log.log('errror -Mukesh');
					});
			}

			init();
		}

	liveDepartureController.inject = ['$scope','$log','lineFactory'];

	angular.module('tflFunApp').controller('liveDepartureController',liveDepartureController);
})();
		