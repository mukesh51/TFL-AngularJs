(function(){
	var lineController = function($scope,$log,lineFactory){
			function init() {
				lineFactory.getAllLines()
					.success(function(lines){
						$scope.lines = lines.lines;
						$log.log(lines);
					})
					.error(function(data,status,headers,config) {
						$log.log('errror -Mukesh');
					});
			}

			init();
		}

	lineController.inject = ['$scope','$log','lineFactory'];

	angular.module('tflFunApp').controller('lineController',lineController);
})();
		