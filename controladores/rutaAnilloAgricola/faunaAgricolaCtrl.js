var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('faunaAgricolaCtrl', ['$scope', '$route', '$http', 'queryService',
	function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route;
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelAnilloAgricola/Fauna>.}"
        queryService.getResults($scope, query);
    }
]);