var $ = require('jQuery');
var addUserSong = require('../js/addUserSong.js');
var loadSongs = require('../js/loadSongs.js');
var addMusicForm = require('../views/addMusicForm.hbs');
var filterMusicForm = require('../views/filterMusicForm.hbs');
var filterArtistOption = require('../views/filterArtistOption.hbs');
var filterAlbumOption = require('../views/filterAlbumOption.hbs');
// append filterMusicForm
loadSongs.read();
//add music event handler
$('#addMusicLink').on('click', function() {
	if ($('.add').length === 0) {;
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
	if ($('.filter').length === 0) {
		$('.add').remove();
		$('.nav').after(filterMusicForm);
		loadFilterSelects();
		$('#btnFilter').on('click', function(){
			loadSongs.filter($('#artistFilter').val(),$('#albumFilter').val());
		});
		$('#btnClearFilter').on('click', function(){
			loadSongs.clearFilter();
		});		
	}
});

function loadFilterSelects() {
	let artists = loadSongs.getArtists();
	artists.forEach((artist) => $('#artistFilter').append(filterArtistOption({artist: artist})));
	let albums = loadSongs.getAlbums();
	albums.forEach((album) => $('#albumFilter').append(filterAlbumOption({album: album})));
}