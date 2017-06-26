var x = 1;
var y = 9;
var z = x+y;
console.log(x);

console.log(z);

//name variables anything
var age = 22;
var spaghetti = 1000;


var numberOfBooksIHaveWritten = 0;
var myBirthYear = 1994;
var newNumber = (z * numberOfBooksIHaveWritten * z);


//shorthand operators

//age+=1;
//same as age = age+1
//console.log(age);

//age -=2;
//same as age = age-2
//console.log(age);

spaghetti%=100;
//same as spaghetti = spaghetti%100
console.log(spaghetti);


//using the var for a value interchangeable
var ageInNovember = age+1;
console.log(ageInNovember);


var eleven=9;
console.log(eleven * eleven);





console.log("\n");

var overwatchSR = 2300;
var age = 22;
var heightInInches = 60;
var numPizzaSlices = 3;
var froyoOunces = 14;

console.log(overwatchSR);
console.log(age);
console.log(heightInInches);
console.log(numPizzaSlices);
console.log(froyoOunces);


console.log("\n");

var myNumber = 0;
console.log(myNumber);
myNumber+=10;
console.log(myNumber);
myNumber-=1;
console.log(myNumber);
myNumber*=9;
console.log(myNumber);
myNumber/=7;
console.log(myNumber);


console.log("\n");

var maxAge = 100;
var sushiPerDayEstimate = 20;

var yearsLeft = maxAge - age;
var days = yearsLeft * 365;

var totalSushi = days * sushiPerDayEstimate;

console.log("If you want eat 20 pieces of sushi per day until the age of 100, you will need "+totalSushi+" pieces.")