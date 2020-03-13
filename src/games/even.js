import letsPlay from '../index.js';


    const randomNumber = () => Math.floor(Math.random() * 100);
    const descriptionGame = `Answer "yes" if the number is even, otherwise answer "no".`;
    
    const even = () => {
        const num = randomNumber();
        if (num % 2 === 0) {
            return [num, 'yes']
        }
        return [num, 'no']
    };
    
export default () => letsPlay(descriptionGame, even);