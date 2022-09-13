/*
MVP:
pre-load data,
some way for user to choose which 'side' of the card to see
buttons navigable by keyboard
able to add cards.

stretch goals:
incorrect cards, max streak count, decks the user has compiled, a timer
*/
/*----- constants -----*/

/*----- app's state (variables) -----*/

let currentCard = {
	question: null,
	answer: null,
};
currentDeck = [
	{ question: '2 x 3', answer: 6, answerPool: [4, 5, 6, 9] },
	{ question: '3 x 5', answer: 15, answerPool: [8, 12, 15, 20] },
	{ question: '5 x 8', answer: 40, answerPool: [35, 40, 11, 12] },
	{ question: '8 x 13', answer: 104, answerPool: [91, 96, 104, 112] },
	{ question: '13 x 21', answer: 273, answerPool: [273, 291, 260, 283] },
];

/*----- cached element references -----*/

const currentQuestion = document.querySelector('.current-question');

const currentAnswer = document.querySelector('.current-answer');

const answerBox = document.querySelector('.answer-box');
const answerChoices = document.querySelectorAll('.answer-choice');
const firstAnswerChoice = document.querySelector('.a');
const secondAnswerChoice = document.querySelector('.b');
const thirdAnswerChoice = document.querySelector('.c');
const fourthAnswerChoice = document.querySelector('.d');

const addButton = document.querySelector('.add');
const form = document.querySelector('form');
const cancelButton = document.querySelector('.cancel');

const deckScroll = document.querySelector('.deck-scroll');

let cardNumber = null;

function render() {
	for (let i = 0; i < currentDeck.length; i++) {
		let card = document.createElement('div');
		deckScroll.appendChild(card);
		let cardQuestion = document.createElement('div');
		let cardAnswer = document.createElement('div');
		card.classList.add('card');
		card.setAttribute('id', `${i}`);
		cardQuestion.classList.add('question');
		cardAnswer.classList.add('answer');
		card.appendChild(cardQuestion);
		card.appendChild(cardAnswer);
		cardQuestion.innerHTML = currentDeck[i].question;
		cardAnswer.innerHTML = currentDeck[i].answer;
	}
}

render();

const showAnswersButton = document.querySelector('.show-answers');
const hideAnswersButton = document.querySelector('.hide-answers');
// const allAnswers = document.querySelectorAll('.answer');

/*----- event listeners -----*/
// answerChoices.addEventListener('click', checkAnswer);
firstAnswerChoice.addEventListener('click', checkAnswer);
secondAnswerChoice.addEventListener('click', checkAnswer);
thirdAnswerChoice.addEventListener('click', checkAnswer);
fourthAnswerChoice.addEventListener('click', checkAnswer);

form.addEventListener('submit', newCard);

addButton.addEventListener('click', function () {
	form.style.display = 'block';
	cancelButton.style.display = 'block';
	addButton.style.display = 'none';
});
cancelButton.addEventListener('click', function () {
	form.style.display = 'none';
	cancelButton.style.display = 'none';
	addButton.style.display = 'block';
});

showAnswersButton.addEventListener('click', showAnswers);
hideAnswersButton.addEventListener('click', hideAnswers);

deckScroll.addEventListener('click', renderCard);

/*----- functions -----*/

function newCard(submit) {
	submit.preventDefault();
	newCardQuestion = submit.target.elements[0].value;
	newCardAnswer = submit.target.elements[1].value;
	// newCardWrongAnswers = submit.target.elements[2].value;
	let newCard = {
		question: newCardQuestion,
		answer: newCardAnswer,
		// answerPool: newCardAnswer,
		// newCardWrongAnswers,
	};
	currentDeck.push(newCard);
	form.style.display = 'none';
	cancelButton.style.display = 'none';
	addButton.style.display = 'block';

	let card = document.createElement('div');

	deckScroll.appendChild(card);

	let cardQuestion = document.createElement('div');
	let cardAnswer = document.createElement('div');

	card.classList.add('card');
	card.setAttribute('id', `${currentDeck.length - 1}`);
	cardQuestion.classList.add('question');
	cardAnswer.classList.add('answer');
	card.appendChild(cardQuestion);
	card.appendChild(cardAnswer);
	cardQuestion.innerHTML = currentDeck[currentDeck.length - 1].question;
	cardAnswer.innerHTML = currentDeck[currentDeck.length - 1].answer;
	submit.target.elements[0].value = '';
	submit.target.elements[1].value = '';
}

function renderCard(event) {
	event.preventDefault();

	cardNumber = event.target.id;

	currentCard.question = currentDeck[cardNumber].question;

	currentCard.answer = currentDeck[cardNumber].answer;

	currentQuestion.innerText = currentCard.question;

	currentAnswer.innerText = currentCard.answer;

	let availableAnswers = [];
	while (availableAnswers.length < 4) {
		let newAnswer =
			currentDeck[cardNumber].answerPool[Math.floor(Math.random() * 4)];
		if (availableAnswers.includes(newAnswer)) {
		} else {
			availableAnswers.push(newAnswer);
		}
	}
	answerChoices.forEach(function (element, i) {
		element.innerText = availableAnswers[i];
	});
}

function showAnswers(e) {
	const allAnswers = document.querySelectorAll('.answer');
	allAnswers.forEach(function (element) {
		element.style.visibility = 'visible';
	});
}
function hideAnswers(e) {
	const allAnswers = document.querySelectorAll('.answer');
	allAnswers.forEach(function (element) {
		element.style.visibility = 'hidden';
	});
}

// let attempts = 0;
function checkAnswer(e) {
	// if (attempts < 2) {
	if (e.target.innerHTML == currentAnswer.innerHTML) {
		alert('Correct!');
		// let attempts = 0;
	} else {
		alert('Try again.');
		// attempts++;
	}
	// } else if (attempts >= 2) {
	// 	alert('Incorrect.');
	// 	return;
	// }
	// }
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
