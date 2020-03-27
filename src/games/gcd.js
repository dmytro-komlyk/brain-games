import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'Find the greatest common divisor of given numbers.';
const calcGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return calcGcd(num2, num1 % num2);
};

const gameData = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const question = `${num1} ${num2}`;
  const answer = calcGcd(num1, num2);
  return [question, answer];
};

export default () => letsPlay(description, gameData);
