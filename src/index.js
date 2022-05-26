import readlineSync from 'readline-sync';

const iterationsCount = 3;

function runGameProcess(brainGame) {
  const [gameCondition, gameResults] = brainGame;
  const condition = gameCondition;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  for (let i = 0; i <= iterationsCount; i += 1) {
    if (i === iterationsCount) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const [question, answer] = gameResults[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export {
  runGameProcess,
  iterationsCount,
};
