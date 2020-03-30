import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 9;

const getProgression = (startProgression) => {
  const progression = [startProgression];
  const stepProgression = getRandom(1, 10);
  while (progression.length <= maxLengthProgression) {
    progression.push(progression[progression.length - 1] + stepProgression);
  }
  return progression;
};

const getGameData = () => {
  const startProgression = getRandom(1, 100);
  const progression = getProgression(startProgression);
  const idxHiddenNum = getRandom(0, maxLengthProgression);
  const answer = progression[idxHiddenNum];
  const hiddenNum = progression.indexOf(answer);
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => letsPlay(description, getGameData);
