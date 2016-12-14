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
			data: [
			{
				album: "Number 1's",
				artist: "Stevie Wonder",
				description: "1",
				image: "https://i.scdn.co/image/a07dee541282f93ff3540d9cdfcbc6ff74c8a775",
				title: "My GC Soundscapes!",
				trackId: "583YTL8Fl6pCWtZAi2GvVZ",
				trackName: "Living For The City"
			}, 
			{
				album: "Let's Stay Together",
				artist: "Al Green",
				description: "2",
				image: "https://i.scdn.co/image/b8a23c49afc509cd15612f65d9b5cbe50987b21e",
				title: "My GC Soundscapes!",
				trackId: "7kWhdmRYv8CqbWNqfojqVd",
				trackName: "Let's Stay Together"
			}, 
			{
				album: "Diana (Deluxe Edition)",
				artist: "Diana Ross",
				description: "3",
				image: "https://i.scdn.co/image/8e5be5bcdb2de22326731fca99eb08a018660a8d",
				title: "My GC Soundscapes!",
				trackId: "3SnGymj6ijE2iuUfWxLo1q",
				trackName: "I'm Coming Out"
			}]
		},
		{
			id: 'Belle Isle Aquarium',
			data: [
			{
				album: "An Awesome Wave",
				artist: "alt-J",
				description: "1",
				image: "https://i.scdn.co/image/f41e09137e95e85e1d644a335c6d8258429037ee",
				title: "Aquarium Vibes",
				trackId: "306zYyz3PFvBgLFGOCy9Xb",
				trackName: "Bloodflood"
			},
			{
				album: "Dive",
				artist: "Tycho",
				description: "2",
				image: "https://i.scdn.co/image/de8188980dc7ed522b5b07973c30b7ca0e35ca2d",
				title: "Aquarium Vibes",
				trackId: "6koWevx9MqN6efQ6qreIbm",
				trackName: "A Walk"
			},
			{
				album: "Urban Flora EP",
				artist: "Galimatias",
				description: "3",
				image: "https://i.scdn.co/image/94c352b50db31547670559dc18804029aa0d2bc0",
				title: "Aquarium Vibes",
				trackId: "5kTx5PWQYF5ARuIVbkQalW",
				trackName: "Drift"
			}]
			// {album: "Dude Ranch",
			// 	artist: "blink-182",
			// 	description: "test 2",
			// 	image: "https://i.scdn.co/image/bcb1926bb327fe0189b28ff98f24ae505beaef74",
			// 	title: "orange",
			// 	trackId: "6WkSUgo1VdpzgtiXKlFPcY"}
		},
		{
			id: 'Eastern Market',
			data:[
			{
				album: "Brothers",
				artist: "The Black Keys",
				description: "1",
				image: "https://i.scdn.co/image/54e2288aacdd0681eaa22ee09b1d622a9c7ea532",
				title: "Eastern Market Jams",
				trackId: "2UE4m8egf0aREmOi47sDOk",
				trackName: "Next Girl"
			},
			{
				album: "Coda (Deluxe Edition)",
				artist: "Led Zeppelin",
				description: "2",
				image: "https://i.scdn.co/image/6df40722c9a8b9b148c207cfaba961646030bc5a",
				title: "Eastern Market Jams",
				trackId: "16VhHtoaOjTU4AJBNSBNQ1",
				trackName: "Hey Hey What Can I Do"
			},
			{
				album: "Lazaretto",
				artist: "Jack White",
				description: "3",
				image: "https://i.scdn.co/image/e17bcc3059746a63a6437644c77978a721f0282a",
				title: "Eastern Market Jams",
				trackId: "3T76zPJz3tWL27FrjJe2ot",
				trackName: "Lazaretto"
			}] 
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

