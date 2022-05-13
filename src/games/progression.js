import makeRandomNum from '../utils.js';

const makeWorkingArray = () => {
  const randNum2 = makeRandomNum(1, 10);
  let arrElem = makeRandomNum(1, 100);
  const randArray = [];
  for (let i = 1; i <= 10; i += 1) {
    arrElem += randNum2;
    randArray.push(arrElem);
  }
  return randArray;
};

export default function makeProgressionCode() {
  const progressionCondition = 'What number is missing in the progression?';
  const copyWorkingArray = makeWorkingArray().slice();
  const valueIndex = makeRandomNum(0, copyWorkingArray.length - 1);
  const elemIndex = copyWorkingArray[valueIndex];
  copyWorkingArray.splice(valueIndex, 1, '..');
  const terminalArray = copyWorkingArray.join(' ');
  const progressionResults = [progressionCondition, terminalArray, elemIndex];
  return progressionResults;
}
