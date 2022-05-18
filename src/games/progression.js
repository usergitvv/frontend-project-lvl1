import getRandomNumber from '../utils.js';
import {
  cycleIterations,
} from '../index.js';

const progressionCondition = 'What number is missing in the progression?';
const workingArray = [];
const terminalStringArray = [];
const elemIndexArray = [];
const progressionResults = [progressionCondition];

const generateWorkingArray = () => {
  const randNum = getRandomNumber(1, 10);
  let arrElem = getRandomNumber(1, 100);
  for (let i = 1; i <= 10; i += 1) {
    arrElem += randNum;
    workingArray.push(arrElem);
  }
  return workingArray;
};

function generateStringForWorkingArr() {
  let i = 1;
  while (i < 4) {
    generateWorkingArray();
    i += 1;
  }
  return workingArray;
}

generateStringForWorkingArr();
const pieceWorkingArrOne = workingArray.splice(20, 10);
const pieceWorkingArrTwo = workingArray.splice(0, 10);
const workingArrayPieces = [pieceWorkingArrOne, pieceWorkingArrTwo, workingArray];

export default function getProgressionAnswers() {
  let i = 1;
  while (i < cycleIterations) {
    const copyWorkingArray = workingArrayPieces[i - 1];
    const valueIndex = getRandomNumber(0, copyWorkingArray.length - 1);
    const elemIndex = copyWorkingArray[valueIndex];
    copyWorkingArray.splice(valueIndex, 1, '..');
    const terminalString = copyWorkingArray.join(' ');
    terminalStringArray.push(terminalString);
    elemIndexArray.push(elemIndex);
    i += 1;
  }
  progressionResults.push(terminalStringArray);
  progressionResults.push(elemIndexArray);
  return progressionResults;
}
