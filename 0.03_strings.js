//string: a group of characters
//must go in quotes

console.log("Sup");

var stringVar = "Sup bro";
console.log(stringVar);

//can use single quotes instead of double quotes
var username = 'fleurmage';
console.log(username);

//can also include numbers and other characters like "!""

//string operators
var birthCity = "Indianapolis";
var birthState = "Indiana";
console.log(birthCity+", " +birthState);

//mixing strings and integers
var ageInNovember = 23;
var highSchool = "Franklin Central HS";
var graduatedHS = 2013;

console.log(highSchool+ ", " + graduatedHS);
console.log("My age in November:",ageInNovember);

//use single quotes on outside, double quotes on inside for strings with "quotes" like this; vice versa for if you need visible single quotes
console.log('Age in "november"');
//or use a backslash
console.log("age in \"november\"");


console.log("I graduated from "+highSchool+" in "+graduatedHS+".");

//string methods (functions)
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" ")); //stores split components in an array
console.log(highSchool.slice(3)); //removes first letters before index in function (strings start at index 0); for example, the n is index 3 in my variable





console.log("\n");

console.log("I graduated from "+highSchool+" in "+graduatedHS+".");


console.log("\n");

var carYear = 2009;
var carMake = "Chevy";
var carModel = "Cobalt";

var carString = carYear+" "+carMake+" "+carModel;

console.log("I drive a",carString);


console.log("\n");

var lowerCaseString = "sup dude"
console.log(lowerCaseString);
console.log(lowerCaseString.toUpperCase());