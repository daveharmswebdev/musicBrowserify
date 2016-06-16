var $ = require('jQuery');
var render = {};

render.stageJsonResponse = function(songs) {
	songs.forEach((song) => this.renderSong(song));
};
render.renderSong = function(song) {
	$('#list__post').append(`<p>${song.title}</p>`);
};

module.exports = render;