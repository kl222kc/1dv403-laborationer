"use strict";

var Memory = {

	board: [],

	guesses: 0,
	card1: "",
	card2: "",

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

			if(this.querySelector('a > img').getAttribute("src") === "pics/0.png") {
				Memory.pickCard(this);
			}
		};

	}

},

	// Funktion som visar korten
	pickCard: function(link) {	

		if(Memory.guesses === 0) {
			link.querySelector('a > img').setAttribute("src","pics/" + link.id +".png");
			Memory.card1 = link;
			Memory.guesses++;
		}
		else if(Memory.guesses === 1) {
			link.querySelector('a > img').setAttribute("src","pics/" + link.id +".png");
			Memory.card2 = link;
			Memory.guesses++;
		}

		if (Memory.card1.id === Memory.card2.id) {
			console.log("grattis");
			Memory.guesses = 0;
		}

		if(Memory.guesses > 1 && Memory.card1.id !== Memory.card2.id) {
			Memory.card1.querySelector('a > img').setAttribute("src", "pics/0.png");
			Memory.card2.querySelector('a > img').setAttribute("src", "pics/0.png");
			Memory.card1 = 0;
			Memory.card2 = 0;
			Memory.guesses = 0;
		}			
		
	}
	
};