// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Danielle Sublett
//  2. Kim Brewer


// 0. "YOU SIGNED... WHO?!"
   var client1 = {
     name: "Leonardo DiCaprio",
     age: 39,
     quote: "I'm the king of the world!!!",
     showQuote: function() {
         console.log(this.quote);
     }
     };
     
   var client2 = {
    name: "Angelina Jolie",
    age: 38,
    quote: "Therapy? I don't need that. The roles that I choose are my therapy."
  };



// 1. "Here they Come!" & 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var clients = [];

clients.push(client1);
clients.push(client2);

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var client3 = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
clients.push(client3);
var client4 = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
clients.push(client4);
var client5 = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");
clients.push(client5);

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

function print() {
    for (i = 0; i < clients.length; i++) {
        console.log("The actor is " + clients[i].name + " and they are " + clients[i].age + ". Their quote is '" + clients[i].quote + "'.");
    }
}

print();


// 4. "But wait, there's more!"

client1.showQuote();


// 5.  ** BONUS **
// I did this one on my own. 

function advertisment() {
    for (i = 0; i < clients.length; i++) {
        console.log("Come to our agency! Our clients include " + clients[i].name + "!");
    }
}



//  6.  Your Reflection:

// What parts of your strategy worked? What problems did you face?

// While both Kim and I initially were overthinking the for loop in release 3, she came up
// with a solution that saved us from having to nest another loop. I think we both discovered
// that the simplest-seeming course of action is the one that delivers the desired results.

// What questions did you have while coding? What resources did you find to help you answer them?

// Most of our questions were syntax-oriented. We needed refreshers on loop syntax, object constructors, and 
// the age-old question of "do we need a semicolon there?" Kim, our navigator, found most of the answers to 
// these questions on stack overflow.

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// It's hard for me to drive! I'm constantly jumping in with a suggestion, and I feel like I interrupt my 
// navigator's train of thought sometimes. I'm working harder on saving my thoughts for a time when it's 
// more appropriate to present them. But it's difficult when I'm excited about something my pair has just 
// taught me and I want to interrupt the workflow to experiment! 

// Did you learn any new skills or tricks?

// I love pairing because it shows me other ways to think through a problem. If anything, one of the 
// skills I'm learning is not to overthink, and to use the skills and tools I already have efficiently 
// instead of including something I might not be familiar with for the sake of novelty. 

// How confident are you with each of the Learning Competencies?

// Pretty confident. Node is proving to be a very useful tool!

// Which parts of the challenge did you enjoy?

// Seeing passing tests is always my favorite part. Finding a different way to make those tests pass is
// also pretty high on that list.

// Which parts of the challenge did you find tedious?

// Getting stuck! But we got unstuck pretty fast.
