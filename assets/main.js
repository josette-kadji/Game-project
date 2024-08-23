const choices = ["rock", "paper", "scissors"];
const winners = [];

function playGame() {
  for (let i = 0; i <= 5; i++) {
    playRound(i);
  }
}
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function getHumanChoice() {
  let input = prompt("Are you ready ? Enter Rock, Paper, or Scissors");
  console.log(input);

  let check = validateInput(input);
  if (input == null || check == false) {
   alert("Please, enter your choice");
}
    
    else {
    return input;
  }
}

function playRound(round) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(humanSelection, computerSelection);
  winners.push(winners);
  logRound(humanSelection, computerSelection, winner, round);
}

function checkWinner(choiceH, choiceC) {
  if (choiceH === choiceC) {
    return "Tie";
  } else if (
    (choiceH === "rock" && choiceC == "scissors") ||
    (choiceH === "Paper" && choiceC == "Rock") ||
    (choiceH === "Scissors" && choiceC == "Paper")
  ) {
    return "Human";
  } else {
    return "Computer";
  }
}

function logWins() {
  let humanWins = winners.filter((item) => item == "Human").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("human wins:", humanWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties", ties);
}
function logRound(getHumanChoice, getComputerChoice, winner, round) {
  console.log("Round:", round);

  console.log("Human chose:", getHumanChoice);
  console.log("Computer chose:", getComputerChoice);
  console.log(winner, "Won the Round");
}

playGame();
