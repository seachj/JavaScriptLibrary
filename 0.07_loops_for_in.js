//--------------------------------------------------------
//--------------------------------------------------------
// -------------- Lesson: For/In Loops  ------------------
//--------------------------------------------------------
//--------------------------------------------------------

//Using objects here in anticipation of the upcoming object lesson.
//Can give this one as a quick lesson and state that we'll be looking
//at ALOT more of these later on.


//The object.
var groceryItem = {
	product : "M & Ms",
	quantity : 1,
	price : .99 
};


//Here's how I can go through the items.

		//create a variable - field
		//loop the object(s) - groceryItem
for (var field in groceryItem) {
	console.log(field + " : " + groceryItem[field]);
}


//Another example of an object.
var videoGame = {
	game : "COD",
	quantity : 1,
	price : 59.99
}

//A loop
for (var x in videoGame) {
	console.log(field + " : " + videoGame[x]);
}