import getRandomNumber from '../utils.js';
import {
  cycleIterations,
} from '../index.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeEvenCode = () => {
  let randNum = null;
  const evenResults = [evenCondition];
  let i = 1;
  while (i <= cycleIterations) {
    if (i === cycleIterations) break;
    randNum = getRandomNumber(1, 1000);
    evenResults.push(randNum);
    i += 1;
  }
  return evenResults;
};

export default makeEvenCode;
