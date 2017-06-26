//Switch statements are very similar to if statements. The value is evaluated once then compared with cases; if a matching case is found, code is executed

var pagesRequired = 10;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result="You've got a lot more to write.";
		break;
	case 7:
		result = "Making progress.";
		break;
	case 10:
		result = "You've finished your essay!";
		break;
	default:
		result = "I don't know";
}

console.log("Switch result:",result);