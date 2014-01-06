"use strict";

var main = {
	icon: document.getElementById("icon"),

	init: function ()
	{

		main.icon.onclick = function(){

			if (!document.getElementById("window")) {
				main.createWindow();
			}
			
		}

	},

	createWindow: function() {

		var body = document.querySelector("body");
		var window = document.createElement("div");
		var closeButton = document.createElement("img");

	 	closeButton.setAttribute("src","pics/close.png");
 		closeButton.setAttribute("class","closeButton");

 		closeButton.addEventListener("click", closeWindow, false)

 		function closeWindow() {
 			document.body.removeChild(window);
 		}


		window.setAttribute("id","window"); 
		window.appendChild(closeButton);
 		body.appendChild(window);
		
	}

};

window.onload = main.init;