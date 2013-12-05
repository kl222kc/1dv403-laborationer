"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1;
	var guesses = 0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.

		var answer = new Array();
		if(secret === ""){
			answer[0] = false;
			return answer;
		}

		if (number > 100 || number < 0) {
			answer[0] = false;
			answer[1] = "Talet är utanför intervallet 0 - 100";
			return answer;
		}
		
		guesses++;
		
		if (secret == number) {
			answer[0] = true;
			answer[1] = "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + guesses + " gissningar för att hitta det.";
			return answer;
		}
		

		if (secret < number) {
			answer[0] = false;
			answer[1] = "Det hemliga talet är lägre!";
			return answer;
		}

		if (secret > number) {
			answer[0] = false;
			answer[1] = "Det hemliga talet är högre!";
			return answer;
		}

		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};