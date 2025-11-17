// variables
const quizBlock = document.querySelector("#quizBlock");
const inputResult = document.querySelector("#inputResult");
const resultBtnCheck = document.querySelector("#resultBtnCheck");
const incorrectCount = document.querySelector("#incorrectCount span");
const correctCount = document.querySelector("#correctCount span");
const modeButtonsList = document.querySelectorAll(".mode__btn");
const alertMessage = document.querySelector("#notification");

let modeSelected;
let correctAnswer;
let totalCorrect = 1;
let totalInCorrect = -1;

const numbers = Array.from({ length: 100 }, (_, i) => i);

modeButtonsList.forEach((mode) => {
	mode.addEventListener("click", (e) => {
		modeButtonsList.forEach((mode) => mode.classList.remove("is-active"));
		mode.classList.add("is-active");

		modeSelected = mode.dataset.mode;
		randomInt(modeSelected);
	});
});

// functions
resultBtnCheck.addEventListener("click", () => {
	const value = inputResult.value.trim();

	if (!modeSelected) {
		showNotification("Please choose a mode");

		inputResult.focus();
		return;
	}

	if (value === "") {
		showNotification("Please enter a value");

		inputResult.focus();
		return;
	}

	checkResult();
});

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

function checkResult() {
	if (Number(inputResult.value) === correctAnswer) {
		console.log(true);
		correctCount.textContent = `${totalCorrect++}`;
		inputResult.value = "";
		randomInt(modeSelected);
	} else {
		console.log(false);
		incorrectCount.textContent = `${totalInCorrect--}`;
		inputResult.value = "";
		randomInt(modeSelected);
	}
}

function showNotification(txt) {
	alertMessage.classList.add("is-active");
	alertMessage.textContent = `${txt}`;

	setTimeout(() => {
		alertMessage.classList.remove("is-active");
	}, 2800);
}
