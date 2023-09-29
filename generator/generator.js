import legendImages from "./legendData.js";

// Track the currently displayed images
const displayedImages = [];
const displayedNames = [];

function generateLegends(event) {
	// Remove previously displayed images
	displayedImages.forEach((image) => {
		document.getElementById("legend-list-image").removeChild(image);
	});

	displayedImages.length = 0; // Clear the displayed images array

	displayedNames.forEach((name) => {
		document.getElementById("legend-list-name").removeChild(name);
	});

	displayedNames.length = 0; // Clear the displayed names array

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
		const name = document.createElement("h3");
		// Check screen width and load the appropriate image version
		if (window.innerWidth >= 768) {
			image.src = legendImages[randomNum].src; // Desktop version
			image.alt = legendImages[randomNum].alt;
			image.className = "legend-image";
			const node = document.createTextNode(image.alt);
			name.appendChild(node);
			const element = document.getElementById("legend-list-name");
			element.appendChild(name);
		} else {
			image.src = legendImages[randomNum].mobileSrc; // Mobile version
			image.alt = legendImages[randomNum].altMobile;
			image.className = "legend-image-mobile";
			const node = document.createTextNode(legendImages[randomNum].alt);
			name.appendChild(node);
			const element = document.getElementById("legend-list-name");
			element.appendChild(name);
		}
		image.className = "legend-image";
		document.getElementById("legend-list-image").appendChild(image);
		displayedImages.push(image); // Add the displayed image to the array
		displayedNames.push(name); // Add the displayed image to the array
	});
}

const button = document.getElementById("button");

button.addEventListener("click", generateLegends);
