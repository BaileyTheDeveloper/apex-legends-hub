async function getChangeTime() {
	try {
		const response = await fetch(
			"https://api.mozambiquehe.re/maprotation?auth=787df377d2fa92a441b177f52b27f235"
		);
		const changeTime = await response.json();
		console.log(changeTime);
		console.log(changeTime.current.readableDate_end);
		return changeTime.current.readableDate_end;
	} catch (error) {
		console.log("Error fetching map data:", error);
		throw error;
	}
}

function countdown() {
	let now = new Date().toJSON().slice(11, 19);
	console.log(now);
}

getChangeTime();
countdown();

// separate date and time and then put together
// see if end date is === now date
// if yes, find difference
// if no find difference between now and midnight +
// difference between midnight and end date
