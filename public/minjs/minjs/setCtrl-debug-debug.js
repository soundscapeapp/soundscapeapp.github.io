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
      // console.log("it's an apple!")
      $scope.targetArray = pin.data;
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

  $scope.buttonClick = function(){
    var input = $scope.input;
    pinFactory.setClicked(input);
  };

//  
}]);

app.directive('ssSoundscape', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/soundscape.html'
	};
});
