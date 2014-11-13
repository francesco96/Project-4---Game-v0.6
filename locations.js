//
//single event handler for each location
//

function kitchen() { //function kitchen() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message). Var message is the description of the room. It contains an item whose name is assigned to this.contents.
var message = "(0) You find yourself in a dark kitchen. Soft light is coming through the window. It is the moonlight. You are still tired and it is hard to see around you. There is a table with what seems to be dirty dishes and a knife on them. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function bathroom() { //function bathroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message). Var message is the description of the room. It contains an item whose name is assigned to this.contents.
var message = "(1) You enter a dark bathroom. The pavement is extremely wet and slippery. There is a broken mirror on the side. Pieces of the broken mirrors are spread throughout the ground. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function livroom() { //function livroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(2)You enter a dark room. It is the living room. There is a dusty couch and a broken remote controller on the ground. A huge red carpet is placed in front of you. \n \n \n";
this.contents = "No items.";
dispMsg(message);     
}

function outside() { //function garden() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(3) You find yourself in the garden. You are outside! Fresh air fills your lungs, freedom is finally reality. Now run!\nGAME OVER. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function bedroom() { //function bedroom() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(4) You enter the bedroom. There are a few pillows on the bed. A long curtain make this room so dark... \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function closet() { //function closet() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(5) You enter an extremely dark closet. There is a broom and a lot of dust. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function balcony() { //function balcony() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(6) As soon as you close the door, you find yourself on a balcony. Fresh air and many trees surround you. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function garage() { //function garage() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(7) You enter an extremely dark garage. There is oil on the ground and a hammer on the side. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function workshop() { //function workshop() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(8) You enter a dark workshop, the switch for the light is on your right. Do you want to switch the lights on? Yes / No \n \n \n";
this.contents = "No items.";
dispMsg(message);
}

function garden() { //function garden() takes no parameter. It creates a local variable 'message' and it displays it in the textarea using the function dispMsg(message).
var message = "(9) You close the door behind you and you find yourself in a garden. Fence completely surrounds you. \n \n \n";
this.contents = "No items.";
dispMsg(message);
}