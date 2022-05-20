import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const primeCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionsPrimeArr = [];
const booleanAnswers = [];
const rightPrimeAnswersArr = [];
const primeResults = [primeCondition];

function generatePrimeResults() {
  let i = 0;
  while (i < iterationsCount) {
    const randNumber = getRandomNumber(2, 200);
    const makeAnswerBoolean = () => {
      if (randNumber === 2) return true;
      if (randNumber === 3) return true;
      for (let j = 2; j < randNumber; j += 1) {
        if (randNumber % j === 0) return false;
      }
      return true;
    };
    booleanAnswers.push(makeAnswerBoolean());
    questionsPrimeArr.push(String(randNumber));
    i += 1;
  }
  return (booleanAnswers, questionsPrimeArr);
}
generatePrimeResults();

const getRightAnswers = () => {
  let rightAnswer;
  let i = 0;
  while (i < iterationsCount) {
    if (booleanAnswers[i] === true) rightAnswer = 'yes';
    else rightAnswer = 'no';
    rightPrimeAnswersArr.push(rightAnswer);
    i += 1;
  }
  return rightPrimeAnswersArr;
};
getRightAnswers();

const getPrimeResults = () => {
  primeResults.push(questionsPrimeArr, rightPrimeAnswersArr);
  return primeResults;
};

export default getPrimeResults;
