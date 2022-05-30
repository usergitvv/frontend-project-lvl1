import getRandomNumber from '../utils.js';
import {
  iterationsCount,
  runGameProcess,
} from '../index.js';

const calcCondition = 'What is the result of the expression?';

const makeMathOperation = (elem1, sign, elem2) => {
  switch (sign) {
    case '+':
      return elem1 + elem2;
    case '-':
      return elem1 - elem2;
    case '*':
      return elem1 * elem2;
    default:
      throw new Error(`Unknown order state: '${makeMathOperation}'!`);
  }
};

const generateCalcResults = () => {
  const resultsOfCalcRounds = [];
  const strOperators = ['+', '-', '*'];
  let resultOfQuestion;
  for (let i = 0; i < iterationsCount; i += 1) {
    const randCalcNumOne = getRandomNumber(1, 100);
    const randCalcNumTwo = getRandomNumber(1, 100);
    const randomOperator = strOperators[getRandomNumber(0, strOperators.length - 1)];
    resultOfQuestion = makeMathOperation(randCalcNumOne, randomOperator, randCalcNumTwo);
    resultsOfCalcRounds.push([String(`${randCalcNumOne} ${randomOperator} ${randCalcNumTwo}`), String(resultOfQuestion)]);
  }
  return resultsOfCalcRounds;
};

const runCalcGame = () => {
  const arrCalcQuestionsAnswers = generateCalcResults();
  return runGameProcess(calcCondition, arrCalcQuestionsAnswers);
};

export default runCalcGame;
