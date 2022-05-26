import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const calcCondition = 'What is the result of the expression?';
const resultsOfCalcRounds = [];
const gameCalcResults = [calcCondition];

const getMathOperator = () => {
  const strOperators = ['+', '-', '*'];
  const randomOperator = strOperators[getRandomNumber(0, strOperators.length - 1)];
  return randomOperator;
};

const generateCalcResults = () => {
  let resultOfQuestion;
  let questionString;
  let i = 0;
  while (i < iterationsCount) {
    const randCalcNumOne = getRandomNumber(1, 100);
    const randCalcNumTwo = getRandomNumber(1, 100);
    switch (getMathOperator()) {
      case '+':
        resultOfQuestion = randCalcNumOne + randCalcNumTwo;
        questionString = `${randCalcNumOne} + ${randCalcNumTwo}`;
        break;
      case '-':
        resultOfQuestion = randCalcNumOne - randCalcNumTwo;
        questionString = `${randCalcNumOne} - ${randCalcNumTwo}`;
        break;
      case '*':
        resultOfQuestion = randCalcNumOne * randCalcNumTwo;
        questionString = `${randCalcNumOne} * ${randCalcNumTwo}`;
        break;
      default:
        throw new Error(`Unknown order state: '${getMathOperator}'!`);
    }
    i += 1;
    resultsOfCalcRounds.push([String(questionString), String(resultOfQuestion)]);
  }
  return resultsOfCalcRounds;
};

const getCalcResults = () => {
  const arrCalcQuestionsAnswers = generateCalcResults();
  gameCalcResults.push(arrCalcQuestionsAnswers);
  return gameCalcResults;
};

export default getCalcResults;
