/* Magic Eight Ball that outputs a random fortune based on a user's question. */

// Initialise a variable for username.
let userName = 'Gayatri';

// If the user enters a name assign to userName, else, say hello.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Initialise a variable for user Questions to ask.
let userQuestion = 'Will it be sunny tomorrow?';

// Log to the console the question the user asked
console.log(`${userName} has asked: ${userQuestion} `);

// Generate random number between 0 and 7 and round down the result to nearest whole number, using Maths built-in Math methods.
let randomNumber = Math.floor(Math.random() * 8);

// Initialise an empty variable
let eightBall = '';

// Create a switch case conditional statement. Assign a Magic Eight Ball response based on the random number generated.
switch(randomNumber) {
  case 0:
      eightBall = 'It is certain';
      break;
  case 1:
      eightBall = 'It is decidedly so';
      break;
  case 2:
       eightBall = 'Reply hazy try again';
      break;
  case 3:
       eightBall = 'Cannot predict now';
      break;
  case 4:
       eightBall = 'Do not count on it';
      break;
  case 5:
      eightBall = 'My sources say no';
      break;
  case 6:
       eightBall = 'Outlook not so good';
      break;
  case 7:
      eightBall = 'Signs point to yes';
      break;
}

// Log to the console the Magic Eight Ball's answer, 
// with a value of the eightBall variable.
console.log(`The Magic 8 Ball says, ${eightBall}.`);

