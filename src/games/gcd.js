import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

const getGameData = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, String(answer)];
};

export default () => letsPlay(description, getGameData);
