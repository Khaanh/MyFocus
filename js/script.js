// variables
const quizBlock = document.querySelector("#quizBlock");
const inputResult = document.querySelector("#inputResult");
const resultBtnCheck = document.querySelector("#resultBtnCheck");

const incorrectCount = document.querySelector("#incorrectCount");
const correctCount = document.querySelector("#correctCount");

// const btnEasy = document.querySelector("#btnEasy");
// const btnMedium = document.querySelector("#btnMedium");
// const btnHard = document.querySelector("#btnHard");
const modeButtonsList = document.querySelectorAll(".mode__btn");
// const selectedMode

const modeSelected = modeButtonsList.forEach((mode) => {
	mode.addEventListener("click", (e) => {
		console.log(mode.dataset.mode);
		return mode.dataset.mode;
	});
});

const numbers = Array.from({ length: 100 }, (_, i) => i);

let correctAnswer;
let totalCorrect = 1;
let totalInCorrect = -1;

// functions
randomInt(modeSelected);

resultBtnCheck.addEventListener("click", checkResult);

function randomInt(mode) {
	if (mode === "easy") {
		val1 = Math.floor(Math.random() * numbers.length) + 1;
		val2 = Math.floor(Math.random() * numbers.length) + 1;
		quizBlock.textContent = `${val1} + ${val2}`;
		correctAnswer = val1 + val2;
		inputResult.focus();

		return { val1, val2, correctAnswer };
	} else if (mode === "medium") {
		val1 = Math.floor(Math.random() * numbers.length) + 1;
		val2 = Math.floor(Math.random() * numbers.length) + 1;
		val3 = Math.floor(Math.random() * numbers.length) + 1;
		quizBlock.textContent = `${val1} + ${val2} + ${val3}`;
		correctAnswer = val1 + val2 + val3;
		inputResult.focus();

		return { val1, val2, val3, correctAnswer };
	} else if (mode === "hard") {
		val1 = Math.floor(Math.random() * numbers.length) + 1;
		val2 = Math.floor(Math.random() * numbers.length) + 1;
		val3 = Math.floor(Math.random() * numbers.length) + 1;
		val4 = Math.floor(Math.random() * numbers.length) + 1;
		quizBlock.textContent = `${val1} + ${val2} + ${val3} + ${val4}`;
		correctAnswer = val1 + val2 + val3 + val4;
		inputResult.focus();

		return { val1, val2, val3, val4, correctAnswer };
	} else {
		return;
	}
}

// console.log(val1, val2);

function checkResult() {
	if (Number(inputResult.value) === correctAnswer) {
		console.log(true);
		correctCount.textContent = `Correct answer: ${totalCorrect++}`;
		inputResult.value = "";
		randomInt(modeSelected);
	} else {
		console.log(false);
		incorrectCount.textContent = `Incorrect answer: ${totalInCorrect--}`;
		inputResult.value = "";
		randomInt(modeSelected);
	}
}
