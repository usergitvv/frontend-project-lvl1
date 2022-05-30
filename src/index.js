import readlineSync from 'readline-sync';

const iterationsCount = 3;

function runGameProcess(gameCondition, gameResults) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);
  for (let i = 0; i < iterationsCount; i += 1) {
    const [question, answer] = gameResults[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export {
  runGameProcess,
  iterationsCount,
};
