import letsPlay from '../index.js';


    const randomNumber = () => Math.floor(Math.random() * 100);
    const arrayOperators = ['+', '*', '-'];
    const randomOperator = () => arrayOperators[Math.floor(Math.random()*arrayOperators.length)];
    const descriptionGame = `What is the result of the expression?`;

    const calc = () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        const operator = randomOperator()
        const mathExpression = () => `${num1} ${operator} ${num2}`;
        let resultExpression;
        switch(operator) {
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
        return [mathExpression(), resultExpression]
    };

export default () => letsPlay(descriptionGame, calc);