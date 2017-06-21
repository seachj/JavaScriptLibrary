var tired = true;
var awake = true;
var hungry = true;
var sad = true;
var chipper = false;

console.log(chipper);

//comparisons
// ==    equality
// ===   strict equality
// !=    inequality
// !==   strict inequality
// >
// <
// <=
// >=
console.log("\n")

console.log(2>1);
console.log(1>2);

console.log("\n")

var test = 2>=3;
console.log(test);

console.log("\n")

//can mix strings and booleans
console.log("Two is greater than one? " +(2>1));



//when checking for equality in JavaScript, always use === over ==
2=="2"; //true, because both are 2 or two
2==="2"; //false, because one is an integer and the other is a string
2===2; //true, because both are integers with the same value

//inequality
"Joey" !== "Tif" //true
10!==10 //false



//logical operators
// Operator     Meaning      True expression (how to return a value of "true")
// &&           and          4 > 0 && -2 < 0; both sides must be true
// ||           or           4 > 0 || -2 > 0; only one side must be true
// !            not          !(5<0); insert false expression

console.log("&& operator:", 2===2 && 1===1);
console.log("|| operator:", 2===2 || 2===1);
console.log("!= operator:", 2!=1);





/////CHALLENGES//////

//BRONZE//
console.log("\n");

var hasGlasses = true;
var isTall = false;
var likesPasta = true;

//SILVER//
console.log("\n");

var canPlayPiano = false;
var likesPizza = true;
var lovesGuineaPigs = true;

console.log("I can play piano:",canPlayPiano)
console.log("I like pizza:",likesPizza)
console.log("I love guinea pigs:",lovesGuineaPigs)

//GOLD//
console.log("\n");

console.log(canPlayPiano && likesPizza);
console.log(canPlayPiano || lovesGuineaPigs); 