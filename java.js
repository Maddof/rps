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

function getPlayerChoice() {
  let playerChoice = prompt("What do you roll?");
  playerChoice = playerChoice.toLowerCase();
  console.log("Your choice: " + playerChoice);
  return playerChoice;
}

//getPlayerChoice();

function rpsRound(playerSelection, computerSelection) {
  result = "";
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
}

rpsGame();
