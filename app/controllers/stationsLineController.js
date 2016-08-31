(function(){
	var stationsLineController = function($scope,$log,$routeParams,lineFactory){
		var lineName = $routeParams.lineName;		
		$scope.stations = null;
			function init() {
				lineFactory.getStationsLine(lineName)
					.success(function(stationsOnLine){
						$scope.lineName = stationsOnLine.line_name;
						$scope.stations = stationsOnLine.stations;
						//$log.log(stationsOnLine);
					})
					.error(function(data,status,headers,config) {
						$log.log('errror -Mukesh');
					});
			}

			$scope.sortIt = function(attribute) {
				$scope.sortBy = attribute;
				$scope.ascdesc = !$scope.ascdesc;
			}

			init();

		}



	stationsLineController.inject = ['$scope','$log','lineFactory'];

	angular.module('tflFunApp').controller('stationsLineController',stationsLineController);
})();
		