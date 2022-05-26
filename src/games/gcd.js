import { iterationsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gcdCondition = 'Find the greatest common divisor of given numbers.';
const resultsOfGcdRounds = [];
const gameGcdResults = [gcdCondition];

const generateGcdResults = () => {
  let i = 0;
  while (i < iterationsCount) {
    const randGcdNumOne = getRandomNumber(1, 100);
    const randGcdNumTwo = getRandomNumber(1, 100);
    const getCorrectDevider = () => {
      const numMin = Math.min(randGcdNumOne, randGcdNumTwo);
      let greatCommonDevider;
      for (let j = 1; j <= numMin; j += 1) {
        if (randGcdNumOne % j === 0 && randGcdNumTwo % j === 0) greatCommonDevider = j;
      }
      resultsOfGcdRounds.push([String(`${randGcdNumOne} ${randGcdNumTwo}`), String(greatCommonDevider)]);
    };
    i += 1;
    getCorrectDevider();
  }
  return resultsOfGcdRounds;
};

const getGcdResults = () => {
  const arrGcdQuestionsAnswers = generateGcdResults();
  gameGcdResults.push(arrGcdQuestionsAnswers);
  return gameGcdResults;
};

export default getGcdResults;
