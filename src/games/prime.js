import getRandomNumber from '../utils.js';
import {
  cycleIterations,
} from '../index.js';

const primeCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const arrNumbers = [];
const booleanAnswers = [];
const primeResults = [primeCondition];

function generatePrimeResults() {
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

  arrNumbers.push(randNumber);
  return (booleanAnswers, arrNumbers);
}

const getPrimeAnswers = () => {
  let i = 1;
  while (i < cycleIterations) {
    generatePrimeResults();
    i += 1;
  }

  primeResults.push(arrNumbers, booleanAnswers);
  return primeResults;
};

export default getPrimeAnswers;
