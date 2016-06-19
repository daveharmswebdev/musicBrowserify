var jt = {};
var template = require("../views/template.jade");
var $ = require('jQuery');

jt.test = function() {
	$('#testPoint').append(template(
		{
			name: 'Dave',
			city: 'Nashville',
			wife: 'Jennifer',
			testArray: [
				{a: 1, b: 2},
				{a: 11, b: 22},
				{a: 14, b: 24},
				{a: 15, b: 25},
				{a: 16, b: 26}
			]
		}
	));
};

module.exports = jt;