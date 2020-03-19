import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const num = randomNumber();
  let counter = 1;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) counter += 1;
  }
  return (counter <= 1) ? [num, 'yes'] : [num, 'no'];
};

export default () => letsPlay(descriptionGame, prime);
