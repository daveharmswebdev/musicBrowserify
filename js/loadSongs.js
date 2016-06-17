var $ = require('jQuery');
var render = require('../js/render.js');
var songs = [];
var load = {};

load.read = function() {
	$.ajax({
		url: 'data/songs.json'
	}).done(function(response) {
		response.songs.forEach(load.setSongs);
		console.log(songs);
		render.stageJsonResponse(response.songs);
	});
};
load.setSongs = function(song) {
	songs.push(song);
};


module.exports = load;