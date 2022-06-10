import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(1, 1000);
    const answer = isEven(question) ? 'yes' : 'no';
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
};

const runEvenGame = () => {
  const results = generateRounds();
  return runEngine(description, results);
};

export default runEvenGame;
