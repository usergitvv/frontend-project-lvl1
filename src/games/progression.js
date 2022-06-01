import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (number, step) => {
  const workingArray = [];
  let arrElem = number;
  for (let j = 0; j < 10; j += 1) {
    arrElem += step;
    workingArray.push(arrElem);
  }
  return workingArray;
};

function generateRounds() {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const progressNum = getRandomNumber(1, 100);
    const progressStep = getRandomNumber(1, 10);
    const copyWorkingArray = makeProgression(progressNum, progressStep);
    const randomIndex = getRandomNumber(0, (copyWorkingArray.length - 1));
    const answer = copyWorkingArray[randomIndex].toString();
    copyWorkingArray.splice(randomIndex, 1, '..');
    const question = copyWorkingArray.join(' ');
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
