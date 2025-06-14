/* Rock-Paper-Scissors Game */

// Create an arrow function that takes in a single parameter 
// and stores user input.
const getUserChoice = (userInput) => {

  // Convert user input to lowercase.
  userInput = userInput.toLowerCase();

  // Check if user has entered a valid choice
  return userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
    ? userInput
    : console.log("Input Error.");
};
  // Create a function with no parameters to get computer's choice 
  const getComputerChoice = () => {

    // Get random number between 0 and 2.
    let computerChoice = Math.floor(Math.random() * 3);
    
    // Check the computer choice over random number and return the result.
    if (computerChoice === 0) {
      return 'rock';
    } else if (computerChoice === 1) {
      return 'paper';
    } else if (computerChoice === 2) {
      return 'scissors';
    } else {
      return 'Looks like someone has used a dynamite';
    }
  }

  // Compare User's choice and computer's choice to determine winner
  function determineWinner(userChoice, computerChoice) {

    // handle undefined input.
    if (userChoice === undefined) {
      return 'You have entered wrong choice.';
    }

    // Check if the game is a tie
    if (userChoice === computerChoice) {
      return 'Game was a tie!';
    }
  
    // Check conditions for different user choices with computer choices
    //  for 'rock', 'paper' and 'scissors.
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
         return 'Computer won!';
      } else {
         return 'You won!';
      }
    }
    if (userChoice == 'paper') {
      if (computerChoice === 'scissors' || computerChoice === 'rock') {
        return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock' || computerChoice === 'paper') {
        return 'You won!';
      } else {
        return 'Computer won!';
      }
    }

    // Additional secret code option. If user enters 'bomb', user wins no matter what.
    if (userChoice === 'bomb') {
      return 'WOOHOO, You have found the secret code. You won!';
    }
  }
  
  // Function to start the game and log the results.
  const playGame = () => {

    // Store user and computer choices in a variable.
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();

    // Log the choices to the console. 
    console.log(`User Choice: ${userChoice}\nComputer Choice: ${computerChoice}`);

    // Call determineWinner function, log the winner.
    console.log(determineWinner(userChoice, computerChoice));
  }

  // Start the game.
  playGame();
  
  