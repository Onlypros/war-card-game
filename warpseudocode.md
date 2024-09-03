# Project 1 War

## How to play
<!-- 1. Take a deck of cards, shuffle and then split in half  -->
    - Half for the player and half for the computer
<!-- 2. Players then flip over the top card of their decks and place them in the middle -->
    - Whoever has the highest card wins that round
        - increase winners score by 1 point
    - If there is a tie move onto the next round
3. Repeat until all cards have been dealt
    <!-- can deal more than 26 times so need to make it deal everything and end -->
    <!-- added a click counter to draw a card -->
4. Whoever has the highest score after 26 rounds wins
5. Add a reset button so they can play again

## browser layout
    
### computer container
- computer deck face down
- computers score
         
### player container
- players deck face down
- players score
- button to flip cards
    
### playing area container
- computers cards face up
- players cards face up
- a message for who won that round
   
## winning condtions
- win
- lose
- draw

## Additional ideas
- add war feature
- cards left in deck?
- icons for the computer and player
- audio for the sound of cards shuffling, flipping, war...
- make J 11, Q 12, K 13, A 14? or A just 11?





notes
finish win conditon - based on timer just need to make winner text
<!-- reset button working - yes? -->
<!-- score board working -->
<!-- make it load score o to o -->
<!-- need to make draw a card not clickable after 60 seconds -->
<!-- get cards to reset done -->
add a final messge for the game winner
make a win threshold
<!-- a hidden message area that turns visbiel with one of 3 answers -->
<!-- made J 10, Q 11, K 12, A 13 -->
make a background for the game
add icons for the players
add a counter for cards in the deck
trying to make the picked card deck clear back to the blue outline but the cards still show with the outline
make element for computer deck size and players then add value = to playersDeck.length +1, computersDeck.length +1?