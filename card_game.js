console.log("Let's play War!");

//creating a class for the Deck of cards
class Card {
  constructor(value, suit, rank) {
    this.value = value;
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.deck = [];

    //creating two arrays, one for the suits and one for the values of the Deck of cards
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    //looping through the suits and values array in order to create a new array with all the cars
    //for of
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        this.deck.push(new Card(values[j], suits[i], ranks[j]));
      }
    }
  }
}

//logging all of the card values
const deck1 = new Deck();
let freshDeck = deck1.deck;
console.log("Generating a fresh deck of 52 cards...");

//Shuffling the deck using the Fisher-Yates shuffle algorithm
//src: https://stackfame.com/5-ways-to-shuffle-an-array-using-moder-javascript-es6

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const shuffledDeck = shuffle(freshDeck);
let player1Value, player2Value;

console.log("Shuffling the deck...");

//Dynamicly finding where to cut the deck in half
//src: https://flaviocopes.com/how-to-cut-array-half-javascript/
const half = Math.ceil(shuffledDeck.length / 2);

//-------------------------------------used for unit testing--------------------------------
//function to find the top half of the array
function firstHalfOfArray(x) {
  return x.slice(0, Math.ceil(x.length / 2));
}

//Using the slice method to assign the halfs to each player
const playerOneHand = firstHalfOfArray(shuffledDeck);
const playerTwoHand = shuffledDeck.slice(half);

console.log(
  `Splitting the deck in half...
  Player 1 gets the top half player 2 gets the bottom half.`
);

console.log(
  `Now let's play!
  Each player deals the top card of their hand and the card with the highest value earns them one point.
  Whoever has the most points when each player's hand runs out wins.`
);

//creating an array for each player's points
let playerOneScore = [];
let playerTwoScore = [];

//playing the game by looping the cards

for (let i = 0; i < 26; i++) {
  if (playerOneHand[i].value > playerTwoHand[i].value) {
    //if player one's card is higher than player two, then player one gets one point and it is added to their score array
    console.log(
      `Round ${i}) 
      Player 1: ${playerOneHand[i].rank} of ${playerOneHand[i].suit}
      Player 2: ${playerTwoHand[i].rank} of ${playerTwoHand[i].suit}
      
      Player 1 won 1 point.`
    ),
      playerOneScore.push(1);
  } else if (playerOneHand[i].value < playerTwoHand[i].value) {
    //if player two's card is higher than player one, then player two gets one point and it is added to their score array
    console.log(
      `Round ${i}) 
      Player 1: ${playerOneHand[i].rank} of ${playerOneHand[i].suit}
      Player 2: ${playerTwoHand[i].rank} of ${playerTwoHand[i].suit}

      Player 2 won 1 point.`
    ),
      playerTwoScore.push(1);
  } else {
    console.log(
      `Round ${i}) 
      Player 1: ${playerOneHand[i].rank} of ${playerOneHand[i].suit}
      Player 2: ${playerTwoHand[i].rank} of ${playerTwoHand[i].suit}
      Tied, no points added.`
    );
  }
}

//finding Player One's Total Score by adding all the numbers in the array

let playerOneTotalScore = 0;

for (let i = 0; i < playerOneScore.length; i++) {
  playerOneTotalScore += playerOneScore[i];
}
console.log("Player 1's Final Score: ", playerOneTotalScore);

//finding Player Two's Total Score by adding all the numbers in the array

let playerTwoTotalScore = 0;

for (let i = 0; i < playerTwoScore.length; i++) {
  playerTwoTotalScore += playerTwoScore[i];
}
console.log("Player 2's Final Score: ", playerTwoTotalScore);

if (playerOneTotalScore > playerTwoTotalScore) {
  console.log("Player 1 Won!");
} else if (playerOneTotalScore < playerTwoTotalScore) {
  console.log("Player 2 Won!");
} else {
  console.log("Tied!");
}
