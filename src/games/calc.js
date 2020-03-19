import letsPlay from '../index.js';
import randomNumber from '../math-utilities.js';

const descriptionGame = 'What is the result of the expression?';
const arrayOperators = ['+', '*', '-'];
const randomOperator = () => arrayOperators[Math.floor(Math.random() * arrayOperators.length)];

const calc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = randomOperator();
  const mathExpression = () => `${num1} ${operator} ${num2}`;
  let resultExpression;
  switch (operator) {
    case '+':
      resultExpression = num1 + num2;
      break;
    case '-':
      resultExpression = num1 - num2;
      break;
    case '*':
      resultExpression = num1 * num2;
      break;
  }
  return [mathExpression(), resultExpression];
};

export default () => letsPlay(descriptionGame, calc);