import readlineSync from 'readline-sync';

import name from '../cli.js';

import makeRandomNum from '../utils.js';

export default function makeCalcCode() {
  let i = 1;

  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const numOne = makeRandomNum(1, 100);
    const numTwo = makeRandomNum(1, 100);

    const expressionPlus = `${numOne} + ${numTwo}`;
    const expressionMinus = `${numOne} - ${numTwo}`;
    const expressionMultiplying = `${numOne} * ${numTwo}`;

    const arrOfExpressions = [
      expressionPlus,
      expressionMinus,
      expressionMultiplying,
    ];

    const randIndex = arrOfExpressions[makeRandomNum(0, arrOfExpressions.length - 1)];
    const randIndexElements = randIndex.split(' ');

    console.log(`Question: ${randIndex}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const expressionResult = () => {
      let resultOfQuestion = null;
      if (randIndex.includes('+') === true) {
        resultOfQuestion = Number(randIndexElements[0])
         + Number(randIndexElements[randIndexElements.length - 1]);
      }
      if (randIndex.includes('-') === true) {
        resultOfQuestion = Number(randIndexElements[0])
         - Number(randIndexElements[randIndexElements.length - 1]);
      }
      if (randIndex.includes('*') === true) {
        resultOfQuestion = Number(randIndexElements[0])
         * Number(randIndexElements[randIndexElements.length - 1]);
      }
      return resultOfQuestion;
    };
    if (expressionResult() === answer) {
      console.log('Correct!');
    }
    if (expressionResult() !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressionResult()}'.\
      \nLet's try again, ${name}!`);
      break;
    }
    i += 1;
  }
}
