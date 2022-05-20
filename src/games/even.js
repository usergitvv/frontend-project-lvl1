import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionsEvenArr = [];
const rightEvenAnswersArr = [];
const evenResults = [evenCondition];

const getQuestionsArr = () => {
  let randNum = null;
  let i = 0;
  while (i <= iterationsCount) {
    if (i === iterationsCount) break;
    randNum = getRandomNumber(1, 1000);
    questionsEvenArr.push(String(randNum));
    i += 1;
  }
  return questionsEvenArr;
};
getQuestionsArr();

const getRightAnswers = () => {
  let rightAnswer;
  let i = 0;
  while (i < iterationsCount) {
    if (Number(questionsEvenArr[i]) % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    rightEvenAnswersArr.push(rightAnswer);
    i += 1;
  }
  return rightEvenAnswersArr;
};
getRightAnswers();

const getEvenResults = () => {
  evenResults.push(questionsEvenArr);
  evenResults.push(rightEvenAnswersArr);
  return evenResults;
};

export default getEvenResults;
