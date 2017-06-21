var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true){
	console.log("Going up");
}else{
	console.log("Not going up");
}

if (elevatorBroken===true){
	console.log("Let's take the stairs");
}else{
	console.log("Which floor?");
}


//combining variable types for conditionals
if (elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is not our lucky day.");
}else{
	console.log("That could have been trouble");
}