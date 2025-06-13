/* Race Day Exercise */

// Assign a random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Variable to check whether a runner registered early or not.
let earlyRegistration = true;

// Variable for runner's age
let runnerAge = 15;

// If the runner is over 18 add 1000 to their race number (a way to seperate the age ranges)
if (earlyRegistration && runnerAge > 18) {
  raceNumber += 1000;
} 
console.log(`Your raceNumber is ${raceNumber}`);

// Check age and registration time to determine race time.
/*
  If the runner registered early and are over 18, they will run at 9:30am,
  If the runner registered late and are over 18, they will run at 11:00am,
  If the runner is under 18, they will run at 12:30pm regardless of when they registered,
  If the runner's age is EXACTLY 18, they need to see the registration desk.
*/
if (earlyRegistration && runnerAge > 18){
  console.log(`Race will begin at 9:30 am, your race number is: ${raceNumber}`);
} else if (!earlyRegistration && runnerAge > 18) {
   console.log(`Race will begin at 11:00 am, your race number is: ${raceNumber} `);
} else if (runnerAge < 18) {
   console.log(`Race will begin at 12:30 pm, your race number is: ${raceNumber}`);
} else {
  console.log(`Please approach the registration desk, Thank you!`);
}
