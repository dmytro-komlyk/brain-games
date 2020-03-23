import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const calcGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return calcGcd(num2, num1 % num2);
};

const getGcd = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const questionGame = `${num1} ${num2}`;
  return [questionGame, calcGcd(num1, num2)];
};

export default () => letsPlay(descriptionGame, getGcd);
