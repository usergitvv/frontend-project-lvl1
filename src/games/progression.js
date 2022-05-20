import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const progressionCondition = 'What number is missing in the progression?';
const workingProgressArray = [];
const elemIndexArray = [];
const questionsProgressArr = [];
const progressionResults = [progressionCondition];

const generateWorkingArr = () => {
  const randNum = getRandomNumber(1, 10);
  let arrElem = getRandomNumber(1, 100);
  for (let i = 1; i <= 10; i += 1) {
    arrElem += randNum;
    workingProgressArray.push(arrElem);
  }
  return workingProgressArray;
};

function increaseDataForWorkingArr() {
  let i = 0;
  while (i < iterationsCount) {
    generateWorkingArr();
    i += 1;
  }
  return workingProgressArray;
}
increaseDataForWorkingArr();

const pieceWorkProgressArrOne = workingProgressArray.splice(20, 10);
const pieceWorkProgressArrTwo = workingProgressArray.splice(0, 10);
const workingArrayPieces = [pieceWorkProgressArrOne, pieceWorkProgressArrTwo, workingProgressArray];

function generateProgressionAnswers() {
  let i = 0;
  while (i < iterationsCount) {
    const copyWorkingArray = workingArrayPieces[i];
    const valueIndex = getRandomNumber(0, copyWorkingArray.length - 1);
    const elemIndex = copyWorkingArray[valueIndex];
    copyWorkingArray.splice(valueIndex, 1, '..');
    const terminalString = copyWorkingArray.join(' ');
    questionsProgressArr.push(terminalString);
    elemIndexArray.push(String(elemIndex));
    i += 1;
  }
}
generateProgressionAnswers();

const getProgressionResults = () => {
  progressionResults.push(questionsProgressArr);
  progressionResults.push(elemIndexArray);
  return progressionResults;
};

export default getProgressionResults;
