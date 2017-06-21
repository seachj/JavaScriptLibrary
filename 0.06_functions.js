function hello(){
	console.log("Hello world")
}//definition

hello();//execution

function printOneNumber(){
	console.log(1);
}

printOneNumber();

function divider(){
	console.log("---------------");
}

divider();

//scope with variables
//like a rifle scope: variables can be redifined in a function without affecting the original value in the rest of the program
var x = 8;
function add(){
	var x = 2;
	var y = 7;
	console.log(x+y);
}
add();

function subtract(){
	var x =4;
	var y =1;
	console.log(x-y);
}
divider();
add();
subtract();

divider();

//parameters/arguments
	//parameters: what the names in the function definition
	//arguments: what is passed to the function

function numberEntered(x){//x is parameter
	console.log("Number entered:",x);
}

numberEntered(7);//7 is argument


function addTwoNums(x, y){
	console.log(x+y);
}

addTwoNums(4,7);

divider();
//return keyword

function mood(){
	return "I'm feeling great";
}

console.log(mood());
x=2;
y=3;
function multiply (x,y){
	return x*y;
}
console.log(multiply(x,y));

divider();
function printName(firstName, lastName){
	return firstName+" "+lastName;
}
console.log(printName("Josie","Seach"));