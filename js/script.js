const quizBlock = document.querySelector("#quizBlock");
const numbers = Array.from({ length: 100 }, (_, i) => i);

const val1 = Math.floor(Math.random() * numbers.length) + 1;
const val2 = Math.floor(Math.random() * numbers.length) + 1;
const val3 = Math.floor(Math.random() * numbers.length) + 1;
const val4 = Math.floor(Math.random() * numbers.length) + 1;

quizBlock.innerHTML = `${val1} + ${val2}`;
