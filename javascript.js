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



// 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");


let playerScore = 0;
let computerScore = 0;



// Play until one player reaches 5 points
function roundButton(choice) {
    computerSelection = getComputerChoice();
    let oneRoundResult = playRound(choice, computerSelection);
    console.log(oneRoundResult);

    if(oneRoundResult.includes("You Win")) {
        playerScore += 1;
    } else if(oneRoundResult.includes("You Lose")) {
        computerScore += 1;
    } else if(oneRoundResult.includes("It's a tie")) {
        playerScore += 0;
        computerScore += 0;
    }

    function gameResult() {
        if(playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            return console.log("Congratulations! You Win!");
        } else if(computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
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

