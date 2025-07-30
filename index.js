let add1El = document.getElementById("home-add1-btn")
let add2El = document.getElementById("home-add2-btn")
let add3El = document.getElementById("home-add3-btn")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeContainer = document.getElementById("home-container")
let guestContainer = document.getElementById("guest-container")

let winnerEl = document.getElementById("winner-container")
let containerEl = document.getElementById("container")

let winnerText = document.getElementById("winner-text")
let winnerScore = document.getElementById("score-display")

let confettiCanvas = document.getElementById('confetti-canvas')
let myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true })

let homeCurrentScore = 0
let guestCurrentScore = 0

function homeAdd1() {
    homeCurrentScore += 1
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function homeAdd2() {
    homeCurrentScore += 2
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function homeAdd3() {
    homeCurrentScore += 3
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function guestAdd1() {
    guestCurrentScore += 1
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function guestAdd2() {
    guestCurrentScore += 2
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function guestAdd3() {
    guestCurrentScore += 3
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function newGame() {
    homeCurrentScore = 0
    guestCurrentScore = 0
    homeScoreEl.textContent = homeCurrentScore
    guestScoreEl.textContent = guestCurrentScore  
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")
    
    containerEl.classList.remove("hidden")
    winnerEl.classList.add("hidden")
}

function updateScores() {
  homeScoreEl.textContent = homeCurrentScore;
  guestScoreEl.textContent = guestCurrentScore;
  updateLeaderHighlight();
}

function updateLeaderHighlight() {
  if (homeCurrentScore > guestCurrentScore) {
    homeScoreEl.classList.add("highlight")
    guestScoreEl.classList.remove("highlight")
  } 
  
  else if (guestCurrentScore > homeCurrentScore) {
    guestScoreEl.classList.add("highlight")
    homeScoreEl.classList.remove("highlight")
  } 
  
  else {
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")
  }
}

function endGame() {
    containerEl.classList.add("hidden");
    winnerEl.classList.remove("hidden");
    
    let winner = ''
    
    if (homeCurrentScore > guestCurrentScore) {
        winner = 'Home'
    } 
    
    else if (guestCurrentScore > homeCurrentScore) {
        winner = 'Guest'
    } 
    
    else {
        winner = 'No one. It\'s a tie'
    }
    
    winnerText.textContent = 
        winner === 'No one. It\'s a tie'
                ? "It's a tie!"
                : `You're a winner, ${winner}! 🎉`
                
    winnerScore.textContent =
        `Final Score — Home: ${homeCurrentScore} | Guest: ${guestCurrentScore}`
        
    if (winner !== 'No one. It\'s a tie') {
        launchConfetti();
    }
}

function launchConfetti() {
    myConfetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    })
}