// let humanScore=0;
// let computerScore=0;

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
        return 'It\'s a tie!';
    }
    
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log('You Win!')
    } else {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log('Computer wins!');
    }

}
const humanSelection= getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);



