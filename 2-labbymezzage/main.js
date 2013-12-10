"use strict";

var main = {

	messages: [],

	init: window.onload = function() {

		var button = document.querySelector("#submit");
		var textarea = document.querySelector("#textarea");

		button.onclick = function (e) {
 		e.preventDefault(); // prevents the default action the browser makes on that event.
 		main.saveMessage();
 	};

 	textarea.onkeypress = function (e) {
 		if (e.keyCode == 13 && !event.shiftKey) {
 			e.preventDefault(); // prevents the default action the browser makes on that event.
 			main.saveMessage();
 		}
 	};

 },

 saveMessage: function() {
 	var text = "";
 	var mess;
 	text = document.querySelector("textarea").value;
 	mess = new Message(text, new Date());
 	main.messages.push(mess);
 	main.renderMessages();
 },

 renderMessages: function() {

	// Tömmer formuläret
	document.querySelector("textarea").value = "";

 	// Tar bort alla meddelenden
 	document.querySelector("#messageboard").innerHTML = "";

 	// Skriver ut antal meddelanden som är postade
 	var div = document.querySelector("#messageboard");
 	var messageCount = document.createElement("p");
 	messageCount.setAttribute("class", "messageCount");
 	messageCount.innerHTML = "Antal meddelanden: " + main.messages.length;
 	div.appendChild(messageCount);

 	// Skriver ut alla meddelanden
 	for(var i=0; i < main.messages.length; ++i) {
 		main.renderMessage(i);
 	}


 },

 renderMessage: function(messageID) {

 	// Meddelandets text
 	var div = document.querySelector("#messageboard");
 	var divMessage = document.createElement("div");
 	var text = document.createElement("p");
 	var time = document.createElement("p");
 	var delButton = document.createElement("img");
 	var dateButton = document.createElement("img");

 	divMessage.setAttribute("class", "message");
 	text.setAttribute("class", "text");
 	time.setAttribute("class", "time");
 	
 	delButton.setAttribute("src","pics/delete.png");
 	delButton.setAttribute("class","delButton");
 	delButton.addEventListener("click", deleteMessage, false)

 	function deleteMessage()
 	{
 		if(confirm("Vill du ta bort meddelandet?"))
 		{
 			main.messages.splice(messageID, 1);
 			main.renderMessages();
 		}

 	}

 	dateButton.setAttribute("src","pics/clock.png");
 	dateButton.setAttribute("class","delButton");
 	dateButton.addEventListener("click", showTime, false)

 	var date = main.messages[messageID].getDate();

 	function showTime()
 	{
 		alert(date);
 	}

 	text.innerHTML = main.messages[messageID].getHTMLText();
 	time.innerHTML = "Skrivet: " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);

 	div.appendChild(divMessage);
 	divMessage.appendChild(time);
 	divMessage.appendChild(dateButton);
 	divMessage.appendChild(delButton);
 	divMessage.appendChild(text);
 }

};