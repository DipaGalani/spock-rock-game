const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";

let playerScore = 0;
let computerScore = 0;

// reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Reset the game
function resetAll() {
  playerScore = 0;
  computerScore = 0;

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";

  resultText.textContent = "";

  resetSelected();
}

// Add 'selected' class to computerChoice
function displayComputerChoice() {
  // Add '.selected' to selected icon
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// Computer random choice generator
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5) + 1;
  if (computerChoiceNumber === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNumber === 2) {
    computerChoice = "paper";
  } else if (computerChoiceNumber === 3) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber === 4) {
    computerChoice = "lizard";
  } else if (computerChoiceNumber === 5) {
    computerChoice = "spock";
  }
}

// update score between player and computer
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats);
    if (choice.defeats.includes(computerChoice)) {
      resultText.textContent = "You won.";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      resultText.textContent = "You lost.";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }
}

// a function that executes a bunch of other functions when the player has selected a choice [triggered from the select() function]
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Pass player selection and style icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add '.selected' to selected icon
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// On Load
resetAll();
