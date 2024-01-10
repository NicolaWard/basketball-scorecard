let homeScoreElement = document.getElementById('home-score')
let guestScoreElement = document.getElementById('guest-score')

let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore += 1
    homeScoreElement.textContent = homeScore
    
}

function addTwoHome() {
    homeScore += 2
    homeScoreElement.textContent = homeScore
    
}

function addThreeHome() {
    homeScore += 3
    homeScoreElement.textContent = homeScore
    
}

function addOneGuest() {
    guestScore += 1
    guestScoreElement.textContent = guestScore
    
}

function addTwoGuest() {
    guestScore += 2
    guestScoreElement.textContent = guestScore
    
}

function addThreeGuest() {
    guestScore += 3 
    guestScoreElement.textContent = guestScore
    
}