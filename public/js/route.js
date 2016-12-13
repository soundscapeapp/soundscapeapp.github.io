var app = angular.module("soundscape", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/scapes", {
        templateUrl: "views/scapes.html",
        controller: "setController"
      
    });
    $routeProvider.when("/addScape", {
        templateUrl: "views/addScape.html",
        controller: "data"
    });
    $routeProvider.otherwise({
        templateUrl: "views/map.html"    
     });
    
});

app.config(function($sceProvider) {
  $sceProvider.enabled(false);
});

