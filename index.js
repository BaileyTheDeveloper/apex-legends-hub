// Get current map data

async function getMapData() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const mapData = await response.json();
		console.log(mapData);
		return mapData.current.map;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

async function getNextMapData() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const nextMapData = await response.json();
		console.log(nextMapData);
		return nextMapData.next.map;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

async function updateMapData() {
	try {
		const mapData = await getMapData();
		const para = document.createElement("h1");
		const node = document.createTextNode(mapData);
		para.appendChild(node);
		const element = document.getElementById("current-map");
		const headerElement = document.getElementById("current-map-header");
		headerElement.appendChild(para);

		// add image based on current map
		if (mapData === "Kings Canyon") {
			const image = document.createElement("img");
			image.src = "images/kings-canyon.jpg"; // Replace with the actual image URL
			image.alt = "Kings Canyon";
			element.appendChild(image);
		} else if (mapData === "World's Edge") {
			const image = document.createElement("img");
			image.src = "images/worlds-edge.jpg"; // Replace with the actual image URL
			image.alt = "World's Edge";
			element.appendChild(image);
		} else if (mapData === "Olympus") {
			const image = document.createElement("img");
			image.src = "images/olympus.png"; // Replace with the actual image URL
			image.alt = "Olympus";
			element.appendChild(image);
		} else if (mapData === "Broken Moon") {
			const image = document.createElement("img");
			image.src = "images/broken-moon.jpg"; // Replace with the actual image URL
			image.alt = "Broken Moon";
			element.appendChild(image);
		}
	} catch (error) {
		// Handle the error
		console.error("Error updating map data:", error);
	}
}

// Call updateMapData to fetch and update the map data in the DOM
updateMapData();

async function updateNextMapData() {
	try {
		const nextMapData = await getNextMapData();
		const para = document.createElement("h1");
		const node = document.createTextNode(nextMapData);
		para.appendChild(node);
		const element = document.getElementById("next-map");
		const nextHeaderElement = document.getElementById("next-map-header");
		nextHeaderElement.appendChild(para);

		// add image based on current map
		if (nextMapData === "Kings Canyon") {
			const image = document.createElement("img");
			image.src = "images/kings-canyon.jpg"; // Replace with the actual image URL
			image.alt = "Kings Canyon";
			element.appendChild(image);
		} else if (nextMapData === "World's Edge") {
			const image = document.createElement("img");
			image.src = "images/worlds-edge.jpg"; // Replace with the actual image URL
			image.alt = "World's Edge";
			element.appendChild(image);
		} else if (nextMapData === "Olympus") {
			const image = document.createElement("img");
			image.src = "images/olympus.png"; // Replace with the actual image URL
			image.alt = "Olympus";
			element.appendChild(image);
		} else if (nextMapData === "Broken Moon") {
			const image = document.createElement("img");
			image.src = "images/broken-moon.jpg"; // Replace with the actual image URL
			image.alt = "Broken Moon";
			element.appendChild(image);
		}
	} catch (error) {
		// Handle the error
		console.error("Error updating map data:", error);
	}
}

updateNextMapData();

// hamburger menu
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-mobile");
const apex_logo = document.querySelector(".apex-icon");

menu_btn.addEventListener("click", () => {
	menu_btn.classList.toggle("is-active");
	mobile_menu.classList.toggle("is-active");
	apex_logo.classList.toggle("is-active");
});
