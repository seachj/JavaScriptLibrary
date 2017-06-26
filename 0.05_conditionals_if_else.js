var raining = true;
var notRaining = true;
var storming = true;
var stormingWhileOut = true;
var rainInches = 13;

if (raining === true){
	console.log("Let's take an umbrella.");
}else{
	console.log("No need for an umbrella.");
}

if (storming===true){
	console.log("Let's not go out.");
}else{
	console.log("Where should we go?");
}


//combining variable types for conditionals
if (stormingWhileOut && rainInches === 13){
	console.log("Today is not our lucky day.");
}else{
	console.log("That could have been trouble");
}