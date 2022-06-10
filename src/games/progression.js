import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (firstElem, index, step) => firstElem + index * step;

const getProgressionResult = () => {
  const progression = [];
  const progressNum = getRandomNumber(1, 100);
  const progressStep = getRandomNumber(1, 10);
  for (let j = 0; j < progressionLength; j += 1) {
    progression.push(makeProgression(progressNum, j, progressStep));
  }
  return progression;
};

function generateRounds() {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const copyProgression = getProgressionResult();
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
