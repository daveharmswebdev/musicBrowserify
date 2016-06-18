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
load.filter = function(artist, album) {
	let filteredSongs = [];
	if (artist === 'No Selection') {
		console.log('no artist filter');
	} else {
		filteredSongs = songs.filter((song) => song.artist === artist);
		console.log(filteredSongs);
	}
	if (album === 'No Selection') {
		console.log('no album filter');
	} else {
		filteredSongs = songs.filter((song) => song.album === album);
		console.log(filteredSongs);
	}
	$('#list__post').empty();
	filteredSongs.forEach((song) => render.renderSong(song));
};
load.clearFilter = function() {
	console.log('clear filter');
}
load.getArtists = function() {
    var artists = [];
    songs.forEach((song) => artists.push(song.artist));
    return _.uniq(artists).sort();
};
load.getAlbums = function() {
    var albums = [];
    songs.forEach((song) => albums.push(song.album));
    return _.uniq(albums).sort();
}

module.exports = load;