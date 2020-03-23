import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'What number is missing in the progression?';

const getProgression = () => {
  const startProgression = randomNumber();
  const arrProgression = [startProgression];
  while (arrProgression.length < 10) {
    arrProgression.push(arrProgression[arrProgression.length - 1] + 2);
  }
  const getNumber = [Math.floor(Math.random() * arrProgression.length)];
  const answerGame = arrProgression[getNumber];
  const indexNumber = arrProgression.indexOf(answerGame);
  arrProgression[indexNumber] = '..';
  let questionGame = ' ';
  for (let i = 0; i < arrProgression.length; i += 1) {
    questionGame += `${arrProgression[i]} `;
  }
  return [questionGame, answerGame];
};

export default () => letsPlay(descriptionGame, getProgression);
