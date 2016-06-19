// controller
var $ = require('jQuery');
var loadSongs = require('../js/loadSongs.js');
var render = require('../js/render.js');
var addMusicForm = require('../views/addMusicForm.jade');
var filterMusicForm = require('../views/filterMusicForm.jade');

loadSongs.read();

$('.wrapper').on('click', '#addMusicLink', function() {
	if ($('.add').length === 0) {;
		$('.filter').remove();
		$('.nav').after(addMusicForm({}));
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
		$('#btnFilter').on('click', function(){
			loadSongs.filter($('#artistFilter').val(),$('#albumFilter').val());
		});
		$('#btnClearFilter').on('click', function(){
			loadSongs.clearFilter();
		});		
	}
});