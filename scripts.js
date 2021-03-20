window.addEventListener("load", function(){
	console.log("window loaded");
    const statusFlight = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const takingOff = document.getElementById("takeoff");
	const land = document.getElementById("landing");
	const abortMission = document.getElementById("missionAbort");
	const background = document.getElementById("shuttleBackground");
	const rocketPos = document.getElementById("rocket");

	takingOff.addEventListener("click", function()
	{
		confirmation=window.confirm("Confirm that the shuttle is ready for takeoff.");
			if (confirmation == true)
			 {
				statusFlight.innerHTML = "Shuttle in flight"; 
				background.style.background = "blue";
				shuttleHeight.innerHTML = 10000;
		 }
		else
		{
			statusFlight.innerHTML = "Space shuttle ready for takeoff";
			background.style.background = "green";
			shuttleHeight.innerHTML = 0; 
		}
	});


	land.addEventListener("click", function()
 	{
		let alert = window.alert("The shuttle is landing. Landing gear engaged.");
		statusFlight.innerHTML = "The shuttle has landed."; 
		background.style.background = "green";
		shuttleHeight.innerHTML = 0;
	});

abortMission.addEventListener("click", function()
 	{
		let confirmation = window.confirm("Confirm that you want to abort the mission.");
		if (confirmation == true)
		{
			statusFlight.innerHTML = "Mission aborted."; 
			background.style.background = "red";
			shuttleHeight.innerHTML = 0;
		}
		else
		{
			paragraph.innerHTML = "Shuttle in flight"; 
			background.style.background = "green";
			shuttleHeight.innerHTML = 0;
		}
	});
});