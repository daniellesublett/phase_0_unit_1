// I paired by myself on this challenge.

// __________________________________________
// Write your code below.
  var secretNumber = 7;
  var password = "just open the door";
  var allowedIn = false;
  var members = ['John', 'Bill', 'Bob', 'Mary'];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?
// 
//  I tried testing the code in both the terminal and the browser console. I'm
//  still a little uncomfortable in the terminal, so I decided to practice with Node.
//
// What questions did you have while coding? What resources did you find to help you answer them?
//  
//  The terminal was a little tricky at first because I needed to review the 
//  commands for Node.
//
// What concepts are you having trouble with, or did you just figure something out? If so, what?
//  I tried a few guesses for the "secret number" variable, then I just read 
//  through the tests. Is that "legal" or did I just cheat?! 
// 
// Did you learn any new skills or tricks?
// 
//  This was my first time using Node in the terminal, and after a few false starts, 
//  it worked out pretty well. 
//  I've also noticed my typing is getting a bit faster, which is a releif!
// 
// How confident are you with each of the Learning Competencies?
//
//  I feel very confident with all of them.
//
// Which parts of the challenge did you enjoy?
//
//  Getting all the tests to pass!
//
// Which parts of the challenge did you find tedious?
//
//  None.


// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

