import letsPlay from '../index.js';

    const descriptionGame = `Answer "yes" if the number is even, otherwise answer "no".`;
    const randomNumber = () => Math.floor(Math.random() * 100);

    const even = (answer, number) => { 
        let result = [true, 'no'];
        if (number % 2 === 0) result[1] = 'yes'
        if (number % 2 === 0 && answer.toLowerCase() === 'yes' || number % 2 !== 0 && answer.toLowerCase() === 'no') {
            return result;
        } else
        result[0] = false
        return result;
    };
    
export default () => letsPlay(descriptionGame, randomNumber, even);