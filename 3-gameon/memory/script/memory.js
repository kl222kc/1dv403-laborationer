"use strict";

var Memory = {

	memory: [],

	init: window.onload = function() {
		var random;
		random = new RandomGenerator.getPictureArray(4, 4);
		console.log(random);
	},
};