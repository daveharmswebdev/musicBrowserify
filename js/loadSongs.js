var load = {};
var $ = require('jQuery');
var _ = require('underscore');
var render = require('../js/render.js');
var songs = [];

load.read = function() {
	$.ajax({
		url: 'data/songs.json'
	}).done(function(response) {
		response.songs.forEach(load.setSongs);
		render.stageJsonResponse(response.songs);
	});
};
load.setSongs = function(song) {
	songs.push(song);
};

load.getSongs = function() {
	return songs;
};

load.test = function() {
	console.log('works in loadsongs');
};

load.getArtists = function() {
	var artists = [];
	songs.forEach((song) => artists.push(song.artist));
	return _.uniq(artists).sort();
};

module.exports = load;