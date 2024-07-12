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

  function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'ROCK':
        playerSign.textContent = '✊'
        break
      case 'PAPER':
        playerSign.textContent = '🖐'
        break
      case 'SCISSORS':
        playerSign.textContent = '✌'
        break
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerSign.textContent = '✊'
        break
      case 'PAPER':
        computerSign.textContent = '🖐'
        break
      case 'SCISSORS':
        computerSign.textContent = '✌'
        break
    }
  }

  function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }

  function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
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

