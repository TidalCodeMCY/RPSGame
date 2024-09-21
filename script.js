//Variables 
let pscore = 0;
let cscore = 0;
//Functions

//Call this function to start the game loop and play. 
function game(){
    let playerChoice = prompt("Rock Paper Or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice ==='scissors'){
        let computerChoice = getComputerChoice();
        playRound(playerChoice,computerChoice);
    }else{
        game();
    }
}

function winRound(){
    pscore++;
    console.log('You won the round!');
    console.log(pscore,cscore);
    game()
}

function loseRound(){
    cscore++;
    console.log('You lost the round!');
    console.log(pscore,cscore);
    game()
}

function tieRound(){
    console.log('Tie Game Try Again!')
    game();
}

//This function takes the 2 values we got and uses them to play a round to check for winners.
function playRound(player,computer){
    if(player === 'rock'){
        if(computer === 'paper'){
            loseRound();
        }else if(computer === 'scissors'){
            winRound();
        }else{
            tieRound();
        }
    }else if(player === 'paper'){
        if(computer === 'scissors'){
            loseRound();
        }else if(computer === 'rock'){
            winRound();
        }else{
            tieRound();
        }
    }else if(player === 'scissors'){
        if(computer === 'rock'){
            loseRound();
        }else if(computer === 'paper'){
            winRound();
        }else{
            tieRound();
        }
    }
}

// Call this to get a random value and get the computers choice of rock paper or scissors
function getComputerChoice(){
    let number = getNum();
    let choices = ['rock','paper','scissors'];
    let cChoice = choices[number];
    return cChoice;
}

function getNum(){
    let number = Math.floor(Math.random() *10);
    number = Math.floor(number/3);
    if(number === 3){
        getNum();
    }else{
        return number;
    }
}
//Other Stuff
game();