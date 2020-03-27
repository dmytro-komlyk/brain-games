import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;


const gameData = () => {
  const question = getRandom(1, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => letsPlay(description, gameData);
