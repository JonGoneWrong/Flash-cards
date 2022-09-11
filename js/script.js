/*----- constants -----*/
/*
stretch goals:
const TIMER_DURATION = NUMBER
*/

/*----- app's state (variables) -----*/
/*
stretch goals: 
incorrect cards
max streak count
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

/*----- cached element references -----*/

const currentQuestion = document.querySelector('.current-question');

const currentAnswer = document.querySelector('.current-answer');

const addButton = document.querySelector('.add');
const form = document.querySelector('form');
const cancelButton = document.querySelector('.cancel');

// const editButton = document.querySelector('.edit');

const deleteButton = document.querySelector('.delete');

const cardZero = document.querySelector('.zero');

const cardOne = document.querySelector('.one');

const cardTwo = document.querySelector('.two');

const cardThree = document.querySelector('.three');

const cardFour = document.querySelector('.four');

const deckScroll = document.querySelector('.deck-scroll');

let cardNumber = null;

function render() {
	for (let i = 0; i < currentDeck.length; i++) {
		let card = document.createElement('div');
		deckScroll.appendChild(card);
		let cardQuestion = document.createElement('div');
		let cardAnswer = document.createElement('div');
		card.classList.add('card', 'zero');
		card.setAttribute('id', `${i}`);
		cardQuestion.classList.add('card-zero', 'question');
		cardAnswer.classList.add('card-zero', 'answer');
		card.appendChild(cardQuestion);
		card.appendChild(cardAnswer);
		cardQuestion.innerHTML = currentDeck[i].question;
		cardAnswer.innerHTML = currentDeck[i].answer;
	}
}

render();

const hideQuestionsButton = document.querySelector('.hide-questions');
const allQuestions = document.querySelectorAll('.question');

const hideAnswersButton = document.querySelector('.hide-answers');
const allAnswers = document.querySelectorAll('.answer');

const showBothButton = document.querySelector('.show-both');

/*----- event listeners -----*/

form.addEventListener('submit', newCard);

addButton.addEventListener('click', function () {
	form.style.display = 'block';
	addButton.style.display = 'none';
	deleteButton.style.display = 'none';
});
// editButton.addEventListener('click', editCardForm);
deleteButton.addEventListener('click', deleteCurrentCard);
cancelButton.addEventListener('click', function () {
	form.style.display = 'none';
	addButton.style.display = 'block';
	deleteButton.style.display = 'block';
});

hideQuestionsButton.addEventListener('click', hideQuestions);
hideAnswersButton.addEventListener('click', hideAnswers);
showBothButton.addEventListener('click', showBoth);

deckScroll.addEventListener('click', renderCard);

/*----- functions -----*/
/*
stretch goals:
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
function newCard(e) {
	e.preventDefault();
	newCardQuestion = e.target.elements[0].value;
	newCardAnswer = e.target.elements[1].value;
	let newCard = {
		question: newCardQuestion,
		answer: newCardAnswer,
	};
	currentDeck.push(newCard);
	form.style.display = 'none';
	addButton.style.display = 'block';
	deleteButton.style.display = 'block';

	let card = document.createElement('div');
	deckScroll.appendChild(card);
	let cardQuestion = document.createElement('div');
	let cardAnswer = document.createElement('div');
	card.classList.add('card', 'zero');
	card.setAttribute('id', `${currentDeck.length - 1}`);
	cardQuestion.classList.add('card-zero', 'question');
	cardAnswer.classList.add('card-zero', 'answer');
	card.appendChild(cardQuestion);
	card.appendChild(cardAnswer);
	cardQuestion.innerHTML = currentDeck[currentDeck.length - 1].question;
	cardAnswer.innerHTML = currentDeck[currentDeck.length - 1].answer;
}

function renderCard(event) {
	event.preventDefault();

	cardNumber = event.target.id;

	currentCard.question = currentDeck[cardNumber].question;

	currentCard.answer = currentDeck[cardNumber].answer;

	currentQuestion.innerText = currentCard.question;

	currentAnswer.innerText = currentCard.answer;
}

// function editCard() {
// 	console.log('editing');
// }

function deleteCurrentCard() {
	console.log('deleting');
}

function hideQuestions(e) {
	// if (hideQuestionsButton.innerText == 'Hide Questions') {
	// 	hideQuestionsButton.innerText = 'Show Questions';
	// } else {
	// 	hideQuestionsButton.innerText = 'Hide Questions';
	// }
	allQuestions.forEach(function (element) {
		element.style.visibility = 'hidden';
	});
}
function hideAnswers(e) {
	allAnswers.forEach(function (element) {
		element.style.visibility = 'hidden';
	});
}
function showBoth(e) {
	allQuestions.forEach(function (element) {
		element.style.visibility = 'visible';
	});
	allAnswers.forEach(function (element) {
		element.style.visibility = 'visible';
	});
}

/*POSSIBLE SOLUTION TO CARD SELECTION USING ARROW KEYS?:
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

/*
MVP:
pre-load data
some way for user to choose which 'side' of the card to see
buttons navigable by keyboard
able to add and delete cards from deck.
*/
