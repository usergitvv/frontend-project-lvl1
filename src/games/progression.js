import getRandomNumber from '../utils.js';
import {
  iterationsCount,
  runGameProcess,
} from '../index.js';

const progressionCondition = 'What number is missing in the progression?';

const generateWorkingArr = () => {
  const workingArray = [];
  const randProgressNum = getRandomNumber(1, 10);
  let arrElem = getRandomNumber(1, 100);
  for (let j = 0; j < 10; j += 1) {
    arrElem += randProgressNum;
    workingArray.push(arrElem);
  }
  return workingArray;
};

function generateProgressQuestonsAnswers() {
  const resultsOfProgressRounds = [];
  for (let i = 0; i < iterationsCount; i += 1) {
    const copyWorkingArray = generateWorkingArr();
    const valueIndex = getRandomNumber(0, (copyWorkingArray.length - 1));
    const elemIndex = copyWorkingArray[valueIndex];
    copyWorkingArray.splice(valueIndex, 1, '..');
    const terminalString = copyWorkingArray.join(' ');
    resultsOfProgressRounds.push([terminalString, String(elemIndex)]);
  }
  return resultsOfProgressRounds;
}

const runProgressionGame = () => {
  const arrProgressQuestionsAnswers = generateProgressQuestonsAnswers();
  return runGameProcess(progressionCondition, arrProgressQuestionsAnswers);
};

export default runProgressionGame;
