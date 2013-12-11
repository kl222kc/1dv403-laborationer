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

	// Generar arrayen som spelplanen bygger på
	Memory.board = new RandomGenerator.getPictureArray(rows, cols);

	// Skapar och skriver ut spelplanen
	for(var i=0; i < Memory.board.length; ++i) {

		var div = document.querySelector("#board");

		var card = document.createElement("img");
		card.setAttribute("src","pics/0.png");

		var link = document.createElement("a");
		link.setAttribute("href", "#");
		link.setAttribute("class", "card");
		link.setAttribute("id", Memory.board[i]);

		// Skapar en ny rad
		if (i % cols === 0) {
			link.setAttribute("class","card newrow");
		}

		link.appendChild(card);
		div.appendChild(link);

 		// Kollar ifall man klickar på något kort
 		link.onclick = function(e) {
			e.preventDefault(); // prevents the default action the browser makes on that event.
			Memory.pickCard(this);
		};

	}

},

	// Funktion som visar korten
	pickCard: function(link) {
		link.querySelector('a > img').setAttribute("src","pics/" + link.id +".png");
	}
	
};