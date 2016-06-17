var $ = require('jQuery');
var template = require('../views/song_template.hbs');
var render = {};

render.stageJsonResponse = function(songs) {
	songs.forEach((song) => this.renderSong(song));
};
render.renderSong = function(song) {
	$('#list__post').append(template({title: song.title, artist: song.artist, album: song.album}));
};

module.exports = render;