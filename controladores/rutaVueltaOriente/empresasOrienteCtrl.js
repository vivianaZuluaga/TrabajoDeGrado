var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('empresasOrienteCtrl', ['$scope', '$route', '$http', 'queryService', 
    function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/Empresas>.} ORDER BY ?sub"
        queryService.getResults($scope, query)
    }
])