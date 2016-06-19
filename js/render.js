// views
var render = {};
var $ = require('jQuery');
var navBar = require('../views/navTemplate.jade');
var template = require('../views/song_template.jade');

render.renderNav = function() {
	$('.container').prepend(navBar({}));
};
render.renderSongs = (songs) => $('.row').append(template({songs: songs}));

module.exports = render;