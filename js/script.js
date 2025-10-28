const quizBlock = document.querySelector("#quizBlock");
const quizResult = document.querySelector("#quizResult");
const quizBtnCheck = document.querySelector("#quizBtnCheck");
const answer = document.querySelector("#answer");

const numbers = Array.from({ length: 100 }, (_, i) => i);

const val1 = Math.floor(Math.random() * numbers.length) + 1;
const val2 = Math.floor(Math.random() * numbers.length) + 1;
const val3 = Math.floor(Math.random() * numbers.length) + 1;
const val4 = Math.floor(Math.random() * numbers.length) + 1;

const correctAnswer = val1 + val2;
quizBlock.innerHTML = `${val1} + ${val2}`;

quizBtnCheck.addEventListener("click", () => {
	if (Number(quizResult.value) === correctAnswer) {
		console.log(true);
		answer.textContent = `${quizResult.value}`;
	} else {
		console.log(false);
		answer.textContent = `${quizResult.value}`;
	}
});
