var $ = require('jQuery');
var addUserSong = require('../js/addUserSong.js');
var loadSongs = require('../js/loadSongs.js');
var addMusicForm = require('../views/addMusicForm.jade');
var filterMusicForm = require('../views/filterMusicForm.jade');
var render = require('../js/render.js');
// append filterMusicForm
loadSongs.read();
//add music event handler
$('.wrapper').on('click', '#addMusicLink', function() {
	if ($('.add').length === 0) {;
		$('.filter').remove();
		$('.nav').after(addMusicForm({}));
		// add listeners and handlers
		$('#addButton').on('click', function() {
			var song = {
				title: $('#titleInput').val(), 
				artist: $('#artistInput').val(), 
				album: $('#albumInput').val()
			};
			loadSongs.setSongs(song);
			$('#list__post').remove();
			render.renderSongs(loadSongs.getSongs());
		});
	}
});

$('.wrapper').on('click', '#filterMusicLink', function() {
	if ($('.filter').length === 0) {
		$('.add').remove();
		let artists = loadSongs.getArtists();
		let albums = loadSongs.getAlbums();
		$('.nav').after(filterMusicForm({
			artists: artists,
			albums: albums
		}));
		// loadFilterSelects();
		$('#btnFilter').on('click', function(){
			loadSongs.filter($('#artistFilter').val(),$('#albumFilter').val());
		});
		$('#btnClearFilter').on('click', function(){
			loadSongs.clearFilter();
		});		
	}
});

// function loadFilterSelects() {
// 	let artists = loadSongs.getArtists();
// 	artists.forEach((artist) => $('#artistFilter').append(filterArtistOption({artist: artist})));
// 	let albums = loadSongs.getAlbums();
// 	albums.forEach((album) => $('#albumFilter').append(filterAlbumOption({album: album})));
// }