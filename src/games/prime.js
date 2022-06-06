import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, devider) => (number % devider === 0);

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(2, 500);
    let answer = 'yes';
    for (let j = 2; j < question; j += 1) {
      const expectedAnswer = isPrime(question, j) ? 'no' : 'yes';
      switch (expectedAnswer) {
        case 'no':
          answer = 'no';
          break;
        default:
          break;
      }
    }
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
