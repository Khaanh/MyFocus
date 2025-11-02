// variables
const quizBlock = document.querySelector("#quizBlock");
const inputResult = document.querySelector("#inputResult");
const resultBtnCheck = document.querySelector("#resultBtnCheck");

const incorrectCount = document.querySelector("#incorrectCount");
const correctCount = document.querySelector("#correctCount");

const numbers = Array.from({ length: 100 }, (_, i) => i);

let val1, val2, correctAnswer;
let totalCorrect = 1;
let totalInCorrect = -1;

// functions
randomInt();

resultBtnCheck.addEventListener("click", checkResult);

function randomInt() {
	val1 = Math.floor(Math.random() * numbers.length) + 1;
	val2 = Math.floor(Math.random() * numbers.length) + 1;
	quizBlock.textContent = `${val1} + ${val2}`;
	correctAnswer = val1 + val2;
	inputResult.focus();

	return { val1, val2, correctAnswer };
}

console.log(val1, val2);

function checkResult() {
	if (Number(inputResult.value) === correctAnswer) {
		console.log(true);
		correctCount.textContent = `Correct answer: ${totalCorrect++}`;
		inputResult.value = "";
		randomInt();
	} else {
		console.log(false);
		incorrectCount.textContent = `Incorrect answer: ${totalInCorrect--}`;
		inputResult.value = "";
		randomInt();
	}
}
