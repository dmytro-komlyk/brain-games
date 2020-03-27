import readlineSync from 'readline-sync';

const levelCount = 3;

const letsPlay = (descriptionGame, getGame) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(descriptionGame);
  for (let start = 1; start <= levelCount; start += 1) {
    const getAnswer = getGame();
    console.log(`Question: ${getAnswer[0]}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answer = (Number(yourAnswer) + 1) ? Number(yourAnswer) : yourAnswer.toLowerCase();
    if (getAnswer[1] !== answer) {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${getAnswer[1]}".\n Let's try again, ${playerName}!`);
      break;
    }
    console.log('Correct!');
    if (start === levelCount) {
      console.log(`Congratulations, ${playerName}`);
    }
  }
};

export default letsPlay;
