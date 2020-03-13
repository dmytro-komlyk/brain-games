import letsPlay from '../index.js';

    const randomNumber = () => Math.floor(Math.random() * 100);

    const descriptionGame = `Find the greatest common divisor of given numbers.`;
    const calcGcd = (num1, num2) => (num2 === 0 ? num1 : calcGcd(num2, num1 % num2));

    const gcd = () => {
        const num1 = randomNumber();
        const num2 = randomNumber();
        const expression = () => `${num1} ${num2}`;
        return [expression(), calcGcd(num1, num2)]
    };

export default () => letsPlay(descriptionGame, gcd);