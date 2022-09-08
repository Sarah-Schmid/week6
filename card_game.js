//creating a class for the Deck of cards
class Deck {
  constructor() {
    this.deck = [];

    //creating two arrays, one for the suits and one for the values of the Deck of cards
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    //looping through the suits and values array in order to create a new array with all the cars
    for (let suit in suits) {
      for (let value in values) {
        //creating a string to list the card values in plain english
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
}

//logging all of the card values
const deck1 = new Deck();
let freshDeck = deck1.deck;
console.log("Fresh Deck: ", freshDeck);

// example of one would choose a random card from the deck and logging it in plain english
const random = Math.floor(Math.random() * freshDeck.length);
console.log("Random Card: ", freshDeck[random]);

//Shuffling the deck using the Fisher-Yates shuffle algorithm
//src: https://stackfame.com/5-ways-to-shuffle-an-array-using-moder-javascript-es6

function shuffle(array) {
  var currentIndex = array.length,
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

console.log("Shuffled Deck: ", shuffledDeck);

//Dynamicly finding where to cut the deck in half
//src: https://flaviocopes.com/how-to-cut-array-half-javascript/
const half = Math.ceil(shuffledDeck.length / 2);

//Using the slice method to assign the halfs to each player
const playerOneHand = shuffledDeck.slice(0, half);
const playerTwoHand = shuffledDeck.slice(half);

console.log("Player one's hand is: ", playerOneHand);
console.log("Player twos's hand is: ", playerTwoHand);

//creating an array for each player's points
let playerOneScore = [];
let playerTwoScore = [];

//playing the game by looping the cards

for (let i = 0; i < playerOneHand.length; i++) {
  if (playerOneHand[i] > playerTwoHand[i]) {
    //if player one's card is higher than player two, then player one gets one point and it is added to their score array
    console.log("player One has won 1 point"), playerOneScore.push(1);
  }
  if (playerOneHand[i] < playerTwoHand[i]) {
    //if player two's card is higher than player one, then player two gets one point and it is added to their score array
    console.log("player Two has won 1 point"), playerTwoScore.push(1);
  } else {
    console.log("Tied");
  }
}

console.log(playerOneScore);
console.log(playerTwoScore);

//finding Player One's Total Score by adding all the numbers in the array

let playerOneTotalScore = 0;

for (let i = 0; i < playerOneScore.length; i++) {
  playerOneTotalScore += playerOneScore[i];
}
console.log(playerOneTotalScore);

//finding Player Two's Total Score by adding all the numbers in the array

let playerTwoTotalScore = 0;

for (let i = 0; i < playerTwoScore.length; i++) {
  playerTwoTotalScore += playerTwoScore[i];
}
console.log(playerTwoTotalScore);

if (playerOneTotalScore > playerTwoTotalScore) {
  console.log("Player One Won!");
} else if (playerOneTotalScore < playerTwoTotalScore) {
  console.log("Player Two Won!");
} else {
  console.log("Tied!");
}