import getRandomNumber from '../utils.js';
import {
  iterationsCount,
} from '../index.js';

const calcCondition = 'What is the result of the expression?';
const questionsCalcArr = [];
const rightCalcAnswersArr = [];
const calcResults = [calcCondition];

const getArrOfExpressions = () => {
  const arrOfExpressions = [];
  let i = 0;
  while (i < iterationsCount) {
    const numOne = getRandomNumber(1, 100);
    const numTwo = getRandomNumber(1, 100);
    const expressionPlus = `${numOne} + ${numTwo}`;
    const expressionMinus = `${numOne} - ${numTwo}`;
    const expressionMultiplying = `${numOne} * ${numTwo}`;
    arrOfExpressions.push(expressionPlus);
    arrOfExpressions.push(expressionMinus);
    arrOfExpressions.push(expressionMultiplying);
    i += 1;
  }
  return arrOfExpressions;
};

const getQuestionsArr = () => {
  let i = 0;
  while (i < iterationsCount) {
    const copyArr = getArrOfExpressions();
    const randIndex = copyArr[getRandomNumber(0, copyArr.length - 1)];
    questionsCalcArr.push(randIndex);
    i += 1;
  }
  return questionsCalcArr;
};
getQuestionsArr();

const isSymbol = (sign, index) => {
  let isSymbolAnswer;
  if (questionsCalcArr[index].includes(sign) === true) isSymbolAnswer = true;
  return isSymbolAnswer;
};

const getRightAnswers = () => {
  let resultOfQuestion;
  let elemOfQuestionArr;
  let i = 0;
  while (i < iterationsCount) {
    elemOfQuestionArr = questionsCalcArr[i].split(' ');
    const firstArrElem = Number(elemOfQuestionArr[0]);
    const lastArrElem = Number(elemOfQuestionArr[elemOfQuestionArr.length - 1]);
    if (isSymbol('+', i)) {
      resultOfQuestion = firstArrElem + lastArrElem;
    }
    if (isSymbol('-', i)) {
      resultOfQuestion = firstArrElem - lastArrElem;
    }
    if (isSymbol('*', i)) {
      resultOfQuestion = firstArrElem * lastArrElem;
    }
    i += 1;
    rightCalcAnswersArr.push(String(resultOfQuestion));
  }
  return rightCalcAnswersArr;
};
getRightAnswers();

const getCalcResults = () => {
  calcResults.push(questionsCalcArr);
  calcResults.push(rightCalcAnswersArr);
  return calcResults;
};

export default getCalcResults;
