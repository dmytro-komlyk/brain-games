import readlineSync from 'readline-sync';

const levelsCount = 3;

const letsPlay = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  for (let level = 1; level <= levelsCount; level += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer !== playerAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};

export default letsPlay;
