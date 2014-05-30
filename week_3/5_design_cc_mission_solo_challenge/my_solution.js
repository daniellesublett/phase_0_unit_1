// This is a solo challenge

// Your mission description:
// Rescue 3 of your men that have been tempoarily blinded! 
// Lead the to freedom through the prison maze by telling them 
// which way to turn. If you see an enemy, call out to your men 
// to warn them so they will be ready to run. 
// Don't forget to let them know when they have reached safety!
// 
// 

// Pseudocode
//
// Make "hero" object 
// add move methods to hero object
// add say method to hero object that gets user input
//
// Make "blindMen" object
// "blindMen" listen for instructions from hero
// look for the words [right, left, up, down, run, safe]
// if hero does not say which way to go
// "blindMen" stay still AND DIE.
// 
// To win the level:
// go right 2x
// tell men each time you go right
// warn men
// go up 2x
// tell men each time you go up
// warn men
// turn right
// tell the men they are safe

// Initial Code

  var prompt = function(){
  	console.log("Your men have been temporarily blinded! Lead them through the prison maze to safety.")
  }

  var say = function(gets){
     console.log(gets);
 };
 
 
 var hero ;{
    this.moveRight: moveRight,
	this.moveLeft: moveLeft,
	this.moveUp: moveUp,
	this.moveDown: moveDown,
	this.say: say
 };

var blindMen = function(say){
	this.moveRight = moveRight;
	this.moveLeft = moveLeft;
	this.moveUp = moveUp;
	this.moveDown = moveDown;
	this.run = run;
	if (this.say == "Go right men!") {
		moveRight;
	} 
	else if (this.say == "Go left men!") {
		moveLeft;
	}
	else if (this.say == "Go straight!") {
		moveUp;
	}
	else if (this.say == "Go back!") {
		moveDown;
	}
	else if (this.say == "Look out!") {
		run;
	}
	else if (this.say == "Phew, we're out of the maze!")    {
		console.log("yay!");
	}
	else {
		console.log("Your soldiers have died!");
	}
};

// "this" controls hero. blindMen follow hero's instructions.

var plan =  {
	this.moveRight();
	this.say("Go right men!");
	this.moveRight("Go right men!");
	this.say("Look out!");
	this.moveUp;
	this.say("Go straight!");
	this.moveUp;
	this.say("Go straight!");
	this.say("Look out!");
	this.moveRight();
    this.say("Go right men!");
    this.say("Phew, we're out of the maze!");
    };

plan();


// Refactored Code

var hero = {
	this.say = function(){
		prompt("Follow my instructions and I'll get you out of here!")
	}
	var orders  = {
	moveRight:"Go right men!",
	moveLeft: "Go left men!",
	moveUp: "Go straight!",
	moveDown: "Go back!"
	warn: "Look out!"
	safe: "we're safe!"
    };
}

var blindMen = function(orders){	
	if (orders.moveRight == true) {
		moveRight;
	} 
	else if (orders.moveLeft == true) {
		moveLeft;
	}
	else if (orders.moveUp == true) {
		moveUp;
	}
	else if (orders.moveDown == true) {
		moveDown;
	}
	else if (orders.warn == true) {
		run;
	}
	else if (orders.safe == true)    {
		console.log("yay!");
	}
	else {
		console.log("Your soldiers have died!");
	}
};

//To win the game
var plan =  {
	this.moveRight();
	this.say("Go right men!");
	this.moveRight("Go right men!");
	this.say("Look out!");
	this.moveUp;
	this.say("Go straight!");
	this.moveUp;
	this.say("Go straight!");
	this.say("Look out!");
	this.moveRight();
    this.say("Go right men!");
    this.say("Phew, we're out of the maze!");
    };

plan();






// Reflection
// 
// What parts of your strategy worked? What problems did you face?

// After spending more hours on this than I'd like to admit, I think I started with a mission that was way too complicated.
// At first I was trying to figure out how to make the characters move along an x,y axis, I gave up after realizing that 
// I would first have to create the character objects that would be moving, and I shold probably just start from there. My understanding
// of global/local variables is still sketchy and is something that I will need to dig deeper into when I have more time.
// Creating the mission and the pseudocode was enjoyable, but the actual code wasn't coming as easily.

// What questions did you have while coding? What resources did you find to help you answer them?

// Lots of questions about scope of variables, nested functions, and object key value sets and how they operate. I 
// spent way too much time on W3 Schools and going through the Mozilla Development docs and wanting to try every method
// I came accross. 

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// I'm still really stuck in the pseudocode stage! I think the code above probably made Node cry. Though it might not be 
// functional, it was fun to just take a bash at it and think through each part of the problem. I feel confident that with
// more time (a lot more time) I coult totally get this to work. Though I am nowhere near the point where I can add the 
// script to an actual HTML/CSS page, i'm going to keep plugging away at it!

// Did you learn any new skills or tricks?

// I realize I'm totally misusing "this", but at least now I have a better understanding of what "this" does
// in an object. I learned that the more detail in the pseudocode the better, but getting too detailed can 
// get you stuck!


// How confident are you with each of the Learning Competencies?

// I'm comfortable with creating objects, adding and deleting properties, and defining local variables, I just have trouble putting
// them all together.

// Which parts of the challenge did you enjoy?

// I enjoyed all of the challenge. Even though I didn't really end up with a functional level, I feel 
// it was a good exercise in seeing what areas I needed improvement in. 

// Which parts of the challenge did you find tedious?

// All the research! I spent too much time looking things up and not enough time coding and testing.  
// 
// 
// 
// 
// 
// 