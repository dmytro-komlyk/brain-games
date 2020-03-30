import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const question = getRandom(1, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => letsPlay(description, getGameData);
