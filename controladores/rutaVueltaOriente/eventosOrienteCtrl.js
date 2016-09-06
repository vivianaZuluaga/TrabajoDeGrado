var ecolodApp = angular.module('EcolodApp')
ecolodApp.controller('eventosOrienteCtrl', ['$scope', '$route', 'queryService', 'urlService', '$sce',
    function($scope, $route, queryService, urlService, $sce) 
    {
        $scope.ruta = $route; 
        var query = "PREFIX UMBEL: <http://umbel.org/umbel#> SELECT ?sub WHERE {?sub  UMBEL:isRelatedTo <http://190.14.254.237/dataseteco/RutaVueltaAOriente/Eventos>.}"
        queryService.getResults($scope, query)

        $scope.setVideo = function(myVideo)
        {
            urlService.setUrl(myVideo)
        }

        $scope.getVideo = function()
        {
            myUrl = urlService.getUrl()
            return $sce.trustAsResourceUrl(myUrl)
        }
    }
])