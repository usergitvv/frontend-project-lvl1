import {
  iterationsCount,
  runGameProcess,
} from '../index.js';
import getRandomNumber from '../utils.js';

const gcdCondition = 'Find the greatest common divisor of given numbers.';
const algorithmOfEuclid = (a, b) => (b === 0 ? Math.abs(a) : algorithmOfEuclid(b, a % b));

const generateGcdResults = () => {
  const resultsOfGcdRounds = [];
  for (let i = 0; i < iterationsCount; i += 1) {
    const randGcdNumOne = getRandomNumber(1, 100);
    const randGcdNumTwo = getRandomNumber(1, 100);
    const resultAlgorithmOfEuclid = algorithmOfEuclid(randGcdNumOne, randGcdNumTwo);
    resultsOfGcdRounds.push([String(`${randGcdNumOne} ${randGcdNumTwo}`), String(resultAlgorithmOfEuclid)]);
  }
  return resultsOfGcdRounds;
};

const runGcdGame = () => {
  const arrGcdQuestionsAnswers = generateGcdResults();
  return runGameProcess(gcdCondition, arrGcdQuestionsAnswers);
};

export default runGcdGame;
