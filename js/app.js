// Variables
// let playersDeck = [] 
// let computersDeck = []
let playersPickedDeck = []//player card selected at random to be place face up formerly 'playersPickedCard' think was error
let computersPickedDeck = []//computer card selected at random to be place face up formerly 'computesPickedCard' think was error
let playersScore = 0
let computersScore = 0
// pickedcard is playersPickedCard and computersPickedCard
let removePlayersCard //might have issue here also
let removeComputersCard //might have issue here also



// constats
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
const shuffledDeck = shuffleDeck(deck);

const playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2); // players draw deck
const computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length); // computers draw deck


// Cached element references
let playersDeckEl = document.querySelector('#playersdeck') 
let playersPickedDeckEl = document.querySelector('#playersPickedDeck')
let computersDeckEl = document.querySelector('#computersdeck')
let computersPickedDeckEl = document.querySelector('#computersPickedCard')


// Functions

function getCardValue(card) {
    if (card.includes('A') || card.includes('K') || card.includes('Q') || card.includes('J') ) return 10
        return card.slice(1)
       // this ideally returns the value of the card
   }
   
   function determineWinner (playersPickedCard, computersPickedCard) {
       const playerCardValue = getCardValue(playersPickedCard)
       const computerCardValue = getCardValue(computersPickedCard)
       
   
       if (playerCardValue > computerCardValue) {
           playersScore++
       }
       if (playerCardValue < computerCardValue) {
           computersScore++
       }
       console.log('TBD')
   }



const render = (playersPickedCard, computersPickedCard) => {
    console.log('playerspickcard', playersPickedCard)
    console.log('computersspickcard', computersPickedCard)
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
    // Apply current picked card deck2's class list. For example, if picked card was "h08", the the deck2El would gain the class "h08", which correlates to a background image of the eight of hearts. 
    playersPickedDeckEl.classList.add(playersPickedCard)  
    // If the deck is empty, add an outline and remove the card back color
    if (playersDeck.length === 0) {  
      playersDeckEl.classList.add("outline");
      playersDeckEl.classList.remove("back-blue");
    }
    // trying to flip the computers card now
    if (computersPickedDeck.length === 1) {  
        computersPickedDeckEl.classList.remove("outline")
    } // removes outline class when first card is picked
    if (computersPickedDeck.length > 1) {  
        computersPickedDeckEl.classList.remove(removeComputersCard)
    }
    // Set card to be removed on next click
    removeComputersCard = computersPickedCard  
    // Apply current picked card deck2's class list. For example, if picked card was "h08", the the deck2El would gain the class "h08", which correlates to a background image of the eight of hearts. 
   computersPickedDeckEl.classList.add(computersPickedCard)  
    // If the deck is empty, add an outline and remove the card back color
    if (computersDeck.length === 0) {  
        computersDeckEl.classList.add("outline");
        computersDeckEl.classList.remove("back-blue");
      }

    determineWinner(playersPickedCard,computersPickedCard) 
  }


const handleClick = () => {
    let playersPickedCard
    let computersPickedCard 
    // prevents error when there are no cards left in the players deck
    if (playersDeck.length > 0) {
        let playersRndIdx = Math.floor(Math.random() * playersDeck.length)
        //randomly select a number from the remaining cards
        playersPickedCard = playersDeck.slice(playersRndIdx, playersRndIdx + 1)[0]
        // removes a card from the deck and assigns to a variable 
        playersPickedDeck.push(playersPickedCard)
        //add the picked card to players face up deck
        console.log(playersPickedCard, 'players picked card')
        console.log('playersRndIdx', playersRndIdx)
        // render(playersPickedCard)
    }
    if (computersDeck.length > 0) {
        let computersRndIdx = Math.floor(Math.random() * computersDeck.length)
        //randomly select a number from the remaining cards
        computersPickedCard = computersDeck.slice(computersRndIdx, computersRndIdx + 1)[0]
        // removes a card from the deck and assigns to a variable 
        computersPickedDeck.push(computersPickedCard)
        //add the picked card to computers face up
        console.log(computersPickedCard, 'computers picked card')
        console.log('computersRndIdx', computersRndIdx)
        // render(computersPickedCard)
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
console.log('deck', deck);
console.log('shuffeled deck',shuffledDeck);

console.log('players deck',playersDeck);
console.log('computers deck',computersDeck);


// Event listeners
// document.querySelector('#btn').addEventListener('click', ()=> console.log('clicked'))
document.querySelector('#btn').addEventListener('click', handleClick)