var loadSongs = require('../js/loadSongs.js');
var $ = require('jQuery');
var addMusicForm = require('../views/addMusicForm.hbs');
var filterMusicForm = require('../views/filterMusicForm.hbs');
var addUserSong = require('../js/addUserSong.js');
var filterArtistOption = require('../views/filterArtistOption.hbs');
// append filterMusicForm
loadSongs.read();
//add music event handler
$('#addMusicLink').on('click', function() {
	// show screen 
	$('.filter').remove();
	$('.nav').after(addMusicForm);
	// add listeners and handlers
	$('#addButton').on('click', function() {
		var song = {
			title: $('#titleInput').val(), 
			artist: $('#artistInput').val(), 
			album: $('#albumInput').val()
		};
		addUserSong.addSong(song);
	});
});

$('#filterMusicLink').on('click', function() {
	$('.add').remove();
	$('.nav').after(filterMusicForm);
	artists = loadSongs.getArtists();
	artists.forEach((artist) => $('#artistFilter').append(filterArtistOption({artist: artist})));
});