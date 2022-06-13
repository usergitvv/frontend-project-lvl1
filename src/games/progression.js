import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (number, step) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(number + index * step);
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
  const results = generateRounds();
  return runEngine(description, results);
};

export default runProgressionGame;
