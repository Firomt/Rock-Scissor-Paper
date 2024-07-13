

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
        roundWinner = "tie";
    }
    
    else if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++ 
        roundWinner = 'player'

    } else {
          computerScore++
          roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }
  

function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerSelection = getComputerChoice()
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
        playerSign.src = 'assets/images/rock.png';
        playerSign.alt = 'Rock';
        break;
      case 'PAPER':
        playerSign.src = 'assets/images/paper.png';
        playerSign.alt = 'Paper';
        break;
      case 'SCISSORS':
        playerSign.src = 'assets/images/scissors.png'; 
        playerSign.alt = 'Scissors';
        break;
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerSign.src = 'assets/images/rock.png';
        computerSign.alt = 'Rock';
        break;
      case 'PAPER':
        computerSign.src = 'assets/images/paper.png'; 
        computerSign.alt = 'Paper';
        break;
      case 'SCISSORS':
        computerSign.src = 'assets/images/scissors.png'; 
        computerSign.alt = 'Scissors';
        break;
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
    if (playerScore > computerScore) {
      endgameMsg.textContent = 'You won!';
      endgameMsg.classList.add('win'); // Add 'win' class for green color
    } else {
      endgameMsg.textContent = 'You lost...';
      endgameMsg.classList.remove('win'); // Remove 'win' class for red color
    }
  }

  

  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose to Start'
    scoreMessage.textContent = 'Score 5 points first to Win!'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.src = "assets/images/qmark.png"
    computerSign.src= "assets/images/qmark.png"
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }


