import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (first, length, step) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    progression.push(first + index * step);
  }
  return progression;
};

function generateRounds() {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(1, 100);
    const progressionStep = getRandomNumber(1, 10);
    const progression = makeProgression(firstNumber, progressionLength, progressionStep);
    const hiddenElementIndex = getRandomNumber(0, (progression.length - 1));
    const answer = progression[hiddenElementIndex].toString();
    progression[hiddenElementIndex] = '..';
    const question = progression.join(' ');
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
}

const runProgressionGame = () => {
  const results = generateRounds();
  return runEngine(description, results);
};

export default runProgressionGame;
