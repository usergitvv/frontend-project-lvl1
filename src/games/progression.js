import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const progressionCondition = 'What number is missing in the progression?';
let workingArray = [];
const draftQuestionsArr = [];
const resultsOfGcdRounds = [];
const gameProgressionResults = [progressionCondition];

const generateWorkingArr = () => {
  workingArray = [];
  const randProgressNum = getRandomNumber(1, 10);
  let arrElem = getRandomNumber(1, 100);
  for (let j = 0; j < 10; j += 1) {
    arrElem += randProgressNum;
    workingArray.push(arrElem);
  }
  return workingArray;
};

function increaseDataForWorkingArr() {
  let i = 0;
  while (i < iterationsCount) {
    const workQuestionsArr = generateWorkingArr();
    draftQuestionsArr.push(workQuestionsArr);
    i += 1;
  }
  return draftQuestionsArr;
}

function generateProgressQuestonsAnswers() {
  const copyWorkingArray = increaseDataForWorkingArr();
  let i = 0;
  while (i < iterationsCount) {
    const itemOfWorkingArray = copyWorkingArray[i];
    const valueIndex = getRandomNumber(0, (itemOfWorkingArray.length - 1));
    const elemIndex = itemOfWorkingArray[valueIndex];
    itemOfWorkingArray.splice(valueIndex, 1, '..');
    const terminalString = itemOfWorkingArray.join(' ');
    resultsOfGcdRounds.push([terminalString, String(elemIndex)]);
    i += 1;
  }
  return resultsOfGcdRounds;
}

const getProgressionResults = () => {
  const arrProgressQuestionsAnswers = generateProgressQuestonsAnswers();
  gameProgressionResults.push(arrProgressQuestionsAnswers);
  return gameProgressionResults;
};

export default getProgressionResults;
