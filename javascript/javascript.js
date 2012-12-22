$(document).ready(function() {
	var images = new Array('/images/banner/me02_135.jpg','/images/banner/me01_135.jpg','/images/banner/me03_135.jpg','/images/banner/me04_135.jpg', '/images/banner/me06_135.jpg','/images/banner/me07_135.jpg');
	var cookieName = "imageIndex";
	// See if the cookie exists
	var imageIndex = readCookie(cookieName);
	if (imageIndex != null) {
	    // Show the next image in sequence
		imageIndex = Number(imageIndex, 10) + 1;
		if (imageIndex >= images.length) {
			imageIndex = 0;
		}
  		setCookie(cookieName, imageIndex, 1);
  	} else {
  	    // Always show the first image the first visit
  		imageIndex = 0;
  		setCookie(cookieName, imageIndex, 1);
  	}
  	// Set the image on the screen element
	$("#me").attr("src", images[imageIndex]);
});

function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 1);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

