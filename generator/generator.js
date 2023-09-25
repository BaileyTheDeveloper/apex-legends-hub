import legendImages from "./legendData.js";

// Track the currently displayed images
const displayedImages = [];

function generateLegends(event) {
	// Remove previously displayed images
	displayedImages.forEach((image) => {
		document.body.removeChild(image);
	});

	displayedImages.length = 0; // Clear the displayed images array

	const randomNumbers = [];

	// Generate unique random numbers
	while (randomNumbers.length < 3) {
		const randomNum = Math.floor(Math.random() * legendImages.length);
		if (!randomNumbers.includes(randomNum)) {
			randomNumbers.push(randomNum);
		}
	}

	randomNumbers.forEach((randomNum, index) => {
		const image = document.createElement("img");
		// Check screen width and load the appropriate image version
		if (window.innerWidth >= 768) {
			image.src = legendImages[randomNum].src; // Desktop version
			image.alt = legendImages[randomNum].alt;
			image.className = "legend-image";
		} else {
			image.src = legendImages[randomNum].mobileSrc; // Mobile version
			image.alt = legendImages[randomNum].altMobile;
			image.className = "legend-image-mobile";
		}
		image.className = "legend-image";
		document.body.appendChild(image);
		displayedImages.push(image); // Add the displayed image to the array
	});
}

const button = document.getElementById("button");

button.addEventListener("click", generateLegends);
