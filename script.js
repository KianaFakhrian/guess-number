'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let max = 0;
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      setMessage('⛔ No number');
    } else if (guess === number) {
      setMessage('well done!😄');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = String(number);
      document.querySelector('.number').style.width = '30rem';
      if (max < score) {
        max = score;
      }
      document.querySelector('.highscore').textContent = max;

      setScore(score);
      score = 20;
    } else if (guess !== number) {
      setMessage(guess > number ? 'Lower 👇' : 'Upper ☝️');
      score--;

      setScore(score);
    } else {
      setMessage('You Lost !');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  let number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  setMessage('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  setScore(20);
});
