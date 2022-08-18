function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    let result;

    if(playerSelection == "Rock") {

        switch(computerSelection) {
            case "Paper" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Scissors" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = "It's a tie!"
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

            default : result = "It's a tie!"
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

            default : result = "It's a tie!"
        }
        
    }

    return result;

}


// game()
function game() {


    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Choose! Rock, Paper, Scissors");
        computerSelection = getComputerChoice();
    
        let oneRoundResult = playRound(playerSelection, computerSelection);
        console.log(oneRoundResult);
    
        if(oneRoundResult.includes("You Win")) {
            playerScore += 1;
        }
        else if(oneRoundResult.includes("You Lose")) {
            computerScore += 1;
        }
        else {
            playerScore += 0;
            computerScore += 0;
        }
    }

    function gameResult() {

        if(playerScore > computerScore) {
            result = "Congratulations! You Win!"
        }
        else if (playerScore < computerScore) {
            result = "The Computer Won!"
        }
        else {
            result = "It's a tie!"
        }

        return result;
    }
    
    console.log(gameResult());

}

game();
