

//an object
var groceryItem = {
	product : "M & Ms",
	quantity : 1,
	price : .99 
};


//Here's how you can go through the items.

		//create a variable - field
		//loop the object(s) - groceryItem
for (var field in groceryItem) {
	console.log(field + " : " + groceryItem[field]);
}


//Another example of an object.
var videoGame = {
	game : "Overwatch",
	quantity : 1,
	price : 59.99
}
//A loop
for (var x in videoGame) {
	console.log(field + " : " + videoGame[x]);
}