"use strict";

var main = {
	icon: document.getElementById("icon"),

	init: function () {

		main.icon.onclick = function(){

			if (!document.getElementById("window")) {
				main.createWindow();
			}
			
		};

	},

	createWindow: function() {

		var body = document.querySelector("body");
		var window = document.createElement("div");
		var windowHeader = document.createElement("div");
		var statusField = document.createElement("div");
		var gallery = document.createElement("div");
		var closeButton = document.createElement("img");
		var windowIcon = document.createElement("img");
		var windowText = document.createElement("span");
		var text = document.createTextNode("Image Gallery");

		if(!gallery.querySelectorAll('img').length > 0) {
			var loading = document.createElement("span");
			var loadingText = document.createTextNode("Laddar...");
			var loadingGif = document.createElement("img");
			loadingGif.setAttribute("src","pics/loading.gif");
			loading.setAttribute("class", "loading");
			loadingGif.setAttribute("class", "loading");
			statusField.appendChild(loadingGif);
			loading.appendChild(loadingText);
			statusField.appendChild(loading);
		}

		main.getImages(function(data){

		var images = JSON.parse(data);
		
		var largestWidth = 0;
		var largestHeight = 0;
		
		for(var i = 0; i < images.length; i++) {
			
			if(largestWidth < images[i].thumbWidth) {
				largestWidth = images[i].thumbWidth;
			}
			
			if(largestHeight < images[i].thumbHeight) {
				largestHeight = images[i].thumbHeight;
			}

		}

        for (var i = 0; i < images.length; i++) {
        	var thumbnailLink = document.createElement("div");
        	thumbnailLink.setAttribute("class", "thumbnail");
			thumbnailLink.setAttribute("style","width:" + 80 + "px;" + "height:" + largestHeight + "px");
			thumbnailLink.setAttribute("id", i);

        	var thumbnail = document.createElement("img");
            thumbnail.setAttribute("src",images[i].thumbURL);
            thumbnail.setAttribute("height",images[i].thumbHeight)
            thumbnail.setAttribute("width",images[i].thumbWidth)
            thumbnailLink.addEventListener("click", changeBackground, false)

            thumbnailLink.appendChild(thumbnail);
            gallery.appendChild(thumbnailLink);
        }

        if(gallery.querySelectorAll('img').length > 0) {
        	statusField.removeChild(loading);
			statusField.removeChild(loadingGif);
        }

        function changeBackground() {
        	var background = images[this.id].URL;
			document.body.style.backgroundImage="url(" + background + ")";
		};

        });

		window.setAttribute("id","window"); 
		gallery.setAttribute("id","gallery"); 
		statusField.setAttribute("class","statusField"); 

		windowHeader.setAttribute("class","windowHeader"); 
		closeButton.setAttribute("src","pics/close3.png");
		closeButton.setAttribute("class","closeButton");

		windowIcon.setAttribute("src","pics/image.png");
		windowIcon.setAttribute("class","windowIcon");

		closeButton.addEventListener("click", closeWindow, false)

		function closeWindow() {
			document.body.removeChild(window);
		};

		windowText.appendChild(text);
		windowHeader.appendChild(windowIcon);
		windowHeader.appendChild(windowText);
		windowHeader.appendChild(closeButton);
		window.appendChild(windowHeader);
		window.appendChild(gallery);
		window.appendChild(statusField);
		body.appendChild(window);

	},

	getImages: function (callback) {
		var READY_STATE_UNINITIALIZED = 0;
		var READY_STATE_OPENED = 1;
		var READY_STATE_SENT = 2;
		var READY_STATE_LOADING = 3;
		var READY_STATE_COMPLETE = 4;

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if(xhr.readyState === READY_STATE_COMPLETE)
			{
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
				{
					callback(xhr.responseText);
				}
				else
				{
					console.log("Läsfel");
				}
			}

		};

		xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);

		xhr.send(null);
	}

};

window.onload = main.init;