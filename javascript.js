function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    let choice = computerSelection;
    let result;

    if(playerSelection = "Rock") {

        switch(choice) {
            case "Paper" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Scissors" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = "It's a tie!"
        }
    }

    else if(playerSelection = "Paper") {

        switch(choice) {
            case "Scissors" :
                result = `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;

            case "Rock" :
                result = `You Win! ${playerSelection} beats ${computerSelection}`;
                break;

            default : result = "It's a tie!"
        }
        
    }

    else if(playerSelection = "Scissors") {

        switch(choice) {
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
