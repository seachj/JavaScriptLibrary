//data type that stores a collection of properties and functions


var emptyObject = {};


var johnQualls = {
	//properties
	name : "John Qualls",
	age: 49,
	vocation: "President of Eleven Fifty Academy",
	isRetired:false,

	//methods (functions)
	//for operations you want to perform often with this object
	greeting : function(){
		console.log("Hello, I am"+this.name+". I am "+this.vocation+".")
	},
	ageOf : function(){ //had to give different name than the property; using the same name for method caused confusion for compiler
		console.log("Hello, I am"+this.name+". I am "+this.age+".")
	},
	extendGreeting : function(){
		this.greeting();
		this.ageOf();
	},
};

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
//console.log(johnQualls.middleName); //when attempting to access an undefined property, output is "undefined"
console.log("-------------------------------------");
johnQualls.greeting();
johnQualls.ageOf();
console.log("----------------");
johnQualls.extendGreeting();


console.log("-------------------------------------");
console.log("-------------------------------------");


var animal = {
	type : "bear",
	habitat: "woods",
	weight: 500,
	commonInIndiana : false
};

console.log(animal.weight);
console.log(animal["weight"]);

animal.weight=600; //reassigns valued
console.log(animal.weight);
console.log(animal.weight+50); //operation; does not reassign value
console.log(animal.weight);

console.log("----------------");

console.log(animal.favoriteFood);
animal.favoriteFood="fish";
console.log(animal.favoriteFood); //can add properties after first definition of object

//can delete properties
delete animal.favoriteFood;
console.log(animal.favoriteFood);

//properties of an object can be more than just string, bool, and numbers
//can include arrays and other objects

animal.moviesAboutMe = ["Lion King", "Happy Feet", "Marley and Me"];
console.log(animal.moviesAboutMe);
console.log(animal.moviesAboutMe[1]);

//all objects have a "keys" function which prints all property names in object
console.log(Object.keys(animal));

console.log("-------------------------------------");
console.log("-------------------------------------");

var friend = {
	name : "Whitney",
	hair : "curly",
	major: "public health",
	isTall : true
};

var movie = {
	title : "Battle Royale",
	genre : "sci-fi/drama",
	isGood : true
};

var recipe = {
	dishName : "Pad Thai",
	mainIngredient : "rice noodles",
	isYummy : "true"
};

console.log(friend);
console.log("-------------------------------------");
console.log(movie);
console.log("-------------------------------------");
console.log(recipe);


console.log("-------------------------------------");
console.log("-------------------------------------");


//inheritance

//longhand
var car = {
	make: "",
	model: "",
	year: 0,

	constructor : function(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	},
};

var myCar = Object.create(car); //creates a myCar object using the car object as a frame
console.log(myCar);
myCar.constructor("Chevy", "Cobalt", 2009);
console.log(myCar);
console.log(myCar.year);

console.log("----------------");
//shorthand

var book = {
	title: "",
	yearPublished: 0,
	numPages: 0,
	constructor: function(title, yearPublished, numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	},
};

var myFaveBook = new book.constructor("The Handmaid's Tale", 1985, 325);
console.log(myFaveBook);
console.log(myFaveBook.title);

console.log("----------------");
//shortERhand version
//technically, functions are also objects

function computer(screenSize, hardDriveSize, hasNumPad){ //this initializes object, properties, and constructor all at once
	//we never techinally defined these properties
	//or the object
	//but javascript can deal with this
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC = new computer (17.5, "2TB", true);
console.log(myPC);
console.log(myPC.screenSize);

console.log("----------------");

//objects are references
//var car
//*****************************object****************
//								car^


var pcOne = new computer (12, "500GB", false);
var pcTwo = new computer (14, "2TB", true);
var pcThree = pcTwo; //points to the same place in memory as pcTWo

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize=15; //this alters both pcTwo and pcThree which is equal to pcTwo
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//objects are not copied
//objects can be referenced, variables cannot
//a=5
//a=b
//a=7; b still = 5
//with variables, a new memory block is created. objects simply point to an existing memory block where all the properties are stored