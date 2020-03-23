import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '*', '-'];
const randomOperator = () => operators[Math.floor(Math.random() * operators.length)];
const mathOperation = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const getCalc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = randomOperator();
  const questionGame = `${num1} ${operator} ${num2}`;
  const answerGame = mathOperation(operator, num1, num2);
  return [questionGame, answerGame];
};

export default () => letsPlay(descriptionGame, getCalc);
