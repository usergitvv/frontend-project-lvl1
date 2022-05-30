import getRandomNumber from '../utils.js';
import {
  iterationsCount,
  runGameProcess,
} from '../index.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const generateEvenResults = () => {
  const resultsOfEvenRounds = [];
  for (let i = 0; i < iterationsCount; i += 1) {
    const randEvenNum = getRandomNumber(1, 1000);
    const rightEvenAnswer = isEven(randEvenNum) ? 'yes' : 'no';
    resultsOfEvenRounds.push([String(randEvenNum), rightEvenAnswer]);
  }
  return resultsOfEvenRounds;
};

const runEvenGame = () => {
  const arrCalcQuestionsAnswers = generateEvenResults();
  return runGameProcess(evenCondition, arrCalcQuestionsAnswers);
};

export default runEvenGame;
