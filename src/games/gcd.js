import {
  roundsCount,
  runEngine,
} from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (b === 0 ? Math.abs(a) : getGcd(b, a % b));

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const answer = getGcd(number1, number2).toString();
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
};

const runGcdGame = () => {
  const rounds = generateRounds();
  return runEngine(description, rounds);
};

export default runGcdGame;
