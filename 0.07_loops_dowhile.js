//--------------------------------------------------------
//--------------------------------------------------------
// -------------- Lesson: Do/While Loops------------------
//--------------------------------------------------------
//--------------------------------------------------------

//KEY POINT: DO WHILE Loops goes one time through no matter what.
//This means it will go through the code once, then repeat as long as the
//condition is met. 


var x = 0;
var y = 0;

do {
	y++;
	console.log("do example 1: " + y);
 } while(y < x);



// DO WHILE Loops are rare in the wild, but you should recognize them.

//--------------------------------------------------------
// You create one. 

var doNum1 = 10;
var doNum2 = 200;

do {
	console.log("do example 2:" + doNum1);
	doNum1++;
} while(doNum1 < doNum2);
