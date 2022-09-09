/*----- constants -----*/
/*
const TIMER_DURATION = NUMBER


*/

/*----- app's state (variables) -----*/
/*

currentCard = null
change from null to obj with renderCard

currentDeckArray (?)
array[card the user clicked] = currentCard

number of incorrect cards

3 most recent cards
recent0 = when currentCard changes, store its value here just before that change happens
recent1 = when recent0 changes, store its value here before that change happens
recent2 = when recent1 changes, store its value here before that change happens

max streak count

For stretch goals: 
decks the user has compiled.

*/
const currentCard = {
	title: null,
	question: null,
	answer: null,
};
currentDeck = [
	{
		title: 'title0',
		question: 'question0',
		answer: 'answer0',
	},
	{
		title: 'title1',
		question: 'question1',
		answer: 'answer1',
	},
	{
		title: 'title2',
		question: 'question2',
		answer: 'answer2',
	},
	{
		title: 'title3',
		question: 'question3',
		answer: 'answer3',
	},
	{
		title: 'title4',
		question: 'question4',
		answer: 'answer4',
	},
];

// let
/*----- cached element references -----*/
/*
current streak count
maxStreak


*/
const currentTitle = document.querySelector('.current-title');

const currentQuestion = document.querySelector('.current-question');

const currentAnswer = document.querySelector('.current-answer');

const addButton = document.querySelector('.add');

const form = document.querySelector('form');

// const editButton = document.querySelector('.edit');

// const deleteButton = document.querySelector('.delete');

const cardZero = document.querySelector('.zero');

const cardOne = document.querySelector('.one');

const cardTwo = document.querySelector('.two');

const cardThree = document.querySelector('.three');

const cardFour = document.querySelector('.four');

let cardNumber = null;

/*----- event listeners -----*/

//onclick for the 3 buttons, to add/edit/delete cards,
// addButton.addEventListener('click', addCard);

form.addEventListener('submit', addCard);

// editButton.addEventListener('click', editCardForm);

// deleteButton.addEventListener('click', deleteCurrentCard);
//card.addEventListener('mousover', functionDISPLAYNICEBORDERHIDDENINCSS)
cardZero.addEventListener('click', renderCard);
cardOne.addEventListener('click', renderCard);
cardTwo.addEventListener('click', renderCard);
cardThree.addEventListener('click', renderCard);
cardFour.addEventListener('click', renderCard);
/* 
onclick to select a card,
document.addEventListener('click', selectCard)
document.addEventListener('hover', highlightCard)
onhover to highlight a card? 


onclick (or something?) to flip a card

*/

/*----- functions -----*/
/*
func streakCurrent {
    count the number of 'correct' answers user has gotten consecutively 
    grab the current-streak btn and set it to this number.
}

func streakMax {
    if (streakCurrent > streak max) {
        streakMax = streakCurrent;
    } 
}
*/
//function renderCardForm() {
//
// render form
// own button, own event listener, from here rec dat, add to currentDeck[]
//}

function addCard(e) {
	e.preventDefault();
	newCardTitle = e.target.elements[0].value;
	newCardQuestion = e.target.elements[1].value;
	newCardAnswer = e.target.elements[2].value;
	let card = {
		title: newCardTitle,
		question: newCardQuestion,
		answer: newCardAnswer,
	};
	currentDeck.push(card);
	// console.log(currentDeck);
}

function renderCard(event) {
	event.preventDefault();

	cardNumber = event.target.id;
	console.log(cardNumber);

	// console.log(event.target);

	currentCard.title = currentDeck[cardNumber].title;

	currentCard.question = currentDeck[cardNumber].question;

	currentCard.answer = currentDeck[cardNumber].answer;

	//grab values stored at currentDeck[cardClicked]

	//set currentCard = same values of card object at currentDeck[cardNumberClicked]

	//display current card values by overwriting the corresponding innerText values

	currentTitle.innerText = currentCard.title;

	currentQuestion.innerText = currentCard.question;

	currentAnswer.innerText = currentCard.answer;
}

// function renderCard(card) {
// 	//if currentCard !== null {
//currentCard = null;
//}
// render clickedCard
// }

// function editCard() {
// 	console.log('editing');
// }

// function deleteCurrentCard() {
// 	console.log('deleting');
// }

/*
POSSIBLE SOLUTION TO CARD SELECTION USING ARROW KEYS?:
https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript

const callback = {
    "ArrowLeft"  : leftHandler,
    "ArrowRight" : rightHandler,
    "ArrowUp"    : upHandler,
    "ArrowDown"  : downHandler,
}[event.key]
callback?.()
 */
// currentDeck[0].question;

/**
 * create vent listener when click bottom screen, grabbing appro index number
 */
