async function getChangeTime() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const changeTime = await response.json();
		console.log(changeTime);

		const endTime = await changeTime.current.readableDate_end;
		console.log(endTime);

		const endTimeUTC = new Date(endTime);
		const localEndTime = endTimeUTC.toLocaleTimeString();
		console.log(localEndTime);
		return localEndTime;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

function updateEndTime(getChangeTime) {
	const endTimeFinal = getChangeTime;
	const node = document.createTextNode(endTimeFinal);
	const header = document.getElementById("current-map-header");
	header.appendChild(para);
	para.appendChild(node);
}

getChangeTime();
updateEndTime(getChangeTime);

export default timeRemaining.js;
