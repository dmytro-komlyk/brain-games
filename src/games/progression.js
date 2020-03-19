import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'What number is missing in the progression?';

const progression = () => {
  const startProgression = randomNumber();
  const arrProgression = [startProgression];
  while (arrProgression.length < 10) {
    arrProgression.push(arrProgression[arrProgression.length - 1] + 2);
  }
  const getNumber = [Math.floor(Math.random() * arrProgression.length)];
  const randNumber = arrProgression[getNumber];
  const indexNumber = arrProgression.indexOf(randNumber);
  arrProgression[indexNumber] = '..';
  let expression = ' ';
  for (let i = 0; i < arrProgression.length; i += 1) {
    expression += `${arrProgression[i]} `;
  }
  return [expression, randNumber];
};

export default () => letsPlay(descriptionGame, progression);
