// Variables
let playersPickedDeck = []//player card selected at random to be place face up formerly 'playersPickedCard' think was error
let computersPickedDeck = []//computer card selected at random to be place face up formerly 'computesPickedCard' think was error
// let playersScore = playersDeck.length; use later?
// let computersScore = computersDeck.length; use later?
// let gameover; use later?
// pickedcard is playersPickedCard and computersPickedCard
let removePlayersCard //might have issue here also
let removeComputersCard //might have issue here also
let count = 0; //tracking draw a card clicks


// constats
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
const shuffledDeck = shuffleDeck(deck);

const playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); // players draw deck
const computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length); // computers draw deck

const button = document.getElementById('btn');
const display = document.getElementById('displayClicks');
//everything above checks out ^^

// const scoreboard = {
//     playerScore: 0,
//     computersScore: 0,
// }; let here for now to implement later?


// Cached element references
let playersDeckEl = document.querySelector('#playersdeck') 
let playersPickedDeckEl = document.querySelector('#playersPickedDeck')
let computersDeckEl = document.querySelector('#computersdeck')
let computersPickedDeckEl = document.querySelector('#computersPickedCard')


// Functions
    function playersCardValue(playersPickedCard) {
    //converts the players card into a number value
    console.log('The TEST playersPickedCard:', playersPickedCard);
    let playersPointsConversion = playersPickedCard.slice(1);
    if (playersPickedCard.includes('A')){
        return 11;
    } else if (playersPickedCard.includes('K') || playersPickedCard.includes('Q') || playersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(playersPointsConversion);
    }
   }

   function computersCardValue(computersPickedCard) {
    //converts the computers card into a number value
    console.log('The TEST computersPickedCard:', computersPickedCard);
    let computersPointsConversion = computersPickedCard.slice(1);
    if (computersPickedCard.includes('A')){
        return 11;
    } else if (computersPickedCard.includes('K') || computersPickedCard.includes('Q') || computersPickedCard.includes('J')) {
        return 10;
    } else {
        return parseInt(computersPointsConversion);  
    }
   }
//  both of the cardvalue functions ^^ work as intended

   function determineWinner (playersCardValue, computersCardValue) {    
       if (playersCardValue > computersCardValue) {
        let computersRemovedCard = computersDeck.splice(computersRndIdx,1)[0];
        
        playersDeck.push(computersRemovedCard);
        
        console.log('The Player wins this round!');
           // remove card from computer and add to player check to see if its working. not yet...
       }
       if (playersCardValue < computersCardValue) {
        let playersRemovedCard = playersDeck.splice(playersRndIdx,1)[0];

        computersDeck.push(playersRemovedCard);

           console.log('The Computer has won this round!');
       } 
       if (playersCardValue === computersCardValue){
            console.log('Its a draw, try again!');
       }
    
    console.log('playersdeck array length', playersDeck.length);
    console.log('computersdeck array length', computersDeck.length);    
    console.log('total cards after',playersDeck.length + computersDeck.length);
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
    if (playersDeck.length === 0) {  
      playersDeckEl.classList.add("outline");
      playersDeckEl.classList.remove("back-blue");
    }
    if (computersPickedDeck.length === 1) {  
        computersPickedDeckEl.classList.remove("outline")
    } 
    if (computersPickedDeck.length > 1) {  
        computersPickedDeckEl.classList.remove(removeComputersCard)
    }
    removeComputersCard = computersPickedCard  
    computersPickedDeckEl.classList.add(computersPickedCard)  
    if (computersDeck.length === 0) {  
        computersDeckEl.classList.add("outline");
        computersDeckEl.classList.remove("back-blue");
      }
    // const playerscardValue = playersCardValue(playersPickedCard); delete soon
    // const computercardValue = computersCardValue(computersPickedCard); delete soon
    console.log('The value of the players card is = ', playersCardValue(playersPickedCard));    
    console.log('The value of the computers card is = ', computersCardValue(computersPickedCard));    
    determineWinner(playersCardValue(playersPickedCard), computersCardValue(computersPickedCard)) 
  }


let playersRndIdx;
let computersRndIdx;

const handleClick = () => {
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
        console.log('playersRndIdx', playersRndIdx);
    }
    if (computersDeck.length > 0) {
        let computersRndIdx = Math.floor(Math.random() * computersDeck.length);
        computersPickedCard = computersDeck.slice(computersRndIdx, computersRndIdx + 1)[0];
        computersPickedDeck.push(computersPickedCard);
        console.log('computersRndIdx', computersRndIdx);
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
console.log('original deck', deck);
console.log('shuffeled deck',shuffledDeck);
console.log('players deck',playersDeck);
console.log('computers deck',computersDeck);
//used to confrim that the original deck was split into 2 random decks

// Event listeners
document.querySelector('#btn').addEventListener('click', handleClick)
button.addEventListener('click', function() {
    count++;
    display.textContent = count;
});
//so far these work as intended