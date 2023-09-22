const legendImages = [
	{ src: "../images/ash-full.png", alt: "Ash" },
	{ src: "../images/ballistic-full.png", alt: "Ballistic" },
	{ src: "../images/bangalore-full.png", alt: "Bangalore" },
	{ src: "../images/bloodhound-full.png", alt: "Bloodhound" },
	{ src: "../images/catalyst-full.png", alt: "Catalyst" },
	{ src: "../images/caustic-full.png", alt: "Caustic" },
	{ src: "../images/crypto-full.png", alt: "Crypto" },
	{ src: "../images/fuse-full.png", alt: "Fuse" },
	{ src: "../images/gibby-full.png", alt: "Gibby" },
	{ src: "../images/horizon-full.png", alt: "Horizon" },
	{ src: "../images/lifeline-full.png", alt: "Lifeline" },
	{ src: "../images/loba-full.png", alt: "Loba" },
	{ src: "../images/maggie-full.png", alt: "Maggie" },
	{ src: "../images/mirage-full.png", alt: "Mirage" },
	{ src: "../images/newcastle-full.png", alt: "Newcastle" },
	{ src: "../images/octane-full.png", alt: "Octane" },
	{ src: "../images/pathfinder-full.png", alt: "Pathfinder" },
	{ src: "../images/rampart-full.png", alt: "Rampart" },
	{ src: "../images/rev-full.png", alt: "Revenant" },
	{ src: "../images/seer-full.png", alt: "Seer" },
	{ src: "../images/valk-full.png", alt: "Valk" },
	{ src: "../images/vantage-full.png", alt: "Vantage" },
	{ src: "../images/wattson-full.png", alt: "Wattson" },
	{ src: "../images/wraith-full.png", alt: "Wraith" },
];

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
		image.src = legendImages[randomNum].src;
		image.alt = legendImages[randomNum].alt;
		image.className = "legend-image";
		document.body.appendChild(image);
		displayedImages.push(image); // Add the displayed image to the array
	});
}

const button = document.getElementById("button");

button.addEventListener("click", generateLegends);
