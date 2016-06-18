var loadSongs = require('../js/loadSongs.js');
var $ = require('jQuery');
var addMusicForm = require('../views/addMusicForm.hbs');
var filterMusicForm = require('../views/filterMusicForm.hbs');
var addUserSong = require('../js/addUserSong.js');
var filterArtistOption = require('../views/filterArtistOption.hbs');
var filterAlbumOption = require('../views/filterAlbumOption.hbs');
var filterClick = true;
var addClick = false;
// append filterMusicForm
loadSongs.read();
//add music event handler
$('#addMusicLink').on('click', function() {
	if (addClick === true) {
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
	}
});

$('#filterMusicLink').on('click', function() {
	if (filterClick === true) {
		$('.add').remove();
		$('.nav').after(filterMusicForm);
		loadFilterSelects();
		$('#btnFilter').on('click', function() {
			console.log('filter click');
		});
	}
});

function loadFilterSelects() {
	let artists = loadSongs.getArtists();
	artists.forEach((artist) => $('#artistFilter').append(filterArtistOption({artist: artist})));
	let albums = loadSongs.getAlbums();
	albums.forEach((album) => $('#albumFilter').append(filterAlbumOption({album: album})));
}