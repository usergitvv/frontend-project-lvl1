import { iterationsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gcdCondition = 'Find the greatest common divisor of given numbers.';

const arrNumbers = [];
const rightAnswers = [];
const gcdResults = [gcdCondition];

function generateGcdResults() {
  const randNumOne = getRandomNumber(1, 100);
  const randNumTwo = getRandomNumber(1, 100);
  arrNumbers.push(randNumOne, randNumTwo);
  const correctDevider = () => {
    const numMin = Math.min(randNumOne, randNumTwo);
    let result;
    for (let i = 1; i <= numMin; i += 1) {
      if (randNumOne % i === 0 && randNumTwo % i === 0) result = i;
    }
    rightAnswers.push(result);
  };
  correctDevider();
}

const getGcdAnswers = () => {
  let i = 1;
  while (i < iterationsCount) {
    generateGcdResults();
    i += 1;
  }

  gcdResults.push(arrNumbers, rightAnswers);
  return gcdResults;
};

export default getGcdAnswers;
