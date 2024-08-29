// Variables---------------------------------------------------------------------------
let playersPickedDeck = []; //players drawn card pile
let computersPickedDeck = []; //computers draw card pile
let removePlayersCard //used to track the players picked card and then remove from their deck
let removeComputersCard //used to track the copmuters picked card and then remove from their deck 
let count = 0; //tracking draw a card clicks
// let timer; no need delete later
// let gameOver; no need delete later

// constats------------------------------------------------------------------------------
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let shuffledDeck = shuffleDeck(deck); // used to reshuffle decks in new games
let playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); // players draw deck
let computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length); // computers draw deck
// ^^^ have to occur in this order or else it wont work beceuase it needs the deck and shuffleddeck

const button = document.getElementById('btn'); // allows me to manipulate the button attached to the btn id
const display = document.querySelector('.displayClicks'); // allows me to manipulate the element attached to the first displayclicks

const playersScoreScoreboardEl = document.getElementById('players-score');
const computersScoreScoreboardEl = document.getElementById('computers-score');
// console.log(playersScoreScoreboardEl); //confirms the score when the page first loads can delete later
// console.log(computersScoreScoreboardEl); //confirms the score when the page first loads can delete later
const countDownElement = document.getElementById('countdown-display');
const messages = document.getElementById('messages');
const resetBtnEl = document.getElementById('restart')

const playersCardRemainingEl = document.getElementById('playersscardsremaining');
const computersCardRemainingEl = document.getElementById('computerscardsremaining');

const messagesText = [
    'You won this draw!',
    'The Computer has won this draw!',
    'Its a draw, try again!',
    'Draw a card to begin',
    'The computer has won the game :(',
    'Congratulations, you have won the game!',
    'You have tied, try again?'
] // contains all the varies texts im displaying in the html

const scoreBoard = {
    playersScore: 0,
    computersScore: 0,
}; //sets up the scoreboard

const cardsRemaining = {
    computerremaining: 26,
    playerremaining: 26,
}

console.log('computers remaining cards', cardsRemaining.computerremaining);
console.log('players remaining cards', cardsRemaining.playerremaining);

// Cached element references-----------------------------------------------------------------
let playersDeckEl = document.querySelector('#playersdeck') 
let playersPickedDeckEl = document.querySelector('#playersPickedCard')
let computersDeckEl = document.querySelector('#computersdeck')
let computersPickedDeckEl = document.querySelector('#computersPickedCard')

// Functions--------------------------------------------------------------------------------
      function init (){
        countDownElement.textContent = '60 seconds remaining';
        messages.textContent = messagesText[3];
        resetBtnEl.classList.add('hidden');
        scoreBoard.playersScore = 0;
        scoreBoard.computersScore = 0;
        cardsRemaining.computerremaining = 26; 
        cardsRemaining.playerremaining = 26; 
        playersScoreScoreboardEl.textContent = scoreBoard.playersScore
        computersScoreScoreboardEl.textContent = scoreBoard.computersScore
        count= 0
        display.textContent = `You have drawn ${count} cards.`;
        button.classList.remove('hidden');
        // playersPickedDeckEl.classList.add("outline") //needs work
        // computersPickedDeckEl.classList.add("outline") //needs work
        shuffledDeck = shuffleDeck(deck);
        playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); 
        computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length);
    } // resets the games settings to play again
       
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
        }, 100);
    } //these are the settings for the time and what happens when it expires

    function gameWinner() {
        // console.log(scoreBoard) //shows the scoreboard to confirm everythings working right
        if (scoreBoard.playersScore > scoreBoard.computersScore){
            messages.textContent=messagesText[5];
        } else if (scoreBoard.playersScore < scoreBoard.computersScore){
            messages.textContent=messagesText[4];
        } else if (scoreBoard.playersScore === scoreBoard.computersScore) {
            messages.textContent=messagesText[6];
        }
    } // this displays the text for the winning situation when the game is over

    function playersCardValue(playersPickedCard) {
    // console.log('The TEST playersPickedCard:', playersPickedCard); //confirms players card prints 3 times!?
    let playersPointsConversion = playersPickedCard.slice(1);
    if (playersPickedCard.includes('A')){
        return 11;
    } else if (playersPickedCard.includes('K') || playersPickedCard.includes('Q') || playersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(playersPointsConversion);
    }
   } //converts the players card into a number value

   function computersCardValue(computersPickedCard) {
    // console.log('The TEST computersPickedCard:', computersPickedCard); //confirms computers card prints 3 times!?
    let computersPointsConversion = computersPickedCard.slice(1);
    if (computersPickedCard.includes('A')){
        return 11;
    } else if (computersPickedCard.includes('K') || computersPickedCard.includes('Q') || computersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(computersPointsConversion);  
    }
   }  //converts the computers card into a number value

   function handWinner (playersPickedCard, computersPickedCard) {    
    // console.log('The value of the players card is = ', playersCardValue(playersPickedCard)); confirms card value
    // console.log('The value of the computers card is = ', computersCardValue(computersPickedCard)); confirms card value
    // console.log('players card', playersPickedCard); confirms card picked
    // console.log('computers card', computersPickedCard); confirms card picked

    if (playersCardValue(playersPickedCard) > computersCardValue(computersPickedCard)) {
        const computersRemovedCard = computersDeck.splice(computersDeck.indexOf(computersPickedCard), 1)[0];
        playersDeck.push(computersRemovedCard);
        messages.textContent = messagesText[0];
        scoreBoard.playersScore += 1 ;
        cardsRemaining.playerremaining += 1;
        cardsRemaining.computerremaining -= 1;
        console.log('computers remaing cards', cardsRemaining.computerremaining);//checked and works
        console.log('players remaining cards', cardsRemaining.playerremaining);//checked and works
        // console.log('The Player wins this round!'); confirms when the player wins the round
        // remove card from computers deck and add to players deck 
       }
       if (playersCardValue(playersPickedCard) < computersCardValue(computersPickedCard)) {
        const playersRemovedCard = playersDeck.splice(playersDeck.indexOf(playersPickedCard), 1)[0];
        computersDeck.push(playersRemovedCard);
        messages.textContent = messagesText[1];
        scoreBoard.computersScore += 1 ;
        cardsRemaining.playerremaining -= 1;
        cardsRemaining.computerremaining += 1;
        // console.log(cardsRemaining.computerremaining); //checked and works
        // console.log(cardsRemaining.playerremaining); //checked and works
        // console.log('The Computer has won this round!'); onfirms when the copmuter wins the round
        // remove card from players deck and add to computers deck 
       } 
       if (playersCardValue(playersPickedCard) === computersCardValue(computersPickedCard)){
        messages.textContent = messagesText[2];
        // console.log('Its a draw, try again!'); confirms a tie
       }
    // console.log('playersdeck array length', playersDeck.length); //confirms the arrays are adjusting properly
    // console.log('computersdeck array length', computersDeck.length); //confirms the arrays are adjusting properly
    // console.log('total cards after',playersDeck.length + computersDeck.length); // confirms total cards always equal 52
    playersCardRemainingEl.textContent = cardsRemaining.playerremaining;
    computersCardRemainingEl.textContent = cardsRemaining.computerremaining;
   }

const render = (playersPickedCard, computersPickedCard) => {
   
    
    // console.log('The player drew', playersPickedCard)
    // console.log('The computer drew ', computersPickedCard)
    // if (playersDeck.length === 0) make a game over function 
    // Removes outline class when first card is picked
    if (playersPickedDeck.length === 1) {  
      playersPickedDeckEl.classList.remove("outline")
    }
    // Remove previous picked card from playersPickedDeck class list. 
    if (playersPickedDeck.length > 1) {  
        playersPickedDeckEl.classList.remove(removePlayersCard)
    }
    // Set card to be removed on next click
    removePlayersCard = playersPickedCard  
    // Apply current picked card class list.  
    playersPickedDeckEl.classList.add(playersPickedCard)  
    // If the deck is empty, add an outline and remove the card back color
    if (playersDeck.length === 0) {  /// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
      playersDeckEl.classList.add("outline"); /// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
      playersDeckEl.classList.remove("back-blue"); /// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
    }
    if (computersPickedDeck.length === 1) {  
        computersPickedDeckEl.classList.remove("outline")
    } 
    if (computersPickedDeck.length > 1) {  
        computersPickedDeckEl.classList.remove(removeComputersCard)
    }
    removeComputersCard = computersPickedCard  
    computersPickedDeckEl.classList.add(computersPickedCard)  
    if (computersDeck.length === 0) {  /// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
        computersDeckEl.classList.add("outline");/// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
        computersDeckEl.classList.remove("back-blue");/// doesnt seem to do anything delete AFTER i make the game run to 0 cards in a deck
      }

    handWinner(playersPickedCard, computersPickedCard) 
    playersScoreScoreboardEl.textContent = scoreBoard.playersScore
    computersScoreScoreboardEl.textContent = scoreBoard.computersScore
  }

let playersRndIdx;
let computersRndIdx;

const handleClick = () => {
    if (count === 0) {
        startCountdown(60, countDownElement);  // Start the countdown with 60 seconds
    }
    let playersPickedCard
    let computersPickedCard 
    // prevents error when there are no cards left in the players deck
    if (playersDeck.length > 0) {
        let playersRndIdx = Math.floor(Math.random() * playersDeck.length);
        //randomly select a number from the remaining cards
        playersPickedCard = playersDeck.slice(playersRndIdx, playersRndIdx + 1)[0];
        // removes a card from the deck and assigns to a variable 
        playersPickedDeck.push(playersPickedCard);
        //add the picked card to players picked deck
        // console.log(playersPickedCard, 'players picked card') was just used for checking
        // console.log('playersRndIdx', playersRndIdx);
    }
    if (computersDeck.length > 0) {
        let computersRndIdx = Math.floor(Math.random() * computersDeck.length);
        computersPickedCard = computersDeck.slice(computersRndIdx, computersRndIdx + 1)[0];
        computersPickedDeck.push(computersPickedCard);
        // console.log('computersRndIdx', computersRndIdx);
    }
    render(playersPickedCard, computersPickedCard)
}

function shuffleDeck(deck) {
    const newdeck = [...deck];
    for (let a = newdeck.length - 1; a > 0; a--) {
        const b = Math.floor(Math.random() * (a + 1));
        [newdeck[a], newdeck[b]] = [newdeck[b], newdeck[a]];
    }
    return newdeck; // Return the shuffled deck
}
// the code above shuffles the deck randomly into a newdeck
// console.log('original deck', deck);
// console.log('shuffeled deck',shuffledDeck); confirms shuffle works
// console.log('players deck',playersDeck);
// console.log('computers deck',computersDeck);
//^^^^used to confrim that the original deck was split into 2 random decks

// Event listeners--------------------------------------------------------------------------------
document.querySelector('#btn').addEventListener('click', handleClick)
button.addEventListener('click', function() {
    count++;
    display.textContent = `You have drawn ${count} cards.`;
});
resetBtnEl.addEventListener('click', init);
//so far these work as intended
