/*
*   Creates an animation of a cityscape, with randomly generated buildings and clouds.
*   This was just a personal experiment to learn more about JavaScript and drawing with the 
*   HTML5 canvas.
*
*   Requires a corresponding canvas element with id 'city-canvas'.
*
*   Author: Tim Phillips
*   Date: 2013
*/

var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var buildings;
var clouds;

var buildingColors = ["#A99683","#5E5E5E","#7B7B7B", "#525151", "#696969", "#ACACAB", "#655D54", "#B7B7B7"];

/*
* Sets everything up. Also begins the animation.
*/
function init() {
	canvas = $("#city-canvas")[0];
	ctx = canvas.getContext("2d");
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	buildings = createInitialBuildings();
	clouds = createInitialClouds();
	//draw(); // uncomment to just draw the city without animation
	setInterval(draw, 10);
}

/*
* Updates the animation's progress and draws the new city on the canvas.
*/
function draw() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	// Fill in the sky background
	ctx.fillStyle="#CDE3FC";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);

	// Update and draw clouds
	clouds.forEach(function(cloud) {
		cloud.update();
		cloud.draw();
	});

	// Update and draw the buildings
	buildings.forEach(function(building) {
		building.update();
		building.draw();
	});

	// Create a new building if needed
	var lastBuildingXPos = buildings[buildings.length - 1].xPos;
	if (lastBuildingXPos >= 0) {
		var building = createNewBuilding();
		building.xPos = lastBuildingXPos - building.width;
		building.draw();
		buildings.push(building);
	}

	// Sometimes add a new cloud
	if (Math.random() > 0.99) {
		var cloud = createCloud(-100);
		clouds.push(cloud);
	}
}

/*
* Generates the initial buildings in the cityscape. Building properties
* are randomly generated.
* @return Array of buildings
*/
function createInitialBuildings() {
	buildings = [];
	var xPos = 0;
	while(xPos < canvasWidth) {
		var building = createNewBuilding(xPos);
		buildings.push(building);
		xPos = xPos + building.width;
	}
	// Since the buildings were created left-to-right,
	// the array is reversed so that the left-most building
	// is at the end of the array (simplifies adding new buildings)
	buildings.reverse();
	return buildings;
}

/*
* Generates the initial clouds in the cityscape.
* @return Array of clouds
*/
function createInitialClouds() {
	clouds = [];

	// Create some initial clouds in random locations
	for(var i = 0; i < canvasWidth / 100; i++) {
		var cloudXPos = Math.random() * canvasWidth;
		var cloud = createCloud(cloudXPos);
		clouds.push(cloud);
	}

	return clouds;
}

/*
* Generates a cloud, located at the given x position
* @param XPos
* @return Cloud
*/
function createCloud(xPos) {
	// Create a separate canvas for the cloud element
	var cloudCanvas = document.createElement("canvas");
	var cloudCanvasCtx = cloudCanvas.getContext("2d");

	// Create a circle element. This circle is redrawn several times to 
	// create the cloud
	var circleCanvas = document.createElement("canvas");
	var circleCanvasCtx = circleCanvas.getContext("2d");
	var circleRadius = 20;
	circleCanvas.width = circleRadius * 2;
	circleCanvas.height = circleCanvas.width;
	circleCanvasCtx.fillStyle="#FFFFFF";
	circleCanvasCtx.beginPath();
	circleCanvasCtx.arc(circleRadius, circleRadius, circleRadius, 0, Math.PI * 2, true);
	circleCanvasCtx.fill();

	// Draw the specified number of circles.
	for (var i = 0; i < 25; i++) {
		// Compute a randomised circle position within the cloud.
		var angle = Math.random() * Math.PI * 2;
		var x = 60 - circleRadius + Math.random() * 35 * Math.cos(angle);
		var y = 60 - circleRadius + Math.random() * 35 * Math.sin(angle);

		// Draw the circle
		cloudCanvasCtx.drawImage(circleCanvas, x, y);
	}

	// Create a cloud object, with the cloud canvas and its position.
	return new Cloud(cloudCanvas, xPos, Math.random() * 60);
}

/*
* Generates a single building.
* @param xPos The left-most position of the building on the x-axis
* @return Building
*/
function createNewBuilding(xPos) {
	var building = new Building({
		color: buildingColors[Math.floor(Math.random() * (buildingColors.length))],
		width: Math.floor(Math.random() * (150 - 75 + 1)) + 75,
		height: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
		windowHeight: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
		windowWidth: Math.floor(Math.random() * (15 - 10 + 1)) + 10,
		xPos: xPos
	});

	building.createBuildingWindows();

	return building;
}

// Building class
var Building = function Building(properties) {
	properties = properties || {};
	this.color = properties.color || '#A99683';
	this.height = properties.height || 100;
	this.width = properties.width || 50;
	this.windowWidth = properties.windowWidth || 10;
	this.windowHeight = properties.windowHeight || 10;
	this.xPos = properties.xPos || 0;
};

// Creates some windows for the building
Building.prototype.createBuildingWindows = function() {
	this.windows = [];
	var yPos = canvasHeight - this.height + 20,
		divisionSize;

	// Create two columns of windows if building width is < 125
	if (this.width < 125) {
		divisionSize = this.width / 5; // two windows: _W_W_
		// Add windows from the top of the building down to 30 pixels from the bottom
		while(yPos < (canvasHeight - 30)) {
			// Two columns of windows
			for (var i = 0; i < 2; i++) {
				this.windows.push(
					new Window(divisionSize * (1 + (i * 2)) + (divisionSize / 2) - (this.windowWidth / 2), yPos)
				);
			}
			// 30 pixel gap between rows of windows
			yPos = yPos + this.windowHeight + 30;
		}
	// Create three columns of windows if building width is > 125
	} else {
		divisionSize = this.width / 7; // three windows: _W_W_W_
		// Add windows from the top of the building down to 30 pixels from the bottom
		while(yPos < (canvasHeight - 30)) {
			// Three columns of windows
			for (var j = 0; j < 3; j++) {
				this.windows.push(
					new Window(divisionSize * (1 + (j * 2)) + (divisionSize / 2) - (this.windowWidth / 2), yPos)
				);
			}
			// 30 pixel gap between rows of windows
			yPos = yPos + this.windowHeight + 30;
		}
	}
};

// Draws the building
Building.prototype.draw = function() {
	var building = this;
	// Building color
	ctx.fillStyle = this.color;
	ctx.fillRect(
		this.xPos,
		canvasHeight-this.height, 
		this.width, 
		this.height
	);

	// Building border
	ctx.strokeStyle = 'black';
	ctx.strokeRect(
		this.xPos,
		canvasHeight-this.height, 
		this.width, 
		this.height
	);

	// Draw windows
	this.windows.forEach(function(window) {
		ctx.fillStyle = "#FAF9A7";
		ctx.fillRect(
			building.xPos + window.xPos,
			window.yPos,
			building.windowHeight,
			building.windowWidth
		);
		ctx.strokeStyle = 'black';
		ctx.strokeRect(
			building.xPos + window.xPos,
			window.yPos,
			building.windowHeight,
			building.windowWidth
		);
	});
};

// Updates the building's position
Building.prototype.update = function() {
	this.xPos++;
	// Delete the building if it is no longer visible
	// 150 is > than the max building width
	if (this.xPos > canvasWidth + 150) {
		var index = buildings.indexOf(this);
		buildings.splice(index, 1);
	}
};

// Window class
var Window = function(xPos, yPos) {
	// xPos within the window's building
	this.xPos = xPos;
	// yPos within the window's building
	this.yPos = yPos;
};

// Cloud class
var Cloud = function(cloudCanvas, xPos, yPos) {
	this.cloudCanvas = cloudCanvas;
	this.xPos = xPos;
	this.yPos = yPos;
};

// Updates the cloud's position
Cloud.prototype.update = function() {
	this.xPos++;
	// Delete the cloud if it is no longer visible
	if (this.xPos > canvasWidth) {
		var index = clouds.indexOf(this);
		clouds.splice(index, 1);
	}
};

// Draws the cloud
Cloud.prototype.draw = function() {
	ctx.drawImage(this.cloudCanvas, this.xPos, this.yPos);
};

// Sets up the canvas, and starts the animation, once the page is ready
$(document).ready(function() {
	init();
});