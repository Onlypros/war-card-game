// Variables
// let playersDeck = [] 
// let computersDeck = []
let removePlayersCard //player card selected at random to be place face up
let removeComputersCard //computer card selected at random to be place face up
let playersScore 
let computersScore
// pickedcard is playersPickedCard and computersPickedCard

// constats
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
const shuffledDeck = shuffleDeck(deck);

const playersDeck = shuffledDeck.slice(0, shuffledDeck.length / 2);
const computersDeck = shuffledDeck.slice(shuffledDeck.length /2 , shuffledDeck.length);


// Cached element references
let playersDeckEl = document.querySelector('#deck-1')
let computersDeckEl = document.querySelector('#deck-2')



// Functions
const render = () => {

    // Removes outline class when first card is picked
    if (playersDeck.length === 1) {  
      playersDeckEl.classList.remove("outline")
    }
  
    // Remove previous picked card from deck2's class list. 
    if (playersDeck.length > 1) {  
      playersDeckEl.classList.remove(removePlayersCard)
    }
  
    // Set card to be removed on next click
    removePlayersCard = playersPickedCard  
  
    // Apply current picked card deck2's class list. For example, if picked card was "h08", the the deck2El would gain the class "h08", which correlates to a background image of the eight of hearts. 
    playersDeckEl.classList.add(playersPickedCard)  
  
    // If the deck is empty, add an outline and remove the card back color
    if (playersDeck.length === 0) {  
      playersDeckEl.classList.add("outline");
      playersDeckEl.classList.remove("back-blue");
    }
  }


  


  
















const handleClick = () => {
    // prevents error when there are no cards left in the players deck
    if (playersDeck.length > 0) {
        let randomIndex1 = Math.floor(Math.random() * playersDeck.length)
        //randomly select a number from the remaining cards
        let playersPickedCard = playersDeck.slice(randomIndex, 1) [0]
        // removes a card from the deck and assigns to a variable 
        pickedPlayersCard.push(playersPickedCard)
        console.log(playerssPickedCard, 'players picked card')
        render(playersPickedCard)
    }
    if (computersDeckDeck.length > 0) {
        let randomIndex2 = Math.floor(Math.random() * computerssDeck.length)
        //randomly select a number from the remaining cards
        let computersPickedCard = computersDeck.slice(randomIndex, 1) [0]
        // removes a card from the deck and assigns to a variable 
        pickedComputersCard.push(computersPickedCard)
        console.log(computersPickedCard, 'computers picked card')
        render(computersPickedCard)
    }
}


















// const shuffledDeck  = (array) {
//   let oldElement;
//   for (let i = array.length - 1; i > 0; i--) {
//     let rand = Math.floor(Math.random() * (i + 1));
//     oldElement = array[i];
//     array[i] = array[rand];
//     array[rand] = oldElement;
//   }
//   return array;
// } 
// const shuffledDeck = shuffleDeck(deck);


// Cached element references 





// Functions
// Initialize deck 1 with array of 52 cards
// const init = () => {
//     deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
//   }
//   // invoke the function
//   init()
// console.log(deck);
  
function shuffleDeck(deck) {
    const newdeck = [...deck];
    for (let a = newdeck.length - 1; a > 0; a--) {
        const b = Math.floor(Math.random() * (a + 1));
        [newdeck[a], newdeck[b]] = [newdeck[b], newdeck[a]];
    }
    return newdeck; // Return the shuffled deck
}
// the code above shuffles the deck randomly into a newdeck
console.log(deck);
console.log(shuffledDeck);



console.log(playersDeck);
console.log(computersDeck);




// determineWinner function 

// reset game function 

  






// Event listeners
document.querySelector('#btn').addEventListener('click', ()=> console.log('clicked'))
document.querySelector('#btn').addEventListener('click', handleClick)