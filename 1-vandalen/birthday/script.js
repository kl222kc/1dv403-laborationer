	"use strict";

	window.onload = function(){

		
		var birthday = function(date){

			var date = new Date(date);

			var birthYear = date.getFullYear();
			var birthMonth = date.getMonth();
			var birthDay = date.getDate();

			if(!date.getFullYear() && !date.getMonth() && !date.getDate()) {
				throw new Error("Felaktikt Datum!");
			}
			else {

				var firstDate = new Date(birthYear, birthMonth, birthDay);

				var today = new Date();

				var year = today.getFullYear();
				var month = today.getMonth();
				var day = today.getDate();

				var secondDate = new Date(year, month, day);

				var daysLeft = firstDate.getTime() - secondDate.getTime();

				daysLeft = daysLeft / 1000 / 60 / 60 / 24;

				daysLeft = Math.floor(daysLeft);

				for(var i = birthYear; i < year; i++) {
					birthYear++;
					if (birthYear % 4 == 0) {
						daysLeft = daysLeft + 366;
					}
					else {
						daysLeft = daysLeft + 365;
					}
				}

				if(daysLeft < 0){
					return daysLeft + 365;
				}
				else {
					return daysLeft;
				}

			}
		};
		// ------------------------------------------------------------------------------


		// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
		var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
		var input = document.querySelector("#string");
		var submit = document.querySelector("#send");

		// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
		submit.addEventListener("click", function(e){
			e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

			p.classList.remove( "error");

			try {
				var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
				var message;
				switch (answer){
					case 0: message = "Grattis på födelsedagen!";
					break;
					case 1: message = "Du fyller år imorgon!";
					break;
					default: message = "Du fyller år om " + answer + " dagar";
					break;
				}

				p.innerHTML = message;
			} catch (error){
				p.classList.add( "error"); // Växla CSS-klass, IE10+
				p.innerHTML = error.message;
			}

		});



	};