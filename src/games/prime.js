import getRandomNumber from '../utils.js';
import {
  iterationsCount,
  runGameProcess,
} from '../index.js';

const primeCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeAnswer = (number) => {
  let innerAnswer;
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      innerAnswer = 'no';
      return innerAnswer;
    }
  }
  innerAnswer = 'yes';
  return innerAnswer;
};

const generatePrimeResults = () => {
  const randPrimeNumber = getRandomNumber(2, 200);
  const rightPrimeAnswer = getPrimeAnswer(randPrimeNumber);
  return [String(randPrimeNumber), rightPrimeAnswer];
};

const getResultsOfPrimeRounds = () => {
  const resultsOfPrimeRounds = [];
  for (let i = 0; i < iterationsCount; i += 1) {
    const primeAnswersQuestions = generatePrimeResults();
    resultsOfPrimeRounds.push(primeAnswersQuestions);
  }
  return resultsOfPrimeRounds;
};

const runPrimeGame = () => {
  const arrPrimeQuestionsAnswers = getResultsOfPrimeRounds();
  return runGameProcess(primeCondition, arrPrimeQuestionsAnswers);
};

export default runPrimeGame;
