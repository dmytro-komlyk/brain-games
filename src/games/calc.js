import letsPlay from '../index.js';

    const randomNumber = () => Math.floor(Math.random() * 10);
    const arrayOperators = ['+', '*', '-'];
    const randomOperator = () => arrayOperators[Math.floor(Math.random()*arrayOperators.length)];

    const descriptionGame = `What is the result of the expression?`;
    const mathExpression = () => `${randomNumber()} ${randomOperator()} ${randomNumber()}`;

    const calc = (answer, expression) => {
        const arrExpression = expression.split(' ');
        let resultExpression;
        switch(arrExpression[1]) {
            case '+':
                resultExpression = Number(arrExpression[0]) + Number(arrExpression[2]);
              break;
            case '-':
                resultExpression = Number(arrExpression[0]) - Number(arrExpression[2]);
              break;
            case '*':
                resultExpression = Number(arrExpression[0]) * Number(arrExpression[2]);
              break;
          }
        let result = [true, resultExpression];
        if (Number(answer) === resultExpression) { 
            return result;
        } else {
            result[0] = false
            return result;
        }
    };

export default () => letsPlay(descriptionGame, mathExpression, calc);