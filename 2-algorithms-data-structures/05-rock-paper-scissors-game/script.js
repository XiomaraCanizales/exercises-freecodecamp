// get computer option
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

// get winner
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    )
}

// keeping scores
let playerScore = 0
let computerScore = 0

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult()
    if (userOption == computerResult) {
        return `It's a tie! Both chose ${userOption}`
    }
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++
        return `Player wins! ${userOption} beats ${computerResult}`
    } else {
        computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

// get results
const playerScoreSpanElement = document.getElementById("player-score")
const computerScoreSpanElement = document.getElementById("computer-score")
const roundResultsMsg = document.getElementById("results-msg")

// applying rules 
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn")

// show results
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption)
    computerScoreSpanElement.innerText = computerScore
    playerScoreSpanElement.innerText = playerScore

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
          playerScore === 3 ? "Player" : "Computer"
        } has won the game!`
    
        resetGameBtn.style.display = "block"
        optionsContainer.style.display = "none"
    }
}

// reset game
function resetGame() {
    playerScore = 0
    computerScore = 0
    computerScoreSpanElement.innerText = computerScore
    playerScoreSpanElement.innerText = playerScore
    resetGameBtn.style.display = "none"
    optionsContainer.style.display = "block"
    winnerMsgElement.innerText = ""
    roundResultsMsg.innerHTML = "" 
}

// buttons
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

// user click
rockBtn.addEventListener("click", () => {
    showResults("Rock")
  })
  
  paperBtn.addEventListener("click", () => {
    showResults("Paper")
  })
  
  scissorsBtn.addEventListener("click", () => {
    showResults("Scissors")
  })

  resetGameBtn.addEventListener("click", resetGame)