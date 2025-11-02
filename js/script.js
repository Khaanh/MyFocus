const quizBlock = document.querySelector("#quizBlock");
const inputResult = document.querySelector("#inputResult");
const resultBtnCheck = document.querySelector("#resultBtnCheck");
const inCorrect = document.querySelector("#inCorrect");
const correct = document.querySelector("#correct");
const answer = document.querySelector("#answer");

const numbers = Array.from({ length: 100 }, (_, i) => i);

let val1, val2, correctAnswer;
let correctCount = 1;
let inCorrectCount = -1;

function randomInt() {
	val1 = Math.floor(Math.random() * numbers.length) + 1;
	val2 = Math.floor(Math.random() * numbers.length) + 1;
	quizBlock.textContent = `${val1} + ${val2}`;
	correctAnswer = val1 + val2;

	return { val1, val2, correctAnswer };
}
randomInt();

console.log(val1, val2);

resultBtnCheck.addEventListener("click", () => {
	if (Number(inputResult.value) === correctAnswer) {
		console.log(true);
		correct.textContent = `Correct answer: ${correctCount++}`;
		answer.textContent = `${inputResult.value}`;
		inputResult.value = "";
	} else {
		console.log(false);
		inCorrect.textContent = `Incorrect answer: ${inCorrectCount--}`;
		answer.textContent = `${inputResult.value}`;
		inputResult.value = "";
	}
	randomInt();
});
