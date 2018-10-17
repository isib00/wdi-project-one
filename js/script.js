class Card {
  constructor(boxNumber) {
    this.boxNumber = boxNumber;
    this.side = 0;
    this.gameStatus = 0;
  }
}

const Card1 = new Card(0);
const Card2 = new Card(0);
const Card3 = new Card(1);
const Card4 = new Card(1);
const Card5 = new Card(2);
const Card6 = new Card(2);
const Card7 = new Card(3);
const Card8 = new Card(3);
const Card9 = new Card(4);
const Card10 = new Card(4);
const Card11 = new Card(5);
const Card12 = new Card(5);
const Card13 = new Card(6);
const Card14 = new Card(6);
const Card15 = new Card(7);
const Card16 = new Card(7);
const Card17 = new Card(8);
const Card18 = new Card(8);
const Card19 = new Card(9);
const Card20 = new Card(9);
const Card21 = new Card(10);
const Card22 = new Card(10);
const Card23 = new Card(11);
const Card24 = new Card(11);
const Card25 = new Card(12);
const Card26 = new Card(12);
const Card27 = new Card(13);
const Card28 = new Card(13);
const Card29 = new Card(14);
const Card30 = new Card(14);
const Card31 = new Card(15);
const Card32 = new Card(15);
const Card33 = new Card(16);
const Card34 = new Card(16);
const Card35 = new Card(17);
const Card36 = new Card(17);
const Card37 = new Card(18);
const Card38 = new Card(18);
const Card39 = new Card(19);
const Card40 = new Card(19);
const Card41 = new Card(20);
const Card42 = new Card(20);

//CREATE ARRAY OF ALL CARDS
const arrayAllCards = [];

for (let i = 0; i < 21; i++ ) {
  arrayAllCards.push(new Card(i));
  arrayAllCards.push(new Card(i));
}
console.log(arrayAllCards);

//CREATE GRID
const columnCount = 7;
const rowCount = 6;
for (let row = 0; row < rowCount; row++ ) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  for (let column = 0; column < columnCount; column++) {
    const randomIndex = Math.floor(Math.random() * arrayAllCards.length);
    const randomCard = arrayAllCards[randomIndex];
    //remove the card from the array
    arrayAllCards.splice(randomIndex, 1);
    const element = buildDomElement(randomCard);
    rowDiv.appendChild(element);
  }
  const grid = document.getElementById('grid');
  grid.appendChild(rowDiv);
}

function buildDomElement(card) {
  const div = document.createElement('div');
  div.className = 'card';
  div.setAttribute('card-number', card.boxNumber);
  // Card front:
  const frontImg = document.createElement('img');
  frontImg.setAttribute('src', `ImagesMemoryGame/${card.boxNumber + 1}.jpg`);
  frontImg.className = 'front';
  div.appendChild(frontImg);
  // Card back:
  const backImg = document.createElement('img');
  backImg.setAttribute('src', 'ImagesMemoryGame/back image bearbeitet.jpg');
  backImg.className = 'back';
  backImg.addEventListener('click', handleCardBackClick);
  div.appendChild(backImg);
  return div;
}

let cardsInPlay = [];
let cardsclicked = 0;
let firstCard;
let secondCard;

function handleCardBackClick(event) {
  cardsclicked++;
  const clickedElement = event.target;
  clickedElement.classList.add('flipped');
  cardsInPlay.push(clickedElement);
  const cardNumber = clickedElement.parentElement.getAttribute('card-number');
  if (cardsclicked === 1) {
    firstCard = cardNumber;
  } else if (cardsclicked === 2) {
    secondCard = cardNumber;
    checkForPairs();
  }
}

let score = 0;
const scoreBoard = document.querySelector('.score');
scoreBoard.innerHTML = score;
const cardsOutOfGame = [];

function checkForPairs() {
  console.log(firstCard , secondCard);
  if (firstCard === secondCard) {
    console.log('You have found a pair!');
    cardsInPlay.forEach(card => {
      cardsOutOfGame.push(card);
      card.style.opacity = 0;
      console.log('these are the found cards in cardsOutOfGame' , cardsOutOfGame);
      const sound = document.querySelector('.sound');
      sound.play();
    });
    score++;
    scoreBoard.innerHTML = score;
    checkForEndOfGame();
    cardsInPlay = [];
    cardsclicked = 0;
  } else {
    console.log('This is not a pair. Try again!');
    setTimeout(() =>  {
      cardsInPlay.forEach(card => {
        console.log('this is the card' , card);
        card.classList.remove('flipped');
      });
      cardsInPlay = [];
      cardsclicked = 0;
    },700);
  }
}

function checkForEndOfGame() {
  if (cardsOutOfGame.length === 42) {
    alert('The game is over. You have found all of the pairs!');
    const playTime = stopWatch;
    clearInterval(stopWatch);
    scoreBoard.innerHTML = `Congratulations! It took you ${playTime}`;
  }
}

//Stopwatch:

const timer = document.querySelector('.timer');

let minutes = 0;
let seconds = 0;

const stopWatch = setInterval(() => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.innerHTML = `${formatNumber(minutes)}:${formatNumber(seconds)}`;
},1000);

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}
