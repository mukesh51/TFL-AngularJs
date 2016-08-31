(function(){
	var lineFactory = function($http) {
		var factory = {};
		
		factory.getAllLines =  function() {
			return $http.get("http://transportapi.com/v3/uk/tube.json?api_key=a473d080efc89c59994d476c85300330&app_id=d19214ec");			
		}

		factory.getStationsLine =  function(lineName) {							  
			return $http.get("http://transportapi.com/v3/uk/tube/"+lineName+".json?api_key=a473d080efc89c59994d476c85300330&app_id=d19214ec");			
		}

		factory.getLiveDeparture = function(lineName,stnCode) {
			return $http.get("http://transportapi.com/v3/uk/tube/"+lineName+"/"+stnCode+"/1/live.json?api_key=a473d080efc89c59994d476c85300330&app_id=d19214ec");
		}
		
		factory.getOvergroundDeparture = function(stnCode) {			
			return $http.get("http://transportapi.com/v3/uk/train/station/"+stnCode+"/live.json?limit=10&api_key=a473d080efc89c59994d476c85300330&app_id=d19214ec");
		}		
		
		return factory;
	};

	lineFactory.$inject = ['$http'];
	angular.module('tflFunApp').factory('lineFactory',lineFactory);

}());