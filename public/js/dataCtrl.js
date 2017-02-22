var app = angular.module('soundscape');

  //used on AddScapes view aka Constructor. 
app.controller('data', [ "$scope", "$http", "$timeout", "plStore", function($scope, $http, $timeout, plStore) {


  $scope.hideDisplay = true;

  // user clicks 'search' button
  $scope.findTracks = function(userInput) {
    $scope.trackInfo = [];

    //sets the trackData {} object in the factory
    var encodedStuff = "https://api.spotify.com/v1/search?q="+ encodeURIComponent($scope.search) +"&type=track";
    plStore.fetchTrack(encodedStuff);

    $timeout(function() {
      var trackArray = plStore.fetchTrackList();

      for(var i = 0; i < 24; i++) {
        var trackObj = {};
         trackObj.trackName = trackArray.trackArray[i].name;
        trackObj.album = trackArray.trackArray[i].album.name;
        trackObj.artist = trackArray.trackArray[i].artists[0].name;
        trackObj.image = trackArray.trackArray[i].album.images[2].url;
        trackObj.trackId = trackArray.trackArray[i].id;
        $scope.trackInfo.push(trackObj);
      };
    }, 250);

    $scope.hideDisplay = false;
  }

  $scope.grabSong = function(info, soundscape) {
    var obj = {};
    obj.trackName = info.trackName;
    obj.album = info.album;
    obj.artist = info.artist;
    obj.image = info.image;
    obj.trackId = info.trackId;
    obj.title = soundscape.title;
    obj.description = soundscape.description;
    plStore.sendSong(obj);
    $scope.trackInfo = [];
    $scope.trackInfo.push(obj);
  };

}]);
