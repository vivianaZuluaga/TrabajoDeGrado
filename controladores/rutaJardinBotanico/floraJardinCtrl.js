var app = angular.module('EcolodApp')

app.controller('floraJardinCtrl', ['$scope', '$route', '$http', 'queryService',
    function($scope, $route, $http, queryService) 
    {
        $scope.ruta = $route;
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT DISTINCT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaDelJardinBotanico/Flora>.}";
        queryService.getResults($scope, query);
    }
]);