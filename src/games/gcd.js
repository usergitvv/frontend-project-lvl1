import { iterationsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gcdCondition = 'Find the greatest common divisor of given numbers.';

const rightGcdAnswersArr = [];
const workingGcdArray = [];
const gcdResults = [gcdCondition];

function generateGcdResults() {
  let i = 0;
  while (i < iterationsCount) {
    const randNumOne = getRandomNumber(1, 100);
    const randNumTwo = getRandomNumber(1, 100);
    workingGcdArray.push(randNumOne, randNumTwo);
    const correctDevider = () => {
      const numMin = Math.min(randNumOne, randNumTwo);
      let result;
      for (let j = 1; j <= numMin; j += 1) {
        if (randNumOne % j === 0 && randNumTwo % j === 0) result = j;
      }
      rightGcdAnswersArr.push(String(result));
    };
    i += 1;
    correctDevider();
  }
}
generateGcdResults();

const pieceWorkGcdArrOne = workingGcdArray.splice(0, 2);
const pieceWorkGcdArrTwo = workingGcdArray.splice(2, 2);
const questionsGcdArr = [pieceWorkGcdArrOne.join(' '), workingGcdArray.join(' '), pieceWorkGcdArrTwo.join(' ')];

const getGcdResults = () => {
  gcdResults.push(questionsGcdArr);
  gcdResults.push(rightGcdAnswersArr);
  return gcdResults;
};

export default getGcdResults;
