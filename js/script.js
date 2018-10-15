//MVP:

class Card {
  constructor(boxNumber, side, gameStatus ) {
    this.boxNumber = boxNumber;
    this.side = side;
    this.gameStatus = gameStatus;
  }
}

const Card1 = new Card(0, 0, 0);
const Card2 = new Card(0, 0, 0);
const Card3 = new Card(1, 0, 0);
const Card4 = new Card(1, 0, 0);
const Card5 = new Card(2, 0, 0);
const Card6 = new Card(2, 0, 0);
const Card7 = new Card(3, 0, 0);
const Card8 = new Card(3, 0, 0);
const Card9 = new Card(4, 0, 0);
const Card10 = new Card(4, 0, 0);
const Card11 = new Card(5, 0, 0);
const Card12 = new Card(5, 0, 0);
const Card13 = new Card(6, 0, 0);
const Card14 = new Card(6, 0, 0);
const Card15 = new Card(7, 0, 0);
const Card16 = new Card(7, 0, 0);
const Card17 = new Card(8, 0, 0);
const Card18 = new Card(8, 0, 0);
const Card19 = new Card(9, 0, 0);
const Card20 = new Card(9, 0, 0);
const Card21 = new Card(10, 0, 0);
const Card22 = new Card(10, 0, 0);
const Card23 = new Card(11, 0, 0);
const Card24 = new Card(11, 0, 0);
const Card25 = new Card(12, 0, 0);
const Card26 = new Card(12, 0, 0);
const Card27 = new Card(13, 0, 0);
const Card28 = new Card(13, 0, 0);
const Card29 = new Card(14, 0, 0);
const Card30 = new Card(14, 0, 0);
const Card31 = new Card(15, 0, 0);
const Card32 = new Card(15, 0, 0);
const Card33 = new Card(16, 0, 0);
const Card34 = new Card(16, 0, 0);
const Card35 = new Card(17, 0, 0);
const Card36 = new Card(17, 0, 0);
const Card37 = new Card(18, 0, 0);
const Card38 = new Card(18, 0, 0);
const Card39 = new Card(19, 0, 0);
const Card40 = new Card(19, 0, 0);
const Card41 = new Card(20, 0, 0);
const Card42 = new Card(20, 0, 0);



const arrayAllCards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8,
  Card9, Card10, Card11, Card12, Card13, Card14, Card15, Card16, Card17, Card18,
  Card19, Card20, Card21, Card22, Card23, Card24, Card25, Card26, Card27, Card28,
  Card29, Card30, Card31, Card32, Card33, Card34, Card35, Card36, Card37, Card38,
  Card39, Card40, Card41, Card42];



const allCards = document.getElementsByTagName('img');

function checkForPairs() {
return  const boxNumberOfClickedCard1 = event.target.Card.boxNumber;
console.log('This is the  the clicked card ' , boxNumberOfClickedCard1);
//HEY ELLIE/MATT : I WANT TO STORE THE BOXNUMBER OF THE CARD THAT I CLICKED ON
//IN A CONST, SO THAT I CAN COMPARE IT TO THE BOXNUMBER OF THE SECOND CARD that
// I HAVE CLICKED ON. THE BOXNUMBER IS A PROPERTY OF THE CARD OBJECT, SO I have
// HAVE TRIED TO USE EVENT.TARGET AND CARD.BOXNUMBER, BUT IT DIDN'T WORK. CAN you
// MAYBE HELP ME WITH THAT?
}



arrayAllCards.forEach( function () {
  return  allCards.addEventListener('click', checkForPairs);
});


if (boxNumberOfClickedCard1 === boxNumberOfClickedCard2) {
  alert('You have found a pair!');
  event.target.style.color = white;
  event.target.
} else {
  alert('This is not a pair :( try again');
}



// 4- event-listener- function check for pairs:
//  get the class of the card and store it in a const
// when 2nd card is clicked --> flip the card over + store the class
// of the card in a const
//compare the 2 const : if they are equal: message: it's a pair!
// + turn the div to background-color = make the cards disappear
//(evtl make them appear on heap on the side)
// if the 2 const are not equal, flip the cards over again and
//continue palying
// 5- flip the card OVER
// 6 - check for win




//SET THE CARDS TO OBJECTS
//each card is an object with the properties: class BoxNuber, position (?),
//side(facedown/up)(?), class :is it still in the game or not

//CREATE AN ARRAY OF THE OBJECTS

//CREATE START-BUTTON:
//should be DOM-Elemnt so that you can add EVENTLISTENER to it that runs the
//function setTheGameConditions

// FUNCTION setTheGameConditions:
// that runs when START button is clicked :
// 1) change the positions of the cards randomly
// 2)loop through array (forEach) and attribute
//event-listener-function to all of the elements/cards

//EVENTLISTENER FUNCTION: WHAT HAPPENS WHEN YOU CLICK ON A CARD:
//event-listener-function: has 2 parts
// 1) flip the card over:
//        if button is clicked --> flip the card over
//FLIP THE CARDS OVER
//how to flip the card over?
//google: what can rotate do?, and can you put an image over an image
//and then remove it? should I use an animation for that?
// 2)check for pairs
//  get the class of the card and store it in a const
// when 2nd card is clicked --> flip the card over + store the class
// of the card in a const
//compare the 2 const : if they are equal: message: it's a pair!
// + turn the div to background-color = make the cards disappear
//(evtl make them appear on heap on the side)
// if the 2 const are not equal, flip the cards over again and
//continue palying


//DETERMINE IF THE GAME IS OVER:
//maybe, give all the card-objects that have turned into background-color a
//class of "out of the game"
//then, do function checkForEndOfGame and run in each time when pair is found
// (still in event-listener function)
// checkForEndOfGame should : loops thorugh array of objects, if all objects
// have a class of "out of the game", message: The gamer is over, congrats!
// +  stop the timer + save the time in a const and add it to player object



//ABOVE MVP:

//TIMER:
//How can I create a timer?--> google? timing function? cf soltuion code HW with
//timer of 10 sec
// create start button with event-listener: if it is clicked, start the TIMER
// timer is stopped in checkForEndOfGame

//SHUFFLE AGAIN IF MORE THAN HALF OF THE PAIRS ARE GONE:
//create a function shuffleAgain, it runs when only 10 pairs are left:
//check how many objects have the class of "out of the game"
// if 22 objects have that class: change the positions of all cards randomly

//DISPLAY HOW MANY PAIRS HAVE BEEN FOUND:
//create a <p>: Number of pairs found = i;(make it DOM element)
//in the function that checks for pairs, if it is a pair, do i++ ,
//modifiy the text-content of the p to Number of pairs found = i
// (or does that happen automtically when u do i++?)



//EXTRAS:


//SAVE HIGHSCORES
// store the time and username in an Userobject (do classes for that?)
//compare times of all the objects: save the objects in an array, loop through
//it with forEach and that way order it from the shortest time to the highest
// display the first 5 objects of the array in the highscore table with time + names


//SOUND:
//add into EVENTLISTENER function: in the part check for pairs: make a sound it
// is a pair
//maybe also make a different sound when the card is flipped over


//LEVELS:
//create new card-objects and add them to the array
//+ create bigger grid

//ADD SECOND PLAYER: DO YOU WANNA PLAY ALONE OR AGAINST SOMEONE?
