const quizBlock = document.querySelector("#quizBlock");
const quizResult = document.querySelector("#quizResult");
const quizBtnCheck = document.querySelector("#quizBtnCheck");
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

quizBtnCheck.addEventListener("click", () => {
	if (Number(quizResult.value) === correctAnswer) {
		console.log(true);
		correct.textContent = `Correct answer: ${correctCount++}`;
		answer.textContent = `${quizResult.value}`;
		quizResult.value = "";
	} else {
		console.log(false);
		inCorrect.textContent = `Incorrect answer: ${inCorrectCount--}`;
		answer.textContent = `${quizResult.value}`;
		quizResult.value = "";
	}
	randomInt();
});
