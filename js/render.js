var render = {};
var $ = require('jQuery');
var navBar = require('../views/navTemplate.jade');
var template = require('../views/song_template.jade');

render.renderNav = function() {
	$('.wrapper').prepend(navBar({}));
};
render.renderSongs = (songs) => $('.wrapper').append(template({songs: songs}));

module.exports = render;