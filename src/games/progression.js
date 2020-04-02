import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 9;

const getProgression = (start, maxLength, step) => {
  const progression = [start];
  while (progression.length <= maxLength) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
};

const getGameData = () => {
  const startMember = getRandom(1, 100);
  const stepProgression = getRandom(1, 10);
  const progression = getProgression(startMember, maxLengthProgression, stepProgression);
  const indexHiddenElement = getRandom(0, maxLengthProgression);
  const answer = progression[indexHiddenElement];
  progression[indexHiddenElement] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => letsPlay(description, getGameData);
