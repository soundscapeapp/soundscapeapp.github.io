var app = angular.module("soundscape", ["ngRoute"]);

app.config( [ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/scapes", {
        templateUrl: "views/scapes.html",
        controller: "setController"
      
    });
    $routeProvider.when("/addScape", {
        templateUrl: "views/addScape.html",
        controller: "data"
    });
    $routeProvider.otherwise({
        templateUrl: "views/map.html",
        controller: 'mapCtrl'    
     });
    
}]);

app.config( [ "$sceProvider", function($sceProvider) {
  $sceProvider.enabled(false);
}]);

