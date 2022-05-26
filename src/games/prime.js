import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const primeCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const resultsOfGcdRounds = [];
const gamePrimeResults = [primeCondition];
const isPrime = (number, devider) => (number % devider === 0 ? 'no' : 'yes');

const generatePrimeResults = () => {
  let i = 0;
  while (i < iterationsCount) {
    const randPrimeNumber = getRandomNumber(2, 200);
    const getPrimeAnswer = () => {
      let primeAnswer;
      const isPrimeArr = [];
      for (let j = 2; j < randPrimeNumber; j += 1) {
        isPrimeArr.push(isPrime(randPrimeNumber, j));
      }
      if (isPrimeArr.includes('no')) {
        primeAnswer = 'no';
      } else primeAnswer = 'yes';
      return primeAnswer;
    };
    const rightPrimeAnswer = getPrimeAnswer();
    resultsOfGcdRounds.push([String(randPrimeNumber), String(rightPrimeAnswer)]);
    i += 1;
  }
  return resultsOfGcdRounds;
};

const getPrimeResults = () => {
  const arrPrimeQuestionsAnswers = generatePrimeResults();
  gamePrimeResults.push(arrPrimeQuestionsAnswers);
  return gamePrimeResults;
};

export default getPrimeResults;
