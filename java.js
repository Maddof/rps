let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const getRandomNumber = Math.floor(Math.random() * 3);
  if (getRandomNumber === 0) {
    let computerChoice = "rock";
    console.log("Computer Choice: " + computerChoice);
    return computerChoice;
  } else if (getRandomNumber === 1) {
    let computerChoice = "paper";
    console.log("Computer Choice: " + computerChoice);
    return computerChoice;
  } else {
    let computerChoice = "scissors";
    console.log("Computer Choice: " + computerChoice);
    return computerChoice;
  }
}

let getPlayerChoice = () => {
  let playerChoice = prompt("What do you roll?");
  playerChoice = playerChoice.toLowerCase();
  console.log("Your choice: " + playerChoice);
  return playerChoice;
};

//getPlayerChoice();

function rpsRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "Tie";
    console.log(result);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result = "You win!";
    console.log(result);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "Computer win!";
    console.log(result);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result = "You win!";
    console.log(result);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "Computer win!";
    console.log(result);
  }
}

//rpsRound(getPlayerChoice(), getComputerChoice());

function rpsGame() {
  rpsRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `Your current score: ${playerScore}, Compuer current score: ${computerScore}`
  );
  console.log("Next round starting...");

  rpsRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `Your current score: ${playerScore}, Compuer current score: ${computerScore}`
  );
  console.log("Next round starting...");

  rpsRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `Your current score: ${playerScore}, Compuer current score: ${computerScore}`
  );
  console.log("Next round starting...");

  if (playerScore > computerScore) {
    console.log("You are the winner of the game. (best of 3)");
  } else if (playerScore === computerScore) {
    console.log("Nobody wins best of 3");
  } else {
    console.log("Computer is the winner of the game. (best of 3)");
  }
}

rpsGame();
