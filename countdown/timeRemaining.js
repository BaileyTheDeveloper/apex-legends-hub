async function getChangeTime() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const changeTime = await response.json();
		const endTime = changeTime.current.readableDate_end;
		const endTimeFinal = endTime.slice(10, 16);
		console.log(endTimeFinal);
		return endTimeFinal;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

async function updateEndTime(getChangeTime) {
	try {
		const currentMap = document.querySelector("#current-map-header");
		const parag = document.createElement("p");
		parag.textContent = await getChangeTime();
		currentMap.appendChild(parag);
	} catch (error) {
		console.log("Error fetching time data:", error);
		throw error;
	}
}

// Wait for 2.5 seconds before calling the functions
setTimeout(async () => {
	await getChangeTime();
	await updateEndTime(getChangeTime);
}, 1050);

export default updateEndTime;
