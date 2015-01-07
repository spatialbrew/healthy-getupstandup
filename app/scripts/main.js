/*
https://github.com/yeoman/generator-webapp
https://developers.google.com/youtube/js_api_reference
https://github.com/mrchimp/tock
TODO: newer api without Flash:  https://developers.google.com/youtube/iframe_api_reference
*/

var player;
var countdownDisplay = document.getElementById('countdown');
var timer = new Tock({
	countdown: true,
	interval: 10,
	callback: function() {
		countdownDisplay.innerHTML = timer.msToTime(timer.lap());
	},
	complete: function() {
		countdownDisplay.innerHTML = "Do like Bob says...";
		player.playVideo();
	}
});

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'JuMlHdxiIZ8',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data === 0) {
		var intervalSet = document.getElementById('interval');
		timer.reset();
		timer.start(parseInt(intervalSet.value));
	}
}

function onPlayerReady(event) {
	// event.target.playVideo();     
}

var intervalSet = document.getElementById('interval');
intervalSet.addEventListener('change', function() {
	timer.reset();
	countdownDisplay.innerHTML = '';
	if (this.value !== "Infinity") {
		timer.start(parseInt(this.value));
	} 
});