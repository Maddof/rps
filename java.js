let playerScore = 0;
let computerScore = 0;

const parentButtons = document.getElementById("container");
const resultsSection = document.getElementById("round-results");
const playerScoreSection = document.getElementById("playerscore");
const computerScoreSection = document.getElementById("computerscore");
const computerSelectionSection = document.getElementById("computer-selection");

// Here I use event delegation to prevent propagated outside.
// This way I can use only one event listener on the parent instead of multiple.

parentButtons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let playerChoice = e.target.value;
    console.log("Your choice: " + playerChoice);
    rpsRound(playerChoice, getComputerChoice());
  }
});

function getComputerChoice() {
  const getRandomNumber = Math.floor(Math.random() * 3);
  if (getRandomNumber === 0) {
    let computerChoice = "rock";
    computerSelectionSection.innerHTML = `Computer rolled <strong>${computerChoice}</strong>`;
    return computerChoice;
  } else if (getRandomNumber === 1) {
    let computerChoice = "paper";
    computerSelectionSection.innerHTML = `Computer rolled <strong>${computerChoice}</strong>`;
    return computerChoice;
  } else {
    let computerChoice = "scissors";
    computerSelectionSection.innerHTML = `Computer rolled <strong>${computerChoice}</strong>`;
    return computerChoice;
  }
}

function rpsRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "Tie";
    resultsSection.innerText = result;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    result = "You win the round!";
    resultsSection.innerText = result;
    playerScoreSection.innerText = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    result = "Computer win the round!";
    resultsSection.innerText = result;
    computerScoreSection.innerText = computerScore;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result = "You win the round!";
    resultsSection.innerText = result;
    playerScoreSection.innerText = playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result = "You win the round!";
    resultsSection.innerText = result;
    playerScoreSection.innerText = playerScore;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    result = "Computer win the round!";
    resultsSection.innerText = result;
    computerScoreSection.innerText = computerScore;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    result = "Computer win the round!";
    resultsSection.innerText = result;
    computerScoreSection.innerText = computerScore;
  }
  if (playerScore === 5) {
    resultsSection.innerText = "PLAYER WINS THE GAME YEAAA!";
    playerScore = 0;
    computerScore = 0;
    playerScoreSection.innerText = "";
    computerScoreSection.innerText = "";
  }
  if (computerScore === 5) {
    resultsSection.innerText = "COMPUTER WINS THE GAME!";
    playerScore = 0;
    computerScore = 0;
    playerScoreSection.innerText = "";
    computerScoreSection.innerText = "";
  }
}
