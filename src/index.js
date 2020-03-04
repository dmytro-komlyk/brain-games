import readlineSync from 'readline-sync';


const letsPlay = () => {
    console.log(`Welcome to the Brain Games!\n`);
    console.log(`May I have your name?`);
    const playerName = readlineSync.question(`Your answer: `);
    console.log(`Hello, ${playerName}!`);
}
export default letsPlay;