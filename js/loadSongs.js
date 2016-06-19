var load = {};
var $ = require('jQuery');
var _ = require('underscore');
var render = require('../js/render.js');
var songs = [];

load.read = function() {
    $.ajax({
        url: 'data/songs.json'
    }).done(function(response) {
    	render.renderNav();
        response.songs.forEach(load.setSongs);
        render.renderSongs(response.songs);
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
	if (artist !== 'No Selection') filteredSongs = songs.filter((song) => song.artist === artist);
	if (album !== 'No Selection') filteredSongs = songs.filter((song) => song.album === album);
	$('#list__post').remove();
	render.renderSongs(filteredSongs);
};
load.clearFilter = function() {
	$('#artistFilter').val('No Selection');
	$('#albumFilter').val('No Selection');
	$('#list__post').remove();
	render.renderSongs(songs);
};
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