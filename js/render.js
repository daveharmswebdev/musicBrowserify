var render = {};
var $ = require('jQuery');
var navBar = require('../views/navTemplate.jade');
var template = require('../views/song_template.hbs');

render.stageJsonResponse = function(songs) {
	songs.forEach((song) => this.renderSong(song));
};
render.renderSong = function(song) {
	$('#list__post').append(template({title: song.title, artist: song.artist, album: song.album}));
};
render.renderNav = function() {
	$('.wrapper').prepend(navBar({}));
}

module.exports = render;