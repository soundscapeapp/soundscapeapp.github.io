var app = angular.module('soundscape');

//FACTORY
app.factory("plStore", function($timeout, $http){

	var masterArray = [];
	var trackData = {};

	return {

		fetchPl: function() {
			return masterArray;
		},

		sendSong: function(soundScapeObj) {
			masterArray.push(soundScapeObj);
			console.log(masterArray);
			return masterArray;
		},

		fetchTrack: function(url) {
			console.log(url);
			var encodedUri = url;
			$http({
				url: encodedUri,
				method: 'GET'
			}).then(function successCallback(data) {
				trackData.trackArray = data.data.tracks.items;
				// console.log(trackData);
			});
		},

		fetchTrackList: function() {
			return trackData;
		}

	};

});
