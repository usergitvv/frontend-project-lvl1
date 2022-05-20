import readlineSync from 'readline-sync';

const iterationsCount = 3;

function runGameProcess(workingFunction) {
  const [gameCondition, gameQuestion, gameAnswer] = workingFunction;
  const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);
  for (let i = 0; i <= iterationsCount; i += 1) {
    if (i === iterationsCount) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    console.log(`Question: ${gameQuestion[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gameAnswer[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer[i]}'.\
        \nLet's try again, ${name}!`);
      break;
    }
  }
}

export {
  runGameProcess,
  iterationsCount,
};
