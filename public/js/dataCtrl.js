var app = angular.module('soundscape');

  //used on AddScapes view aka Constructor. 
app.controller('data', function($scope, $http, $timeout, plStore) {

  // user clicks 'search' button
  $scope.findTracks = function(userInput) {
    $scope.trackInfo = [];

    //sets the trackData {} object in the factory
    var encodedStuff = "https://api.spotify.com/v1/search?q="+ encodeURIComponent($scope.search) +"&type=track";
    plStore.fetchTrack(encodedStuff);

    $timeout(function() {
      var trackArray = plStore.fetchTrackList();

      for(var i = 0; i < 10; i++) {
        var trackObj = {};
        trackObj.album = trackArray.trackArray[i].album.name;
        trackObj.artist = trackArray.trackArray[i].artists[0].name;
        trackObj.image = trackArray.trackArray[i].album.images[2].url;
        trackObj.trackId = trackArray.trackArray[i].id;
        $scope.trackInfo.push(trackObj);
      };
    }, 250);
  }

  $scope.grabSong = function(info, soundscape) {
    var obj = {};
    obj.album = info.album;
    obj.artist = info.artist;
    obj.image = info.image;
    obj.trackId = info.trackId;
    obj.title = soundscape.title;
    obj.description = soundscape.description;
    plStore.sendSong(obj);
    // $scope.soundscape.title = '';
    // $scope.soundscape.description = '';
    // $scope.search = '';
    $scope.trackInfo = [];
    $scope.trackInfo.push(obj);
  };

});
