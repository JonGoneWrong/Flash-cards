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
let currentCard = {
	question: null,
	answer: null,
};
currentDeck = [
	{ question: '2 x 3', answer: '6' },
	{ question: '3 x 5', answer: '15' },
	{ question: '5 x 8', answer: '40' },
	{ question: '8 x 13', answer: '104' },
	{ question: '13 x 21', answer: '273' },
];

// let
/*----- cached element references -----*/
/*
current streak count
maxStreak


*/
const currentQuestion = document.querySelector('.current-question');

const currentAnswer = document.querySelector('.current-answer');

const addButton = document.querySelector('.add');

const hideAnswersButton = document.querySelector('.hide-answers');
const hideQuestionsButton = document.querySelector('.hide-questions');
const showBothButton = document.querySelector('.show-both');

const form = document.querySelector('form');

// const editButton = document.querySelector('.edit');

// const deleteButton = document.querySelector('.delete');

const cardZero = document.querySelector('.zero');

const cardOne = document.querySelector('.one');

const cardTwo = document.querySelector('.two');

const cardThree = document.querySelector('.three');

const cardFour = document.querySelector('.four');

// let cardNumber = null;

/*----- event listeners -----*/

form.addEventListener('submit', addCard);

addButton.addEventListener('click', addCard);
hideAnswersButton.addEventListener('click', hideAnswers);
hideQuestionsButton.addEventListener('click', hideQuestions);
showBothButton.addEventListener('click', showBoth);

// editButton.addEventListener('click', editCardForm);

// deleteButton.addEventListener('click', deleteCurrentCard);

cardZero.addEventListener('click', renderCard);
cardOne.addEventListener('click', renderCard);
cardTwo.addEventListener('click', renderCard);
cardThree.addEventListener('click', renderCard);
cardFour.addEventListener('click', renderCard);

/* 
onclick to select a card,
document.addEventListener('click', selectCard)

onclick (or something?) to "flip" a card
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

// render form
// own button, own event listener, from here rec dat, add to currentDeck[]
//}

function addCard(e) {
	e.preventDefault();
	newCardQuestion = e.target.elements[0].value;
	newCardAnswer = e.target.elements[1].value;
	let card = {
		question: newCardQuestion,
		answer: newCardAnswer,
	};
	currentDeck.push(card);
	// console.log(currentDeck);
	//something here to add the new card and add it to the list of cards under the 'deck-scroll' div. maybe
}

function renderCard(event) {
	event.preventDefault();

	let cardNumber = null;

	cardNumber = event.target.id;
	console.log(cardNumber);

	currentCard.question = currentDeck[cardNumber].question;

	currentCard.answer = currentDeck[cardNumber].answer;

	currentQuestion.innerText = currentCard.question;

	currentAnswer.innerText = currentCard.answer;
}

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
create event listener when click bottom screen, grabbing appro index number
 */

function hideAnswers(e) {
	hideAnswersButton.style.visibility = 'hidden';
}

function hideQuestions(e) {
	hideQuestionsButton.style.visibility = 'hidden';
}
function showBoth(e) {
	hideAnswersButton.style.visibility = 'visible';
	hideQuestionsButton.style.visibility = 'visible';
}
