// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//Rescue Mission
//move down 2x
//move right
//move up 3x
//move down
//attack!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy(); 

//Grab the Mushroom
//move up
//move right
//move left
//move up
//attack!!!
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me
//move right
//move down and get potion
//attack? 
//move right again
//move down
//move up
//attack?
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
//move right
//tell Phoebe to follow
//move right 2x
//move up
//move right
//say something to taunt
//move down
//move right
//move up
//escape to the right
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("something!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a Trap
//move down 2x
//say something 
//move up 3x
this.moveDown();
this.moveDown();
this.say("hi");
this.moveUp();
this.moveUp();
this.moveUp();

//Break the Prison
if(name === "William")
     return true;
 if(name === "Krogg")
     return false;  // <-- Start here; Krogg is not a friend!
//if prisinor is a friend return true, 
//if it's an enemy return false
if(name === "Lucas")
    return true;
if(name === "Gort")
    return false;
if(name === "Brack")
    return false;
if(name === "Marcus")
    return true;
if(name === "MARCUS")
    return false;
if(name === "Gordon")
    return true;

//Taunt
//say something x4
this.say("Hey there!");
this.say("dude!");
this.say("Hello!");
this.say("Hello hi hi!");

//Cowardly Taunt
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
// // Run your soldier out where the ogres can hear you.
//move in range
this.moveXY(63,20);
// // Say something!
this.say("taunty taunt taunt!");

//Commanding Followers
// this.moveXY(49, 66);
// this.moveXY(60, 63);
// this.moveXY(75, 63);
// this.say("Hail, friends!");
// // Saying anything with "follow" in it will get nearby soldiers to follow you
this.say("follow me");
//walk so they start following you, but don't get too close to the enemy!
this.moveXY(57, 41);
// // Saying anything with "attack" will send nearby troops into
// // a battle mode.
this.say("attack");
// // Make sure Tharin is safe!
//retreat a bit!
this.moveXY(72, 63);


//Mobile Artillery
// this.moveXY(30, 26);  // Move into range
// this.attackXY(46, 5);  // Shoot once in the middle of the ogres
//move in range of enemy
this.moveXY(55, 44);
//attack
this.attackXY(69, 54);
//retreat a bit
this.moveXY(41, 33);
//attack again
this.attackXY(51, 41);
//move in range of other enemy group
this.moveXY(45, 46);
//repeat attack and move strategy
this.attackXY(50, 67);
this.moveXY(37, 32);
this.attackXY(40, 40);
 
//Release 3
// What is this referring to? Think programming-wise rather than in the terms of the game.
//    Okay, this was a tricky one! "This" describes the "owner" of the function, and determines its scope. 
//    For example, you might have several instances when you are "attacking" the
//    enemy, but since each attack needs it's own coordinents, you need a way to 
//    differentiate THIS specific attack. 
// What does the () do in JavaScript?
//    () calls a function, similar to the way a dot calls a method in ruby.
//                           ("hey I'm a function, and this is crazy, 
//	                        but here's some parens, so call me maybe")
// What is the point of the semicolons?
//     The semicolon is used to seperate statements. Besides just being "good practice" semicolons are needed because without them
//     Javascript can sometimes generate bugs just by guessing where they should go!
//     
//     

//    
 
 
 
// Reflection:
// Write your reflection here.

// http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript

