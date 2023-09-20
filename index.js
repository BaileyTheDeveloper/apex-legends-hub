// Get current map data

async function getMapData() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const mapData = await response.json();
		return mapData.current.map;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

async function updateMapData() {
	try {
		const mapData = await getMapData();
		const para = document.createElement("p");
		const node = document.createTextNode(mapData);
		para.appendChild(node);
		const element = document.getElementById("current-map");
		element.appendChild(para);

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
