import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
const iterationsCount = 4;

function runGameProcess(workingFunction) {
  console.log(`Hello, ${name}!`);
  console.log(workingFunction[0]);
  if (workingFunction[0] === 'What is the result of the expression?') {
    let resultOfQuestion;
    let elementsOfQuestion;

    for (let i = 1; i <= iterationsCount; i += 1) {
      if (i === 4) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      console.log(`Question: ${workingFunction[i]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (workingFunction[i].includes('+') === true) {
        elementsOfQuestion = workingFunction[i].split(' ');
        resultOfQuestion = Number(elementsOfQuestion[0])
        + Number(elementsOfQuestion[elementsOfQuestion.length - 1]);
      }
      if (workingFunction[i].includes('-') === true) {
        elementsOfQuestion = workingFunction[i].split(' ');
        resultOfQuestion = Number(elementsOfQuestion[0])
        - Number(elementsOfQuestion[elementsOfQuestion.length - 1]);
      }
      if (workingFunction[i].includes('*') === true) {
        elementsOfQuestion = workingFunction[i].split(' ');
        resultOfQuestion = Number(elementsOfQuestion[0])
          * Number(elementsOfQuestion[elementsOfQuestion.length - 1]);
      }
      if (String(resultOfQuestion) === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${String(resultOfQuestion)}'.\
          \nLet's try again, ${name}!`);
        break;
      }
    }
  }
  if (workingFunction[0] === 'Answer "yes" if the number is even, otherwise answer "no".') {
    for (let i = 0; i <= 3; i += 1) {
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      console.log(`Question: ${workingFunction[1][i]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (workingFunction[1][i] % 2 === 0 && userAnswer === 'yes') {
        console.log('Correct!');
      }
      if (workingFunction[1][i] % 2 !== 0 && userAnswer === 'no') {
        console.log('Correct!');
      }
      if (workingFunction[1][i] % 2 === 0 && userAnswer === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
      }
      if (workingFunction[1][i] % 2 !== 0 && userAnswer === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        break;
      }
      if (userAnswer !== 'yes' && userAnswer !== 'no') {
        console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
        break;
      }
    }
  }
  if (workingFunction[0] === 'Find the greatest common divisor of given numbers.') {
    let x = 0;
    let y = 1;
    for (let i = 1; i <= iterationsCount; i += 1) {
      if (i === 4) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      console.log(`Question: ${workingFunction[1][x]} ${workingFunction[1][y]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const userAnswerNum = Number(userAnswer);
      x += 2;
      y += 2;
      if (workingFunction[2][i - 1] === userAnswerNum) {
        console.log('Correct!');
      }
      if (workingFunction[2][i - 1] !== userAnswerNum) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${workingFunction[2][i - 1]}'.\
          \nLet's try again, ${name}!`);
        break;
      }
    }
  }
  if (workingFunction[0] === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
    for (let i = 1; i <= iterationsCount; i += 1) {
      if (i === 4) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      console.log(`Question: ${workingFunction[1][i - 1]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (workingFunction[2][i - 1] === true && userAnswer === 'yes') {
        console.log('Correct!');
      }
      if (workingFunction[2][i - 1] !== true && userAnswer === 'no') {
        console.log('Correct!');
      }
      if (workingFunction[2][i - 1] === true && userAnswer === 'no') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
      }
      if (workingFunction[2][i - 1] !== true && userAnswer === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        break;
      }
      if (userAnswer !== 'yes' && userAnswer !== 'no') {
        console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
        break;
      }
    }
  }
  if (workingFunction[0] === 'What number is missing in the progression?') {
    for (let i = 1; i <= iterationsCount; i += 1) {
      if (i === 4) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
      console.log(`Question: ${workingFunction[1][i - 1]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const userAnswerNum = Number(userAnswer);
      if (workingFunction[2][i - 1] === userAnswerNum) {
        console.log('Correct!');
      }
      if (workingFunction[2][i - 1] !== userAnswerNum) {
        console.log(`'${userAnswerNum}'\
        \b\b\b\b\b\b\bis wrong answer ;(. Correct answer was '${workingFunction[2][i - 1]}'.\
        \nLet's try again, ${name}!`);
        break;
      }
    }
  }
}

export {
  runGameProcess,
  iterationsCount,
  name,
};
