import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getEven = () => {
  const num = randomNumber();
  return (isEven(num)) ? [num, 'yes'] : [num, 'no'];
};

export default () => letsPlay(descriptionGame, getEven);
