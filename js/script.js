const quizBlock = document.querySelector("#quizBlock");
const quizResult = document.querySelector("#quizResult");
const quizBtnCheck = document.querySelector("#quizBtnCheck");
const answer = document.querySelector("#answer");

const numbers = Array.from({ length: 100 }, (_, i) => i);

let val1, val2, correctAnswer;

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
		answer.textContent = `${quizResult.value}`;
	} else {
		console.log(false);
		answer.textContent = `${quizResult.value}`;
	}
	randomInt();
});
