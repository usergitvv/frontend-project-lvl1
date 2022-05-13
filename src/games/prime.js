import makeRandomNum from '../utils.js';

export default function makePrimeCode() {
  const randNum = makeRandomNum(2, 200);
  const primeCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const makeAnswerBoolean = () => {
    if (randNum === 2) return true;
    if (randNum === 3) return true;
    for (let j = 2; j < randNum; j += 1) {
      if (randNum % j === 0) return false;
    }
    return true;
  };
  const primeResults = [primeCondition, randNum, makeAnswerBoolean()];
  return primeResults;
}
