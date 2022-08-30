// DOM Variables
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const paraPlayerScore = document.getElementById("player-score");
const paraComputerScore = document.getElementById("computer-score");
const paraResults = document.getElementById("one-round-result");
const resultWrapper = document.getElementById("result-wrapper");
const headingResult = document.getElementById("heading-result");
const playerFinalScore = document.getElementById("final-player-score");
const computerFinalScore = document.getElementById("final-computer-score");
const gameWrapper = document.getElementById("game-wrapper");
const playAgainBtn = document.getElementById("play-again-btn");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    oneRoundResult = playRound("Rock", getComputerChoice());
    oneRoundResultText = roundResultText(oneRoundResult);
    gameText();
    winnerAnnounce();
});
paperBtn.addEventListener("click", () => {
    oneRoundResult = playRound("Paper", getComputerChoice());
    oneRoundResultText = roundResultText(oneRoundResult);
    gameText();
    winnerAnnounce();
});
scissorsBtn.addEventListener("click", () => {
    oneRoundResult = playRound("Scissors", getComputerChoice());
    oneRoundResultText = roundResultText(oneRoundResult);
    gameText();
    winnerAnnounce();
});
playAgainBtn.addEventListener("click", () => {
    gameWrapper.style.visibility = "visible";
    resultWrapper.style.visibility = "hidden";
    paraResults.textContent = "Choose your weapon!"
    playerScore = 0;
    computerScore = 0;
});


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) { return 1 }
    
    else if(
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")) { return 0 }
    
    else if(playerSelection == computerSelection) { return -1 }
}

function roundResultText(num) {
    if(num == 1) {
        playerScore += 1;
        return "You win this round!"
    } else if(num == 0) {
        computerScore += 1;
        return "You lost this round!"
    } else if(num == -1) {
        playerScore += 0;
        computerScore += 0;
        return "No winner for this round!"
    }
}

function gameText() {
    paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
    paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;
    paraResults.textContent = oneRoundResultText;
}

function winnerAnnounce() {
    if(playerScore == 5) {
        headingResult.textContent = "Congratulations! You Win!";
        playerFinalScore.textContent = `Player Score: ${playerScore} Points`;
        computerFinalScore.textContent = `Computer Score: ${computerScore} Points`;
        gameWrapper.style.visibility = "hidden";
        resultWrapper.style.visibility = "visible";
        playerScore = 0;
        computerScore = 0;
        paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
        paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;
    } else if(computerScore == 5) {
        headingResult.textContent = "Computer Won!";
        playerFinalScore.textContent = `Player Score: ${playerScore} Points`;
        computerFinalScore.textContent = `Computer Score: ${computerScore} Points`;
        gameWrapper.style.visibility = "hidden";
        resultWrapper.style.visibility = "visible";
        playerScore = 0;
        computerScore = 0;
        paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
        paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;
    }
    
}

