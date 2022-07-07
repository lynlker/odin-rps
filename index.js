const options = ["rock", "paper", "scissors"];
let playerPoints = 0
let computerPoints = 0

function computerPlay (){
    return options[Math.floor(Math.random() * options.length)];
}

function playerPlay(){
    let choice = "What is your choice? Rock, Paper, or Scissors";
    return choice.toLowerCase;
}

function playRound(player, computer){
    if (player == "rock"){
        if(computer == "rock"){
            return "Computer chose rock! It's a tie!";
        } else if (computer == "paper"){
            computerPoints++;
            return "Computer chose paper! Computer wins this round!";
        }else{
            playerPoints++;
            return "Computer chose scissors! You win this round!";
        }
    } else if (player == "paper"){
        if(computer == "paper"){
            return "Computer chose paper! It's a tie!";
        } else if (computer == "scissors"){
            computerPoints++
            return "Computer chose scissors! Computer wins this round!";
        }else{
            playerPoints++
            return "Computer chose rock! You win this round!";
        }
    } else if (player == "scissors"){
        if(computer == "scissors"){
            return "Computer chose scissors! It's a tie!";
        } else if (computer == "rock"){
            computerPoints++
            return "Computer chose rock! Computer wins this round!";
        }else{
            playerPoints++
            return "Computer chose paper! You win this round!";
        }
    } else{
        computerPoints++
        return "Choose an actual option, you moron. I'll add a point to the computer for this one.";
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
    
    if (playerPoints == computerPoints){
        console.log("The game ended in a tie!");
    } else if (playerPoints < computerPoints){
        console.log("The computer wins the game! Ur a moron");
    } else {
        console.log("You win this game! Now go touch some grass.")
    }
}