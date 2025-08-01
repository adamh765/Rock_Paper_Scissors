window.addEventListener("DOMContentLoaded", () => {
// Global score variables
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;  // First to 5 wins

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1/3) return "rock";
  else if (randomNumber < 2/3) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  let message = "";

  if (humanChoice === computerChoice) {
    message = "It's a draw! You both chose " + humanChoice;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    message = "You win this round! " + humanChoice + " beats " + computerChoice;
    humanScore++;
  } else {
    message = "You lose this round! " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }

  resultDiv.textContent = message;
  scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone has reached winning score
  if (humanScore >= winningScore || computerScore >= winningScore) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "🎉 Congratulations! You won the game!";
    } else {
      resultDiv.textContent = "💻 Sorry! The computer won the game!";
    }
    // Disable buttons so no more rounds can be played
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
});