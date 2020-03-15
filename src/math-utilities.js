const arrayOperators = ['+', '*', '-'];
const randomNumber = () => Math.floor(Math.random() * 10) + 1;

export const randomOperator = () => arrayOperators[Math.floor(Math.random()*arrayOperators.length)];
export default randomNumber;
