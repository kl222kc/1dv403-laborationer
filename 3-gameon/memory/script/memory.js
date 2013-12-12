"use strict";

var Memory = {

	board: [],

	guesses: 0,
	card1: 0,
	card2: 0,
	score: 0,

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

		if(Memory.guesses < 2) {

			Memory.guesses++;
			
			// Ifall det är första gissningen tilldela kortet till card1
			if(Memory.guesses === 1) {
				Memory.card1 = link.querySelector('a > img');
				Memory.card1.setAttribute("src","pics/" + link.id +".png");
			}
			
			// Ifall det är andra gissningen tilldela kortet till card2
			if(Memory.guesses === 2) {
				Memory.card2 = link.querySelector('a > img');
				Memory.card2.setAttribute("src","pics/" + link.id +".png");
				
				// Om dom 2 korten inte är likadanna starta en timer sen vänd tillbacka korten
				if(Memory.guesses > 1 && Memory.card1.getAttribute("src") !== Memory.card2.getAttribute("src")) {
					setTimeout(function() {
						Memory.card1.setAttribute("src", "pics/0.png");
						Memory.card2.setAttribute("src", "pics/0.png");
						Memory.guesses = 0;
					}, 1000);
				}
				
				// Om dom 2 korten är likadanna nollställ antal gissningar och öka poängen med 1
				if (Memory.card1.getAttribute("src") === Memory.card2.getAttribute("src")) {

					Memory.guesses = 0;
					Memory.score++;
				}

			}

		}
		
		// Kollar ifall alla kort är uppvända och spelet över
		if(Memory.score === Memory.board.length / 2) {
			alert("du vann!");
			if(confirm("Spela igen?"))
 			{
 				location.reload();
 			}	
		}

	}
	
};