var $ = require('jQuery');
var template = require('../template.hbs');
var render = {};

render.stageJsonResponse = function(songs) {
	songs.forEach((song) => this.renderSong(song));
};
render.renderSong = function(song) {
	$('#list__post').append(template({name: song.title}));
};

module.exports = render;