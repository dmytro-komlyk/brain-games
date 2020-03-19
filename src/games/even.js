import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const parityCheck = (num) => num % 2 === 0;

const even = () => {
  const num = randomNumber();
  if (parityCheck(num)) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};

export default () => letsPlay(descriptionGame, even);