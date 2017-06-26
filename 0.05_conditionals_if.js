var isWindy = true;
var isHot = true;

if (isWindy){
	console.log("It's windy out.");
}

if(isWindy === true){
	console.log("It's still windy out.");
}

if(isWindy&&isHot){
	console.log("It's both windy and hot out.")
}

if(isWindy||isHot){
	console.log("It's either windy or hot.");
}

if(!isWindy){
	console.log("It's not windy out.");
}