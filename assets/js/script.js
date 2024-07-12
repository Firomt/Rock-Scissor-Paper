let playerScore = 0
let computerScore = 0
let roundWinner = ''

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
    }
    
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++ 
        roundWinner = 'player'

    } else {
          computerScore++
          roundWinner = 'computer'
    }

}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }
  

function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()
  
    if (isGameOver()) {
      openEndgameModal()
      setFinalMessage()
    }
  }

  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }

  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }

  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

