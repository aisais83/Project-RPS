function getComputerChoice(){   
    let compRandom = Math.floor(Math.random()*3);
    // console.log(compRandom); 
    if (compRandom === 0) {
        compHand = 'ROCK';
    } else if (compRandom === 1) {
        compHand = 'PAPER';
    } else {
        compHand = 'SCISSORS';
    }
    // console.log(compHand);
}

function playMatch(compHand, playerHand){
    if (playerHand === compHand) {
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
        return `You tied. ${playerHand} ties ${compHand}`;
    } else if ((playerHand === 'ROCK' && compHand === 'SCISSORS') || (playerHand === 'PAPER'  && compHand === 'ROCK') || (playerHand === 'SCISSORS' && compHand === 'PAPER')) {
        playerPoints += 1;        
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
        return `You won! ${playerHand} beats ${compHand}`;
    } else if ((compHand === 'ROCK' && playerHand === 'SCISSORS') || (compHand === 'PAPER'  && playerHand === 'ROCK') || (compHand === 'SCISSORS' && playerHand === 'PAPER')) {
        computerPoints += 1;        
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
        return `You lost! ${compHand} beats ${playerHand}`;
    } else {
        return `Incorrect hand. Please try again.`;
    }
}

function game(){
    for (let i =0; i < 5; i++) {
        console.log('Round '+ (i+1));
        let playerHand = prompt('Please choose a hand: Rock, Paper, or Scissors').toUpperCase();
        // console.log(playerHand);
        getComputerChoice();
        console.log(playMatch(compHand, playerHand));
    }

    if (playerPoints > computerPoints) {
        return `Congratulations! Player wins!`;
    } else if (computerPoints > playerPoints) {
        return `Better luck next time! Computer wins.`;
    } else {
        return `We'll get 'em next time. Tie!`;
    }
}

let compHand = '';
let playerPoints = 0;
let computerPoints = 0;
console.log(game());