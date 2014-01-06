"use strict";

var main = {
	icon: document.getElementById("icon"),

	init: function ()
	{

		main.icon.onclick = function(){
			
			console.log("test");
		}

	}
};

window.onload = main.init;