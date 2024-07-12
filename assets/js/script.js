let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice(){
    let choice = prompt("Please enter your choice: rock, scissor, or paper: ").toLowerCase();
    return choice;

}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    }
    
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log('You Win!')
        humanScore +=1; 

    } else {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log('Computer wins!');
        computerScore +=1;
    }

}


function playGame(){

    for(let i=1; i<=5; i++){
        const humanSelection= getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore ){
        console.log(`Your score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);
        console.log('You Win!');
    }
    else{
        console.log(`Your score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);
        console.log('Computers Wins!');
    }

    }   

playGame();



