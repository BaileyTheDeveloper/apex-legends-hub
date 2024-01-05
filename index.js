// Get current map data

async function getMapData() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const map = await response.json();
		const mapData = map.current.map;

		// 1. Parse the UTC date string
		const date = new Date(map.current.end * 1000);

		// 2. Get the user's local timezone using 'userTZ'
		const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

		// 3. Convert the Unix timestamp to the user's local timezone
		const localDate = date.toLocaleString("en-US", {
			timeZone: userTZ,
			hour: "numeric",
			minute: "numeric",
		});
		console.log("Local Date:", localDate);

		const until = `Until ${localDate}`;

		console.log(mapData);
		const para = document.createElement("h1");
		const paraUntil = document.createElement("h1");
		const node = document.createTextNode(mapData);
		const nodeTwo = document.createTextNode(until);
		paraUntil.appendChild(nodeTwo);
		para.appendChild(node);
		const element = document.getElementById("current-map");
		const headerElement = document.getElementById("current-map-header");
		const untilElement = document.getElementById("current-map-header");
		headerElement.appendChild(para);
		untilElement.appendChild(paraUntil);

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
		} else if (mapData === "Storm Point") {
			const image = document.createElement("img");
			image.src = "images/stormpoint.png"; // Replace with the actual image URL
			image.alt = "Storm Point";
			element.appendChild(image);
		}
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}
getMapData();
async function getNextMapData() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const nextMap = await response.json();
		const nextMapData = nextMap.next.map;
		console.log(nextMapData);
		// 1. Parse the UTC date string
		const date = new Date(nextMap.next.end * 1000);
		// 2. Get the user's local timezone using 'userTZ'
		const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

		// 3. Convert the Unix timestamp to the user's local timezone
		const localDate = date.toLocaleString("en-US", {
			timeZone: userTZ,
			hour: "numeric",
			minute: "numeric",
		});
		console.log("Local Date:", localDate);

		const nextUntil = `Until ${localDate}`;

		const para = document.createElement("h1");
		const paraNextUntil = document.createElement("h1");
		const node = document.createTextNode(nextMapData);
		const nodeNext = document.createTextNode(nextUntil);
		paraNextUntil.appendChild(nodeNext);
		para.appendChild(node);
		const element = document.getElementById("next-map");
		const nextHeaderElement = document.getElementById("next-map-header");
		const untilNextElement = document.getElementById("next-map-header");
		nextHeaderElement.appendChild(para);
		untilNextElement.appendChild(paraNextUntil);

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
		} else if (nextMapData === "Storm Point") {
			const image = document.createElement("img");
			image.src = "images/stormpoint.png"; // Replace with the actual image URL
			image.alt = "Storm Point";
			element.appendChild(image);
		}
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

async function updateNextMapData() {
	try {
		// const nextMapData = await getNextMapData();
		// const para = document.createElement("h1");
		// const node = document.createTextNode(nextMapData);
		// para.appendChild(node);
		// const element = document.getElementById("next-map");
		// const nextHeaderElement = document.getElementById("next-map-header");
		// nextHeaderElement.appendChild(para);
		// // add image based on current map
		// if (nextMapData === "Kings Canyon") {
		// 	const image = document.createElement("img");
		// 	image.src = "images/kings-canyon.jpg"; // Replace with the actual image URL
		// 	image.alt = "Kings Canyon";
		// 	element.appendChild(image);
		// } else if (nextMapData === "World's Edge") {
		// 	const image = document.createElement("img");
		// 	image.src = "images/worlds-edge.jpg"; // Replace with the actual image URL
		// 	image.alt = "World's Edge";
		// 	element.appendChild(image);
		// } else if (nextMapData === "Olympus") {
		// 	const image = document.createElement("img");
		// 	image.src = "images/olympus.png"; // Replace with the actual image URL
		// 	image.alt = "Olympus";
		// 	element.appendChild(image);
		// } else if (nextMapData === "Broken Moon") {
		// 	const image = document.createElement("img");
		// 	image.src = "images/broken-moon.jpg"; // Replace with the actual image URL
		// 	image.alt = "Broken Moon";
		// 	element.appendChild(image);
		// }
	} catch (error) {
		// Handle the error
		console.error("Error updating map data:", error);
	}
}

getNextMapData();

// hamburger menu
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-mobile");
const apex_logo = document.querySelector(".apex-icon");

menu_btn.addEventListener("click", () => {
	menu_btn.classList.toggle("is-active");
	mobile_menu.classList.toggle("is-active");
	apex_logo.classList.toggle("is-active");
});
