import getRandomNumber from '../utils.js';
import {
  cycleIterations,
} from '../index.js';

const calcCondition = 'What is the result of the expression?';

const getArrOfExpressions = () => {
  const arrOfExpressions = [];
  let i = 1;
  while (i < cycleIterations) {
    const numOne = getRandomNumber(1, 100);
    const numTwo = getRandomNumber(1, 100);
    const expressionPlus = `${numOne} + ${numTwo}`;
    const expressionMinus = `${numOne} - ${numTwo}`;
    const expressionMultiplying = `${numOne} * ${numTwo}`;
    arrOfExpressions.push(expressionPlus);
    arrOfExpressions.push(expressionMinus);
    arrOfExpressions.push(expressionMultiplying);
    i += 1;
  }
  return arrOfExpressions;
};

const makeWorkingExpressionArr = () => {
  const calcResults = [calcCondition];
  let i = 1;
  while (i < cycleIterations) {
    const copyArr = getArrOfExpressions();
    const randIndex = copyArr[getRandomNumber(0, copyArr.length - 1)];
    calcResults.push(randIndex);
    i += 1;
  }
  return calcResults;
};

export default makeWorkingExpressionArr;
