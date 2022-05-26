import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const resultsOfEvenRounds = [];
const gameEvenResults = [evenCondition];
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateEvenResults = () => {
  let rightEvenAnswer;
  let i = 0;
  while (i < iterationsCount) {
    const randEvenNum = getRandomNumber(1, 1000);
    rightEvenAnswer = (isEven(randEvenNum));
    resultsOfEvenRounds.push([String(randEvenNum), rightEvenAnswer]);
    i += 1;
  }
  return resultsOfEvenRounds;
};

const getEvenResults = () => {
  const arrEvenQuestionsAnswers = generateEvenResults();
  gameEvenResults.push(arrEvenQuestionsAnswers);
  return gameEvenResults;
};

export default getEvenResults;
