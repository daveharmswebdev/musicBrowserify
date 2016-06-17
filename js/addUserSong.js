var addUserSong = {};
var songs = require('../js/loadSongs.js');
var render = require('../js/render.js');

addUserSong.addSong = function(song) {
	songs.setSongs(song);
	render.renderSong(song);
};

module.exports = addUserSong;