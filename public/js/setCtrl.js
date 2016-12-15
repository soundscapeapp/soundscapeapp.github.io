var app = angular.module('soundscape');

app.controller('setController', [ '$scope', 'plStore', '$sce', 'pinFactory', function($scope, plStore, $sce, pinFactory) {
 	

  //calls master array from plStore
  var masterArray = plStore.fetchPl();
  
  // sends masterArray to pinFactory
  pinFactory.setObjData(masterArray);


  //most recently clicked pin
  var clickedId = pinFactory.fetchClicked();
  // console.log(clickedId)
 


  var kingArray = pinFactory.fetchKing();
  // console.log(kingArray);
  
  kingArray.forEach(function(pin){
    if(pin.id === clickedId){
        console.log("it's an apple!");
      $scope.targetArray = pin.data;
      // console.log(targetArray);
    }
  });

  // console.log($scope.targetArray)


  // $scope.targetArray = plStore.fetchPl();
  // console.log($scope.targetArray);

  

  //apply $sce wrapper to trackId property
  $scope.targetArray.forEach(function(song) {
    var idString = song.trackId;
    var idArray = idString.split(':')
    // console.log(idArray);
    // console.log(idString);
    if(idArray[0] !== 'https'){
      // console.log('hey')
    $scope.url = "https://embed.spotify.com/?uri=spotify%3Atrack%3A" + song.trackId;
    song.trackId = $sce.trustAsResourceUrl($scope.url);
  };

  });

  //clear masterArray
  plStore.clearMaster();

}]);


app.controller('mapCtrl', [ '$scope', 'pinFactory', function($scope, pinFactory){

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.339734, lng: -83.013477},
      zoom: 13
     ,styles:[
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d3f5ff"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#aeddc1"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#eff2ee"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#7c84c7"
      }
    ]
  }
]

    });

    var locations = [
      [ 'Grand Circus Park', 42.3356937, -83.0498165 ],
      ['Belle Isle Aquarium', 42.3367071, -82.9863983 ],
      ['Eastern Market', 42.3485333, -83.0414262 ]
    ];

    var markers = [];

    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        data: {
          id: locations[i]
        }
      });

      markers.push(marker);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          console.log(marker.data.id[0]);
          var pinId = marker.data.id[0];
          pinFactory.setClicked(pinId);
          
          // document.location = 'https://soundscapeapp.github.io/public/#/scapes';
         document.location = "http://localhost:8080/#/scapes";
        }
      })(marker, i));
    }

  }

  initMap();

//  
}]);


app.directive('ssSoundscape', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/soundscape.html'
  };
});
