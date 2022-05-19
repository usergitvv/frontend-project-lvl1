import getRandomNumber from '../utils.js';
// import {
//   iterationsCount,
// } from '../index.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const arrOfRandNumbers = [];

const makeEvenCode = () => {
  let randNum = null;
  const evenResults = [evenCondition];
  let i = 0;
  while (i <= 3) {
    if (i === 3) break;
    randNum = getRandomNumber(1, 1000);
    arrOfRandNumbers.push(randNum);
    i += 1;
  }
  evenResults.push(arrOfRandNumbers);
  return evenResults;
};

export default makeEvenCode;
