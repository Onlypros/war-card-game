// Variables---------------------------------------------------------------------------
let playersPickedDecks = []; 
let computersPickedDecks = []; 
let removePlayersCard 
let removeComputersCard 
let count = 0; 
let playersRndIdx;
let computersRndIdx;

// constats------------------------------------------------------------------------------
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let shuffledDeck = shuffleDeck(deck); 
let playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); 
let computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length); 
const button = document.getElementById('btn'); 
const display = document.querySelector('.displayClicks'); 
const playersScoreScoreboardEl = document.getElementById('players-score');
const computersScoreScoreboardEl = document.getElementById('computers-score');
const countDownElement = document.getElementById('countdown-display');
const messages = document.getElementById('messages');
const resetBtnEl = document.getElementById('restart')
const playersCardRemainingEl = document.getElementById('playersscardsremaining');
const computersCardRemainingEl = document.getElementById('computerscardsremaining');

const scoreBoard = {
    playersScore: 0,
    computersScore: 0,
}; 

const cardsRemaining = {
    computerremaining: 26,
    playerremaining: 26,
}

// Cached element references-----------------------------------------------------------------
let playersDeckEl = document.querySelector('#playersdeck') 
let playersPickedDecksEl = document.querySelector('#playersPickedCard')
let computersDeckEl = document.querySelector('#computersdeck')
let computersPickedDecksEl = document.querySelector('#computersPickedCard')

// Functions--------------------------------------------------------------------------------
      function init (){
        countDownElement.textContent = '30 seconds remaining';
        messages.textContent = 'Draw a card to begin';
        resetBtnEl.classList.add('hidden');
        scoreBoard.playersScore = 0;
        scoreBoard.computersScore = 0;
        playersCardRemainingEl.textContent = 26;
        computersCardRemainingEl.textContent = 26;
        playersScoreScoreboardEl.textContent = scoreBoard.playersScore
        computersScoreScoreboardEl.textContent = scoreBoard.computersScore
        count= 0
        display.textContent = `You have drawn ${count} cards.`;
        button.classList.remove('hidden');
        shuffledDeck = shuffleDeck(deck);
        playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); 
        computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length);
    } 
       
    function startCountdown(duration, displayElement) {
        let countDownTime = duration;
        const interval = setInterval(function() {
            countDownTime--;
            displayElement.textContent = countDownTime + ' seconds remaining';
            if (countDownTime <= 0) {
                clearInterval(interval);
                displayElement.textContent = 'Time is up!';
                resetBtnEl.classList.remove('hidden');
                button.classList.add('hidden');
                gameWinner();
            }
        }, 1000);
    } 

    function gameWinner() {
        if (playersDeck.length === 0) {
            messages.textContent = 'You have no cards left! The computer wins!';
        } else if (computersDeck.length === 0) {
            messages.textContent = 'The computer has no cards left! You win!';
        } else if (scoreBoard.playersScore > scoreBoard.computersScore){
            messages.textContent='Congratulations, you have won the game!';
        } else if (scoreBoard.playersScore < scoreBoard.computersScore){
            messages.textContent='The computer has won the game :(';
        } else if (scoreBoard.playersScore === scoreBoard.computersScore){
            messages.textContent='You have tied, try again?';
        } 
    }  
     
    function playersCardValue(playersPickedCard) {
    let playersPointsConversion = playersPickedCard.slice(1);
    if (playersPickedCard.includes('A')){
        return 13;
    } else if (playersPickedCard.includes('K')) {
        return 12;
    } else if (playersPickedCard.includes('Q')) {
        return 11;
    }  else if (playersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(playersPointsConversion);
    }
   } 

   function computersCardValue(computersPickedCard) {
    let computersPointsConversion = computersPickedCard.slice(1);
    if (computersPickedCard.includes('A')){
        return 13;
    } else if (computersPickedCard.includes('K')) {
        return 12;
    } else if (computersPickedCard.includes('Q')) {
        return 11;
    }  else if (computersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(computersPointsConversion);  
    }
   } 

   function handWinner (playersPickedCard, computersPickedCard) {    
    if (playersCardValue(playersPickedCard) > computersCardValue(computersPickedCard)) {
        const computersRemovedCard = computersDeck.splice(computersDeck.indexOf(computersPickedCard), 1)[0];
        playersDeck.push(computersRemovedCard);
        messages.textContent = 'You won this draw!';
        scoreBoard.playersScore += 1 ;
        cardsRemaining.playerremaining += 1;
        cardsRemaining.computerremaining -= 1;
        console.log('computers remaing cards', cardsRemaining.computerremaining);
        console.log('players remaining cards', cardsRemaining.playerremaining);
       }
       if (playersCardValue(playersPickedCard) < computersCardValue(computersPickedCard)) {
        const playersRemovedCard = playersDeck.splice(playersDeck.indexOf(playersPickedCard), 1)[0];
        computersDeck.push(playersRemovedCard);
        messages.textContent = 'The Computer has won this draw!';
        scoreBoard.computersScore += 1 ;
        cardsRemaining.playerremaining -= 1;
        cardsRemaining.computerremaining += 1;
       } 
       if (playersCardValue(playersPickedCard) === computersCardValue(computersPickedCard)){
        messages.textContent = 'Its a draw, try again!';
       }
    console.log('playersdeck array length', playersDeck.length); 
    console.log('computersdeck array length', computersDeck.length); 
    playersCardRemainingEl.textContent = cardsRemaining.playerremaining;
    computersCardRemainingEl.textContent = cardsRemaining.computerremaining;
   }

const render = (playersPickedCard, computersPickedCard) => {
    if (playersPickedDecks.length === 1) {  
      playersPickedDecksEl.classList.remove("outline")
    }
    if (playersPickedDecks.length > 1) {  
        playersPickedDecksEl.classList.remove(removePlayersCard)
    }
    removePlayersCard = playersPickedCard  
    playersPickedDecksEl.classList.add(playersPickedCard)  
    if (playersDeck.length === 0) { 
      playersDeckEl.classList.add("outline"); 
      playersDeckEl.classList.remove("back-blue"); 
    }
    if (computersPickedDecks.length === 1) {  
        computersPickedDecksEl.classList.remove("outline")
    } 
    if (computersPickedDecks.length > 1) {  
        computersPickedDecksEl.classList.remove(removeComputersCard)
    }
    removeComputersCard = computersPickedCard  
    computersPickedDecksEl.classList.add(computersPickedCard)  
    if (computersDeck.length === 0) {  
        computersDeckEl.classList.add("outline");
        computersDeckEl.classList.remove("back-blue");
      }

    handWinner(playersPickedCard, computersPickedCard) 
    playersScoreScoreboardEl.textContent = scoreBoard.playersScore
    computersScoreScoreboardEl.textContent = scoreBoard.computersScore
  }

const handleClick = () => {
    if (count === 0) {
        startCountdown(30, countDownElement); 
    }
    let playersPickedCard
    let computersPickedCard 
    if (playersDeck.length > 0) {
        let playersRndIdx = Math.floor(Math.random() * playersDeck.length);
        playersPickedCard = playersDeck.slice(playersRndIdx, playersRndIdx + 1)[0];
        playersPickedDecks.push(playersPickedCard);
    }
    if (computersDeck.length > 0) {
        let computersRndIdx = Math.floor(Math.random() * computersDeck.length);
        computersPickedCard = computersDeck.slice(computersRndIdx, computersRndIdx + 1)[0];
        computersPickedDecks.push(computersPickedCard);
    }
    render(playersPickedCard, computersPickedCard)
}

function shuffleDeck(deck) {
    const newdeck = [...deck];
    for (let a = newdeck.length - 1; a > 0; a--) {
        const b = Math.floor(Math.random() * (a + 1));
        [newdeck[a], newdeck[b]] = [newdeck[b], newdeck[a]];
    }
    return newdeck; 
}

// Event listeners--------------------------------------------------------------------------------
document.querySelector('#btn').addEventListener('click', handleClick)
button.addEventListener('click', function() {
    count++;
    display.textContent = `You have drawn ${count} cards.`;
});
resetBtnEl.addEventListener('click', init);git 