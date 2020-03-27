import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'What is the result of the expression?';
const operators = ['+', '*', '-'];
const mathOperation = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`No ${operator} found!`);
  }
};

const gameData = () => {
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 10);
  const idx = getRandom(0, 2);
  const operator = operators[idx];
  const question = `${num1} ${operator} ${num2}`;
  const answer = mathOperation(operator, num1, num2);
  return [question, answer];
};

export default () => letsPlay(description, gameData);
