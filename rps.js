const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log(
      "please input rock, paper, or scissors with the correct spelling"
    );
  }
};

function getComputerChoice(randomNumber) {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You've won!";
    } else {
      return "You've lost!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You've won!";
    } else {
      return "You've lost!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You've won!";
    } else {
      return "You've lost!";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw " + userChoice)
  console.log("Computer threw " + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
