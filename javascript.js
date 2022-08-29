function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}


// 
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice())
});
paperBtn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice())
});
scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice())
});












// Play one round
function playRound(playerSelection, computerSelection) {

    let result = "";
    // playerSelection = capitalizeSelection(playerSelection);

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
    }

    else if(playerSelection == "Paper") {

        switch(computerSelection) {
            case "Scissors" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Rock" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = `It's a tie! ${playerSelection} vs ${computerSelection}`;
        }
        
    }

    else if(playerSelection == "Scissors") {

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

    return console.log(result);;

}


// game()
function game() {


    let playerScore = 0;
    let computerScore = 0;

    computerSelection = getComputerChoice();

    let oneRoundResult = playRound(playerSelection, computerSelection);
    console.log(oneRoundResult);

    if(oneRoundResult.includes("You Win")) {
        playerScore += 1;
    }
    else if(oneRoundResult.includes("You Lose")) {
        computerScore += 1;
    }
    else if(oneRoundResult.includes("It's a tie")) {
        playerScore += 0;
        computerScore += 0;
    }


    // Display the game result
    function gameResult() {

        if(playerScore > computerScore) {
            result = `Congratulations! You Win! ${playerScore} to ${computerScore}`
        }
        else if (playerScore < computerScore) {
            result = `The Computer Won! ${computerScore} to ${playerScore}`
        }
        else {
            result = `It's a tie! ${playerScore} to ${computerScore}`
        }

        return `Game Result: ${result}`;
    }

    console.log(gameResult());

}

