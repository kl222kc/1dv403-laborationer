"use strict";

var Memory = {

	board: [],

	init: window.onload = function() {
		var rows = 4;
		var cols = 4;
		Memory.createBoard(rows, cols);
	},

	// Funktionen som skapar spelplanen
	createBoard: function(rows, cols) {

	// Generar spelplanen
	Memory.board = new RandomGenerator.getPictureArray(rows, cols);

	// Skapar och skriver ut spelplanen
	for(var i=0; i < Memory.board.length; ++i) {

		var div = document.querySelector("#board");
		var number = document.createElement("img");

		number.setAttribute("src","pics/0.png");

 		number.innerHTML += Memory.board[i];
 		div.appendChild(number);
 	}
	
	},
};