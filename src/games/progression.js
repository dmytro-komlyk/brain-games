import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 9;
const getProgression = (startProgression) => {
  const progression = [startProgression];
  while (progression.length <= maxLengthProgression) {
    progression.push(progression[progression.length - 1] + 2);
  }
  return progression;
};

const gameData = () => {
  const startProgression = getRandom(1, 100);
  const progression = getProgression(startProgression);
  const idx = getRandom(0, maxLengthProgression);
  const answer = progression[idx];
  const hideNum = progression.indexOf(answer);
  progression[hideNum] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => letsPlay(description, gameData);
