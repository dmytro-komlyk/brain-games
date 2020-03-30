import letsPlay from '../index.js';
import getRandom from '../math-utilities.js';

const description = 'What is the result of the expression?';
const operators = ['+', '*', '-'];
const getCalc = (operator, num1, num2) => {
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

const getGameData = () => {
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 10);
  const idxOperator = getRandom(0, operators.length - 1);
  const operator = operators[idxOperator];
  const question = `${num1} ${operator} ${num2}`;
  const answer = getCalc(operator, num1, num2);
  return [question, String(answer)];
};

export default () => letsPlay(description, getGameData);
