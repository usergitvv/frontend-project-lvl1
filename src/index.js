import readlineSync from 'readline-sync';
import name from './cli.js';
import makeEvenCode from './games/even.js';
import makeCalcCode from './games/calc.js';
import makeGcdCode from './games/gcd.js';
import makePrimeCode from './games/prime.js';
import makeProgressionCode from './games/progression.js';

function makeGreeting() {
  return console.log(`Hello, ${name}!`);
}

function workEngineEven() {
  const evenInfoOne = makeEvenCode();
  console.log(`Hello, ${name}!`);
  console.log(evenInfoOne[0]);
  let i = 1;
  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const evenInfoTwo = makeEvenCode();
    console.log(`Question: ${evenInfoTwo[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (evenInfoTwo[1] % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    }
    if (evenInfoTwo[1] % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    }
    if (evenInfoTwo[1] % 2 === 0 && userAnswer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
    if (evenInfoTwo[1] % 2 !== 0 && userAnswer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}

function workEngineCalc() {
  const calcInfoOne = makeCalcCode();
  console.log(`Hello, ${name}!`);
  console.log(calcInfoOne[0]);
  let i = 1;
  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const calcInfoTwo = makeCalcCode();
    console.log(`Question: ${calcInfoTwo[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNum = Number(userAnswer);
    if (calcInfoTwo[2] === userAnswerNum) {
      console.log('Correct!');
    }
    if (calcInfoTwo[2] !== userAnswerNum) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcInfoTwo[2]}'.\
        \nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}

function workEngineGcd() {
  const gcdInfoOne = makeGcdCode();
  console.log(`Hello, ${name}!`);
  console.log(gcdInfoOne[0]);
  let i = 1;
  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const gcdInfoTwo = makeGcdCode();
    console.log(`Question: ${gcdInfoTwo[1]} ${gcdInfoTwo[2]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNum = Number(userAnswer);
    if (gcdInfoTwo[3] === userAnswerNum) {
      console.log('Correct!');
    }
    if (gcdInfoTwo[3] !== userAnswerNum) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcdInfoTwo[3]}'.\
        \nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}

function workEnginePrime() {
  const primeInfoOne = makePrimeCode();
  console.log(`Hello, ${name}!`);
  console.log(primeInfoOne[0]);
  let i = 1;
  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const primeInfoTwo = makePrimeCode();
    console.log(`Question: ${primeInfoTwo[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (primeInfoTwo[2] === true && userAnswer === 'yes') {
      console.log('Correct!');
    }
    if (primeInfoTwo[2] !== true && userAnswer === 'no') {
      console.log('Correct!');
    }
    if (primeInfoTwo[2] === true && userAnswer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
    if (primeInfoTwo[2] !== true && userAnswer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}

function workEngineProgression() {
  const progressInfoOne = makeProgressionCode();
  console.log(`Hello, ${name}!`);
  console.log(progressInfoOne[0]);
  let i = 1;
  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const progressInfoTwo = makeProgressionCode();
    console.log(`Question: ${progressInfoTwo[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNum = Number(userAnswer);
    if (progressInfoTwo[2] === userAnswerNum) {
      console.log('Correct!');
    }
    if (progressInfoTwo[2] !== userAnswerNum) {
      console.log(`'${userAnswerNum}' \
      \b\b\b\b\b\bis wrong answer ;(. Correct answer was '${progressInfoTwo[2]}'.\
      \nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}

export {
  makeGreeting,
  workEngineEven,
  workEngineCalc,
  workEngineGcd,
  workEnginePrime,
  workEngineProgression,
};
