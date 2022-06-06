import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (number, step) => {
  const iterationsCount = 9;
  const progression = [number];
  for (let j = 0; j < iterationsCount; j += 1) {
    progression.push(progression[j] + step);
  }
  return progression;
};

function generateRounds() {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const progressNum = getRandomNumber(1, 100);
    const progressStep = getRandomNumber(1, 10);
    const copyProgression = makeProgression(progressNum, progressStep);
    const hiddenElementIndex = getRandomNumber(0, (copyProgression.length - 1));
    const answer = copyProgression[hiddenElementIndex].toString();
    copyProgression[hiddenElementIndex] = '..';
    const question = copyProgression.join(' ');
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
}

const runProgressionGame = () => {
  const rounds = generateRounds();
  return runEngine(description, rounds);
};

export default runProgressionGame;
