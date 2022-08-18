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



