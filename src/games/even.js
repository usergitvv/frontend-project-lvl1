import makeRandomNum from '../utils.js';

function makeEvenCode() {
  const randNum = makeRandomNum(1, 1000);
  const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenResults = [evenCondition, randNum];
  return evenResults;
}

export default makeEvenCode;
