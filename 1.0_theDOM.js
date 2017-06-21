//can also write javascript into an html doc directly
//<script>console.log.....etc</script>
//this can be anywhere, even outside the html tags. good practice it to put it near the bottn
			
//--------------------------------------------------------
//DOM Access Methods
//web pages build the DOM from HTML; js can examine and alter the DOM

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);
     
//JavaScript and use Chrome Dev Tools to see the console.log


//ByID
var hobbiesList = document.getElementById('hobby-list');
console.log(hobbiesList);

//ByTagName
var hobbies = document.getElementsByTagName('li');
console.log(hobbies); //returns collection of elements in an array
console.log(hobbies[0].innerHTML); //value of the first li

//ByClassName
var alsoHobbies = document.getElementsByClassName('hobby');
console.log(alsoHobbies);

//By CSS Query
var firstHobby = document.querySelector("ul li.hobby"); //first goes into ul, then picks out the first li with class "hobby"
console.log(firstHobby);

var allHobbies = document.querySelectorAll("ul li.hobby"); //first goes into ul, then picks out the ALL li with class "hobby"
console.log(allHobbies);


//rendering to HTML
//Each DOM node has an innerHTML attribute
//you can set innerHTML yourself to replace the contents of a node

function favoriteSong(){
	document.getElementById("favorite").innerHTML = "Real Estate"; //then have to run function
}
function worstMusic(){
	document.getElementById("worst").innerHTML = "Katy Perry"; //then have to run function
}
function bestMusic(){
	document.getElementById("best").innerHTML = "Synth"; //then have to run function
}

favoriteSong();
worstMusic();
bestMusic();


function addSong(){
	document.getElementById("best").innerHTML += " and FATM";
}

addSong();



//--------------------------------------------------------
//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream



function addButton(){
	var btn = document.createElement("BUTTON"); //creates a <button> element
	var text = document.createTextNode("I JUST GOT ADDED"); //creates a text node
	btn.appendChild(text);
	document.body.appendChild(btn);
}


function removeList(){
	var list = document.getElementById("music");
	document.body.removeChild(list);
}


// function waterToWine(){
// 	var textnode = document.createTextNode("Wine!!");
// 	var item = document.getElementById("myList").childNode[0];
// 	item.replaceChild(textnode, item.childNode[0]);
// } 
//this has likely been deprecated


function writeWords(){
	document.write("Josie added me!!");
}