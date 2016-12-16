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

				description: "I love this song and I love this place! Together they're like peanut butter and chocolate",
				image: "https://i.scdn.co/image/a07dee541282f93ff3540d9cdfcbc6ff74c8a775",
				title: "Looking Up",
				trackId: "4huOPF1DlqeSkF3PPcUYcJ",
				trackName: "O-oh Child"
			},
			{
			
				description: "My parents loved taking me to Grand Circus Park when I was a kid, and they always played Stevie Wonder in the car as we drove around Detroit. This song always reminds me of them : )",
				image: "https://i.scdn.co/image/a07dee541282f93ff3540d9cdfcbc6ff74c8a775",
				title: "Jam with Stevie at GC Park!",
				trackId: "583YTL8Fl6pCWtZAi2GvVZ",
				trackName: "Living For The City"
			}, 
			{
			
				description: "Al Green is the king, no question!",
				image: "https://i.scdn.co/image/b8a23c49afc509cd15612f65d9b5cbe50987b21e",
				title: " Grand Circus + Al Green",
				trackId: "7kWhdmRYv8CqbWNqfojqVd",
				trackName: "Let's Stay Together"
			}, 
			{
			
				description: "My girlfriends and I blare this song when we’re hanging at Grand Circus Park in the summer!",
				image: "https://i.scdn.co/image/8e5be5bcdb2de22326731fca99eb08a018660a8d",
				title: "Downtown with Diana",
				trackId: "3SnGymj6ijE2iuUfWxLo1q",
				trackName: "I'm Coming Out"
			}
		
			]
		},
		{
			id: 'Belle Isle Aquarium',
			data: [
			{
				
				description: "Explore the tiled corridors of the Belle Isle Aquarium while alt-J’s one of a kind sound takes you out to sea",
				image: "https://i.scdn.co/image/f41e09137e95e85e1d644a335c6d8258429037ee",
				title: "Vibe out with alt-J",
				trackId: "306zYyz3PFvBgLFGOCy9Xb",
				trackName: "Bloodflood"
			},
			{
				
				description: "This song sounds so great while watching the fish swim, it calms me down every time!",
				image: "https://i.scdn.co/image/de8188980dc7ed522b5b07973c30b7ca0e35ca2d",
				title: " Let Tycho take you underwater.",
				trackId: "6koWevx9MqN6efQ6qreIbm",
				trackName: "A Walk"
			},
			{
				
				description: " My boyfriend and I visited to the Belle Isle Aquarium last weekend, and he showed me this beautiful song by Alina Baraz. I can’t wait to go back, we had such a great day together!",
				image: "https://i.scdn.co/image/94c352b50db31547670559dc18804029aa0d2bc0",
				title: "Great place for a date",
				trackId: "5kTx5PWQYF5ARuIVbkQalW",
				trackName: "Drift"
			}]
			
		},
		{
			id: 'Eastern Market',
			data:[
			{
				
				description: "I love this song from my head tomatoes. If you don't carrot all for it then you've bean missing out on some great beets. Lettuce turnip the sound and yam! We'll be raisin a storm! Anyway this is just a gourd-geous song and I hope you aren't too cornfused!",
				image: "https://i.scdn.co/image/54e2288aacdd0681eaa22ee09b1d622a9c7ea532",
				title: " My favorite vegetables",
				trackId: "62XI1qJo62w0rvTldCHl9P",
				trackName: "Vegetables"
			}, 
			{
				
				description: "That Rustbelt Rock sound always reminds me of Saturdays spent roaming the market!",
				image: "https://i.scdn.co/image/54e2288aacdd0681eaa22ee09b1d622a9c7ea532",
				title: " You gotta love The Black Keys",
				trackId: "2UE4m8egf0aREmOi47sDOk",
				trackName: "Next Girl"
			},
			{
				
				description: "Hey, Hey, What  Can I Do?… shop!",
				image: "https://i.scdn.co/image/6df40722c9a8b9b148c207cfaba961646030bc5a",
				title: "My two favorite things? Led Zeppelin and the Sunday Street Market at EM.",
				trackId: "16VhHtoaOjTU4AJBNSBNQ1",
				trackName: "Hey Hey What Can I Do"
			},
			{
				
				description: "Rocking out with the best",
				image: "https://i.scdn.co/image/e17bcc3059746a63a6437644c77978a721f0282a",
				title: "Detroit-native Jack White never fails to impress",
				trackId: "3T76zPJz3tWL27FrjJe2ot",
				trackName: "Lazaretto"
			}] 
		
		}
	];
	var pinObj = {};
	var clickedId = '';

	return{
		
		fetchKing: function() {
			return kingArray;
		},

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

			
	}


});

