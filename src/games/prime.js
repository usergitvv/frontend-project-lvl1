import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(1, 500);
    const answer = isPrime(question) ? 'yes' : 'no';
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
};

const runPrimeGame = () => {
  const rounds = generateRounds();
  return runEngine(description, rounds);
};

export default runPrimeGame;
