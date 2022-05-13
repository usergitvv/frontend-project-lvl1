import makeRandomNum from '../utils.js';

export default function makeGcdCode() {
  const numOne = makeRandomNum(1, 100);
  const numTwo = makeRandomNum(1, 100);
  const gcdCondition = 'Find the greatest common divisor of given numbers.';

  const numMin = Math.min(numOne, numTwo);
  let result = null;
  const correctDevider = () => {
    for (let i = 1; i <= numMin; i += 1) {
      if (numOne % i === 0 && numTwo % i === 0) result = i;
    }
    return result;
  };
  const gcdResults = [gcdCondition, numOne, numTwo, correctDevider()];
  return gcdResults;
}
