var $ = require('jQuery');
var render = require('../js/render.js');
var load = {};

load.songs = null;
load.read = function() {
	$.ajax({
		url: 'data/songs.json'
	}).done(function(response) {
		render.stageJsonResponse(response.songs);
	});
};


module.exports = load;