//Variables 
let pscore = 0;
let cscore = 0;
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

//Event Listeners
let rock = document.getElementById('Rock');
rock.addEventListener('click', () => {game('rock')});

let paper = document.getElementById('Paper');
paper.addEventListener('click', () => {game('paper')});

let scissors = document.getElementById('Scissors');
scissors.addEventListener('click', () => {game('scissors')});
//Functions

//Call this function to start the game loop and play. 
function game(pchoice){
    let playerChoice = pchoice;
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
    alert('You won the round!');
    playerScore.textContent = `Player Score: ${pscore}`;
    computerScore.textContent = `Computer Score ${cscore}`;
    if(pscore === 5 || cscore === 5){
        return finishGame();
    }
}

function loseRound(){
    cscore++;
    alert('You lost the round!');
    playerScore.textContent = `Player Score: ${pscore}`;
    computerScore.textContent = `Computer Score ${cscore}`;
    if(pscore === 5 || cscore === 5){
        return finishGame();
    }
}

function tieRound(){
    alert('Tie Game Try Again!')
    playerScore.textContent = `Player Score: ${pscore}`;
    computerScore.textContent = `Computer Score ${cscore}`;
}

function finishGame(){
    if(pscore === 5 && cscore < 5){
        playerScore.textContent = `Player Score: 0`;
        computerScore.textContent = `Computer Score: 0`;
        alert('You won five rounds well done!');
    }else if(cscore === 5 && pscore < 5){
        playerScore.textContent = `Player Score: 0`;
        computerScore.textContent = `Computer Score: 0`;
        alert('You lost try again another time!');
    }
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
//game();