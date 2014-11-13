//
//Setting global variables.
//

//currLoc is a global variable that determines the initial location.
var currLoc=0;
//countzero is a global variable created to determine whether the player has never been in room zero.
var countzero  = false;
//countone is a global variable created to determine whether the player has never been in room one.
var countone  = false;
//counttwo is a global variable created to determine whether the player has never been in room two.
var counttwo  = false;
//countthree is a global variable created to determine whether the player has never been in room three.
var countthree  = false;
//countfour is a global variable created to determine whether the player has never been in room four.
var countfour = false;
//countfive is a global variable created to determine whether the player has never been in room five.
var countfive = false;
//countsix is a global variable created to determine whether the player has never been in room six.
var countsix = false;
//countseven is a global variable created to determine whether the player has never been in room seven.
var countseven = false;
//counteight is a global variable created to determine whether the player has never been in room eight.
var counteight = false;
//countnine is a global variable created to determine whether the player has never been in room nine.
var countnine = false;
//score is a global variable representing the score of the player.
var score=0;
//navigationErrorCount is a global variable created to keep track of the amount of "mistakes" that the player commits.
var navigationErrorCount = 0;
//sarcasmThreshold is a global variable created to establish a total amount of "mistakes". When the amount of mistakes is reached, the game will "get sassy".
var sarcasmThreshold = 3;
//itemCount is a global variable created to keep track of the amount of items gathered by the player.
var itemCount=0;

function goNorth() { //Function goNorth() makes the player go North from the current room (when possible).
	if(currLoc === 1){ //If the currentLocation is the room number 1 and the player decided to go 'North', the currentLocation changes in room number 0.
		currLoc = 0;
		look();
	} else {
		if(currLoc ===  3) { //If the currentLocation is the room number 3 and the player clicked on 'North', the currentLocation changes in room number 2.
			currLoc = 2;
			look();
		} else { 
			if(currLoc ===  2) { //If the currentLocation is the room number 2 and the player clicked on 'North', the currentLocation changes in room number 5.
				currLoc = 5;
				look();
			} else { 
				if(currLoc ===  0) { //If the currentLocation is the room number 0 and the player clicked on 'North', the currentLocation changes in room number 7.
					currLoc = 7;
					look();
				} else { 
					if(currLoc ===  9) { //If the currentLocation is the room number 9 and the player clicked on 'North', the currentLocation changes in room number 8.
						currLoc = 8;
						look();
					} else {//If the player decided to go 'North' but there is no room North from the currentLocation, the function navigationError() is called.'
						navigationError();
					}
				}
			}				
		}
	}
}

function goSouth() { //Function goSouth() makes the player go South from the current room (when possible).
	if(currLoc === 0){ //If the currentLocation is the room number 0 and the player decided to go 'South', the currentLocation changes in room number 1.
		currLoc = 1;
		look();
	} else {
		if(currLoc ===  2 && itemCount>=4) { //If the currentLocation is the room number 2 and the player decided to go 'South', the currentLocation changes in room number 3.
			currLoc = 3;
			look();
		} else {
			if(currLoc ===  5) { //If the currentLocation is the room number 5 and the player decided to go 'South', the currentLocation changes in room number 2.
				currLoc = 2;
				look();
			} else { 
				if(currLoc ===  7) { //If the currentLocation is the room number 7 and the player decided to go 'South', the currentLocation changes in room number 0.
					currLoc = 0;
					look();
				} else { 
					if(currLoc ===  8) { //If the currentLocation is the room number 8 and the player decided to go 'South', the currentLocation changes in room number 9.
						currLoc = 9;
						look();
					} else { //If the player decided to go 'South' but there is no room South from the currentLocation, the function navigationError() is called.'
						navigationError();
					}
				}
			}				
		}
	}
}

function goEast() { //Function goEast() makes the player go East from the current room (when possible). The logic of the If/Else statements is the same of goNorth() and goSouth().
	if(currLoc === 1){
		currLoc = 2;
		look();
	} else {
		if(currLoc ===  2) {
			currLoc = 4;
			look();
		} else { 
				if(currLoc ===  6) {
					currLoc = 0;
					look();
				} else { 
					if(currLoc ===  8) {
						currLoc = 1;
						look();
					} else {
						navigationError();
					}
				}
		}
	}
}						


function goWest() { //Function goWest() makes the player go West from the current room (when possible). The logic of the If/Else statements is the same of goNorth() and goSouth().
	if(currLoc === 2){
		currLoc = 1;
		look();
	} else {
		if(currLoc ===  4) {
			currLoc = 2;
			look();
		} else { 
				if(currLoc ===  0) {
					currLoc = 6;
					look();
				} else { 
					if(currLoc === 1) {
						currLoc = 8;
						look();
					} else {
						navigationError();
					}
			   }
		 }
	}
}

function tutorial() { //Function tutorial() displays the message that explains the gameplay to the second text area.
	dispMsgSecond("--Tutorial--\n To move through the Map you can:\n   -Use the buttons.\n   -Type 'n', 's', 'w', or 'e'.\n   -Use the WASD Box to use WASD.\n Go find all the items in order to escape! \n R: To take | SpaceBar: To search\n X: To show the Inventory \n Use the map to help yourself navigate and find a way out.\n --/Tutorial-- \n \n \n");
}
function dispMsg(message) { //Function dispMsg(message) displays the message given as input plus the Score in the Main text area. The assignment says that the name should be updateDisplay but I already had the code from Project two full of dispMsg. This comment is done just to notice the reader of the code that dispMsg() is actually updateDisplay().
	var target = document.getElementById("taMain");
	target.value = message + "\n\n" + target.value;
}

function dispMsgSecond(message) { //Function dispMsgSecond(message) takes in a parameter and it displays the message given as input plus the Score in the Second text area.
	var target = document.getElementById("taSecond");
	target.value = message + "\n\n" + target.value;
}

function navigationError() { //function navigationError() takes no parameter. If the value of navigation errors variable is higher than the value of the variable sarcasmThreshold, the 'game' gets "sassy".
	navigationErrorCount = navigationErrorCount + 1; //Every time the player does a mistake, the amount of navigation errors increases by 1.
	if (navigationErrorCount < sarcasmThreshold) {
		dispMsg("You cannot go that way.");
	} else {
		dispMsg("Are you even trying, noob?");
	}            
}

function btnGo_click() { //function btnGo_click() takes no parameter. It is used to input in the program what the player is typing in the command box.
	var playerinput = document.getElementById("txtCommand").value;
	if ( (playerinput === "n") || (playerinput ==="N") ) {
		goNorth();
	} else {
		if ( (playerinput === "s") || (playerinput ==="S") ) {
		goSouth();
		} else {
			if ( (playerinput === "w") || (playerinput ==="W") ) {
				goWest();
			} else {
				if ( (playerinput === "e") || (playerinput ==="E") ) {
					goEast();
				} else {
					dispMsg("Invalid input. Try n - s - w - e");
				}
			}	
		}		 
	}
}

function txtCommand_keyPress(keyboardEvent){ //function txtCommand_keyPress(keyboardEvent) takes a parameter as input. Depending on the number associated to the key pressed it will refer it to a function. It is a sort of KeyBinding present in many games. It takes in consideration both capital and lower case letters.
	if(keyboardEvent.which === 13) {//ENTER key
		btnGo_click();
	}
	if(currLoc != 3 && keyboardEvent.which === 119 || keyboardEvent.which === 87) {//(W) North key	
		goNorth();
	}
	if(currLoc != 3 && keyboardEvent.which === 115 || keyboardEvent.which === 83) {//(S) South key
		goSouth();
	}
	if(currLoc != 3 && keyboardEvent.which === 97 || keyboardEvent.which === 65) {//(A) West key
		goWest();
	}
	if(currLoc != 3 && keyboardEvent.which === 100 || keyboardEvent.which === 68) {//(D) East key
		goEast();
	}
	if(keyboardEvent.which === 32) {//Space key
		search();
	}
	if(keyboardEvent.which === 114 || keyboardEvent.which === 82) {//Take key
		take();
	}
	if(keyboardEvent.which === 120 || keyboardEvent.which === 88) {//Inventory key
		inventory();
	}
}
function checkScore() { //Function checkScore() takes no parameter. It checks if the player has ever been in a room before. If he/she has not, the function adds 5 points to the score.
 if ( (! countzero) && (currLoc === 0) ) {            
	  score = score + 5;
	  countzero = true;
	  this.contents=" Knife ";
} else if ( (! countone) && (currLoc === 1) ) {            
	  score = score + 5;
	  countone = true;
	  this.contents = " Pieces of Mirror ";
} else if ( (! counttwo) && (currLoc === 2) ) {            
	  score = score + 5;
	  counttwo = true;
	  this.contents = " Remote Controller ";
} else if ( (! countthree) && (currLoc === 3) ) {            
	  score = score + 5;
	  countthree = true;
	  this.contents = " Bonus: 5 Points!";
} else if ( (! countfour) && (currLoc === 4) ) {            
	  score = score + 5;
	  countfour = true;
} else if ( (! countfive) && (currLoc === 5) ) {            
	  score = score + 5;
	  countfive = true;
} else if ( (! countsix) && (currLoc === 6) ) {            
	  score = score + 5;
	  countsix = true;
} else if ( (! countseven) && (currLoc === 7) ) {            
	  score = score + 5;
	  countseven = true;
	  this.contents = " Hammer ";
} else if ( (! counteight) && (currLoc === 8) ) {            
	  score = score + 5;
	  counteight = true;
} else if ( (! countnine) && (currLoc === 9) ) {            
	  score = score + 5;
	  countnine = true;
}}         
function init(){ //init() function takes no parameter. It is the initial function that starts to work as soon as the page is opened, thanks to onload in the body tag in the HTML part of the program.
	kitchen();
}

function search(){
	dispMsg("Searched: " + this.contents);
}

var bag="";
function take() {// take() function takes no parameter. It is used to pick up the item in the room the player is in. It adds the item to the bag (inventory).
	if (this.contents!="The room is empty." && this.contents!="No items."){
		bag = bag + this.contents + "\n";
		itemCount+=1;
	    dispMsg("Taken: " + this.contents);
	} else {
		dispMsg("There is nothing to take.");
	}
	if (currLoc===3){
		score += 5;
	}
	return this.contents="The room is empty.";	
}

function inventory(){ //inventory() takes no parameter. It displays bag (the actual inventory) in the second textarea.
	if (bag===""){
		dispMsgSecond("There are no items in your Inventory.");
	} else{
	dispMsgSecond("Inventory: \n" + bag);
	}
}

function look() {// function look() takes no parameter. It is done with the switch-case method which makes the code shorter. Depending on the value of currLoc, there are different cases that trigger.
document.getElementById("North").disabled = false;
document.getElementById("South").disabled = false;
document.getElementById("West").disabled = false;
document.getElementById("East").disabled = false;
switch(currLoc) {//Disables the buttons that are unavailable because there are no rooms towards that direction
   case 0: kitchen(); //At the beginning of the game I decided to not block the buttons so that the function navigationError() can trigger and it is not useless.
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map0.jpg";
		   break;
   case 1: bathroom();
		   document.getElementById("South").disabled = true;
		   document.getElementById("map").src = "map1.jpg";
		   break; 
   case 2: livroom();
		   document.getElementById("map").src = "map2.jpg";
		   break;
   case 3: outside();
		   document.getElementById("North").disabled = true;
		   document.getElementById("South").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map3.jpg";
		   break;
   case 4: bedroom();
		   document.getElementById("North").disabled = true;
		   document.getElementById("South").disabled = true;
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map4.jpg";
		   break;
   case 5: closet();
		   document.getElementById("North").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map5.jpg";
		   break;
   case 6: balcony();
		   document.getElementById("North").disabled = true;
		   document.getElementById("South").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("map").src = "map6.jpg";
		   break;
   case 7: garage();
		   document.getElementById("North").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map7.jpg";
		   break;
   case 8: workshop();
	       document.getElementById("North").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("map").src = "map8.jpg";
		   break;
   case 9: garden();
	       document.getElementById("South").disabled = true;
		   document.getElementById("West").disabled = true;
		   document.getElementById("East").disabled = true;
		   document.getElementById("map").src = "map9.jpg";
		   break;
   default: desc = "You cannot go that way";
}
checkScore();
var desc ="Score: " + score + "\n";
dispMsg(desc);
}