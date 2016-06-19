// controller
var $ = require('jQuery');
var loadSongs = require('../js/loadSongs.js');
var render = require('../js/render.js');
var addMusicForm = require('../views/addMusicForm.jade');
var filterMusicForm = require('../views/filterMusicForm.jade');

loadSongs.read();

$('.container').on('click', '#addMusicLink', function() {
	if ($('#addMusicForm').length === 0) {;
		$('#filterMusicForm').remove();
		$('.row').prepend(addMusicForm({}));
		$('#addButton').on('click', function() {
			var song = {
				title: $('#titleInput').val(), 
				artist: $('#artistInput').val(), 
				album: $('#albumInput').val()
			};
			loadSongs.setSongs(song);
			$('#list__post').remove();
			render.renderSongs(loadSongs.getSongs());
			$('.add__input').val('');
			$('#titleInput').focus();
		});
	}
});

$('.container').on('click', '#filterMusicLink', function() {
	if ($('#filterMusicForm').length === 0) {
		$('#addMusicForm').remove();
		let artists = loadSongs.getArtists();
		let albums = loadSongs.getAlbums();
		$('.row').prepend(filterMusicForm({
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