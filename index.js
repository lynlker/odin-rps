const options = ["rock", "paper", "scissors"];


function computerPlay (){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Computer chose rock! It's a tie!"
        } else if (computerSelection == "paper"){
            return "Computer chose paper! Computer wins this round!"
        }else{
            return "Computer chose scissors! You win this round!"
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "paper"){
            return "Computer chose paper! It's a tie!"
        } else if (computerSelection == "scissors"){
            return "Computer chose scissors! Computer wins this round!"
        }else{
            return "Computer chose rock! You win this round!"
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "scissors"){
            return "Computer chose scissors! It's a tie!"
        } else if (computerSelection == "rock"){
            return "Computer chose rock! Computer wins this round!"
        }else{
            return "Computer chose paper! You win this round!"
        }
    } else{
        return "owo"
    }
}