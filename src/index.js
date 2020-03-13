import readlineSync from 'readline-sync';


const levelCount = 3;

const letsPlay = (descriptionGame, game) => {

    console.log(`Welcome to the Brain Games!`);
    const playerName = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${playerName}!`);
    console.log(descriptionGame);

    let start = 1;
    
    while (start <= levelCount) {
        const getAnswer = game();
        console.log(`Question: ${getAnswer[0]}`);
        const yourAnswer = readlineSync.question(`Your answer: `);
        let answer = Number(yourAnswer);
        if(!isFinite(yourAnswer)) answer = yourAnswer.toLowerCase();
        if(getAnswer[1] === answer) {
            console.log('Correct!')
            start += 1;
            continue;
        }
        else
        console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${getAnswer[1]}".\n Let's try again, ${playerName}!`);
        break;
    }
    if (start > levelCount) console.log(`Congratulations, ${playerName}`);
    
};

export default letsPlay;