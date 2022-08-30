function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

// Play one round
function playRound(playerSelection, computerSelection) {
    let result = "";

    if(playerSelection == "Rock") {

        switch(computerSelection) {
            case "Paper" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Scissors" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = `It's a tie! ${playerSelection} vs ${computerSelection}`;
        }
    } else if(playerSelection == "Paper") {

        switch(computerSelection) {
            case "Scissors" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Rock" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = `It's a tie! ${playerSelection} vs ${computerSelection}`;
        }
        
    } else if(playerSelection == "Scissors") {

        switch(computerSelection) {
            case "Rock" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Paper" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = `It's a tie! ${playerSelection} vs ${computerSelection}`;
        }
        
    }

    return result;
}

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

// Play until one player reaches 5 points
function roundButton(choice) {
    computerSelection = getComputerChoice();
    let oneRoundResult = playRound(choice, computerSelection);
    
    paraResults.textContent = `${oneRoundResult}`;

    if(oneRoundResult.includes("You Win")) {
        playerScore += 1;
        paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
    } else if(oneRoundResult.includes("You Lose")) {
        computerScore += 1;
        paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;
    } else if(oneRoundResult.includes("It's a tie")) {
        playerScore += 0;
        computerScore += 0;
    }

    function gameResult() {
        if(playerScore == 5) {
            
            headingResult.textContent = "Congratulations! You Win!";
            playerFinalScore.textContent = `Player Score: ${playerScore} Points`;
            computerFinalScore.textContent = `Player Score: ${computerScore} Points`;
            gameWrapper.style.visibility = "hidden";
            resultWrapper.style.visibility = "visible";

            playerScore = 0;
            computerScore = 0;

            paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
            paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;

            return console.log("Congratulations! You Win!");
        } else if(computerScore == 5) {

            headingResult.textContent = "Computer Won!";
            playerFinalScore.textContent = `Player Score: ${playerScore} Points`;
            computerFinalScore.textContent = `Player Score: ${computerScore} Points`;
            gameWrapper.style.visibility = "hidden";
            resultWrapper.style.visibility = "visible";

            playerScore = 0;
            computerScore = 0;

            paraPlayerScore.textContent = `Player Score: ${playerScore} Points`;
            paraComputerScore.textContent = `Computer Score: ${computerScore} Points`;

            return console.log("Computer Won!");
        } else return;
    }
    gameResult();
}



rockBtn.addEventListener("click", () => {
    roundButton("Rock");
});

paperBtn.addEventListener("click", () => {
    roundButton("Paper");
});

scissorsBtn.addEventListener("click", () => {
    roundButton("Scissors");
});

playAgainBtn.addEventListener("click", () => {
    gameWrapper.style.visibility = "visible";
    resultWrapper.style.visibility = "hidden";
    playerScore = 0;
    computerScore = 0;
})






//  // Display the game result


// game()
// function game() {


//     let playerScore = 0;
//     let computerScore = 0;

//     computerSelection = getComputerChoice();

//     let oneRoundResult = playRound(playerSelection, computerSelection);
//     console.log(oneRoundResult);

//     if(oneRoundResult.includes("You Win")) {
//         playerScore += 1;
//     }
//     else if(oneRoundResult.includes("You Lose")) {
//         computerScore += 1;
//     }
//     else if(oneRoundResult.includes("It's a tie")) {
//         playerScore += 0;
//         computerScore += 0;
//     }


   

//     console.log(gameResult());

// }

