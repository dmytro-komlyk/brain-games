import readlineSync from 'readline-sync';


const levelCount = 3;

const letsPlay = (descriptionGame, question, game) => {

    console.log(`Welcome to the Brain Games!\n`);
    const playerName = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${playerName}!`);
    console.log(descriptionGame);

    let start = 1;
    let yourAnswer, questionGame;

    while (start <= levelCount) {
        questionGame = question();
        console.log(`Question: ${questionGame}`);
        yourAnswer = readlineSync.question(`Your answer: `)
        const getAnswer = game(yourAnswer, questionGame)
        if(getAnswer[0]) {
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