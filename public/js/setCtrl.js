var app = angular.module('soundscape');

app.controller('setController', function($scope, plStore, $sce) {
 	$scope.masterArray = plStore.fetchPl();
  console.log($scope.masterArray);

  $scope.masterArray.forEach(function(song) {
    var idString = song.trackId;
    var idArray = idString.split(':')
    console.log(idArray);
    // console.log(idString);
    if(idArray[0] !== 'https'){
    	console.log('hey')
    $scope.url = "https://embed.spotify.com/?uri=spotify%3Atrack%3A" + song.trackId;
    song.trackId = $sce.trustAsResourceUrl($scope.url);
	};

  });

});

app.directive('ssSoundscape', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/soundscape.html'
	};
});
