//Switch statements are very similar to if statements. The value is evaluated once then compared with cases; if a matching case is found, code is executed

var marginOfSuperBowlWin = 17;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result="That will be a good game";
		break;
	case 7:
		result = "I like it, pretty close game";
		break;
	case 17:
		result = "Not even close.";
		break;
	default:
		result = "I don't know";
}

console.log("Switch result:",result);