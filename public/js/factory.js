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
				// album: "Number 1's",
				// artist: "Stevie Wonder",
				description: "My parents loved taking me to Grand Circus Park when I was a kid, and they always played Stevie Wonder in the car as we drove around Detroit. This song always reminds me of them : )",
				image: "https://i.scdn.co/image/a07dee541282f93ff3540d9cdfcbc6ff74c8a775",
				title: "Jam with Stevie at GC Park!",
				trackId: "583YTL8Fl6pCWtZAi2GvVZ",
				trackName: "Living For The City"
			}, 
			{
				// album: "Let's Stay Together",
				// artist: "Al Green",
				description: "Al Green is the king, no question!",
				image: "https://i.scdn.co/image/b8a23c49afc509cd15612f65d9b5cbe50987b21e",
				title: " Grand Circus + Al Green",
				trackId: "7kWhdmRYv8CqbWNqfojqVd",
				trackName: "Let's Stay Together"
			}, 
			{
				// album: "Diana (Deluxe Edition)",
				// artist: "Diana Ross",
				description: "My girlfriends and I blare this song when we’re hanging at Grand Circus Park in the summer!",
				image: "https://i.scdn.co/image/8e5be5bcdb2de22326731fca99eb08a018660a8d",
				title: "Downtown with Diana",
				trackId: "3SnGymj6ijE2iuUfWxLo1q",
				trackName: "I'm Coming Out"
			}]
		},
		{
			id: 'Belle Isle Aquarium',
			data: [
			{
				// album: "An Awesome Wave",
				// artist: "alt-J",
				description: "Explore the tiled corridors of the Belle Isle Aquarium while alt-J’s one of a kind sound takes you out to sea",
				image: "https://i.scdn.co/image/f41e09137e95e85e1d644a335c6d8258429037ee",
				title: "Vibe out with alt-J",
				trackId: "306zYyz3PFvBgLFGOCy9Xb",
				trackName: "Bloodflood"
			},
			{
				// album: "Dive",
				// artist: "Tycho",
				description: "This song sounds so great while watching the fish swim, it calms me down every time!",
				image: "https://i.scdn.co/image/de8188980dc7ed522b5b07973c30b7ca0e35ca2d",
				title: " Let Tycho take you underwater.",
				trackId: "6koWevx9MqN6efQ6qreIbm",
				trackName: "A Walk"
			},
			{
				// album: "Urban Flora EP",
				// artist: "Galimatias",
				description: " My boyfriend and I visited to the Belle Isle Aquarium last weekend, and he showed me this beautiful song by Alina Baraz. I can’t wait to go back, we had such a great day together!",
				image: "https://i.scdn.co/image/94c352b50db31547670559dc18804029aa0d2bc0",
				title: "Great place for a date",
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
				// album: "Brothers",
				// artist: "The Black Keys",
				description: "That Rustbelt Rock sound always reminds me of Saturdays spent roaming the market!",
				image: "https://i.scdn.co/image/54e2288aacdd0681eaa22ee09b1d622a9c7ea532",
				title: " You gotta love The Black Keys",
				trackId: "2UE4m8egf0aREmOi47sDOk",
				trackName: "Next Girl"
			},
			{
				// album: "Coda (Deluxe Edition)",
				// artist: "Led Zeppelin",
				description: "Hey, Hey, What  Can I Do?… shop!",
				image: "https://i.scdn.co/image/6df40722c9a8b9b148c207cfaba961646030bc5a",
				title: "My two favorite things? Led Zeppelin and the Sunday Street Market at EM.",
				trackId: "16VhHtoaOjTU4AJBNSBNQ1",
				trackName: "Hey Hey What Can I Do"
			},
			{
				// album: "Lazaretto",
				// artist: "Jack White",
				description: "Rocking out with the best",
				image: "https://i.scdn.co/image/e17bcc3059746a63a6437644c77978a721f0282a",
				title: "Detroit-native Jack White never fails to impress",
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

