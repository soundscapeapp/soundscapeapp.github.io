var app = angular.module('soundscape');

//plStore factory, used for API request
app.factory('plStore', [ "$timeout", "$http", function($timeout, $http){

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
		},

		clearMaster: function(){
			masterArray = [];
		}

	};
//
}]);

app.factory('pinFactory', function(){

	var kingArray = [
		{
			id: 'Grand Circus Park',
			data: []
		},
		{
			id: 'Belle Isle Aquarium',
			data: []
			// {album: "Dude Ranch",
			// 	artist: "blink-182",
			// 	description: "test 2",
			// 	image: "https://i.scdn.co/image/bcb1926bb327fe0189b28ff98f24ae505beaef74",
			// 	title: "orange",
			// 	trackId: "6WkSUgo1VdpzgtiXKlFPcY"}
		},
		{
			id: 'Eastern Market',
			data:[] 
			// {album: "Hello",
			// 	artist: "Adele",
			// 	description: "test",
			// 	image: "https://i.scdn.co/image/220fe5804f244f41aa216c4e3de17eafbf552341",
			// 	title: "banana",
			// 	trackId: "0ENSn4fwAbCGeFGVUbXEU3"}
		}
	];
	var pinObj = {};
	var clickedId = '';

	return{
		
		fetchKing: function() {
			return kingArray;
		},

		// setObjId: function(pinId) {
		// 	pinObj.id = pinId;
		// 	console.log(pinObj.id);
		// },

		setObjData: function(masterArray) {
			kingArray.forEach(function(pin){
				if(pin.id === clickedId){

					var masterObj = masterArray[0];
					// console.log(masterObj);
					if(masterObj !== undefined){
						console.log(masterArray);
						masterArray.forEach(function(scape){
							pin.data.push(scape);
						})
						// pin.data.push(masterObj);
						// console.log(pin.data);
					};
				};
			});
			
		},

		setClicked: function(clicked) {
			clickedId = clicked;
			console.log(clickedId);
		},

		fetchClicked: function(){
			return clickedId;
		}

		// sendPin: function(pinObj) {
		// 	kingArray.push(pinObj);
		// 	console.log(kingArray);}
		
	}

//	
});

