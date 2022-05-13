import makeRandomNum from '../utils.js';

export default function makeCalcCode() {
  const numOne = makeRandomNum(1, 100);
  const numTwo = makeRandomNum(1, 100);
  const calcCondition = 'What is the result of the expression?';

  const expressionPlus = `${numOne} + ${numTwo}`;
  const expressionMinus = `${numOne} - ${numTwo}`;
  const expressionMultiplying = `${numOne} * ${numTwo}`;

  const arrOfExpressions = [
    expressionPlus,
    expressionMinus,
    expressionMultiplying,
  ];

  const randIndex = arrOfExpressions[makeRandomNum(0, arrOfExpressions.length - 1)];
  const randIndexElements = randIndex.split(' ');
  const makeExpressionResult = () => {
    let resultOfQuestion = null;
    if (randIndex.includes('+') === true) {
      resultOfQuestion = Number(randIndexElements[0])
        + Number(randIndexElements[randIndexElements.length - 1]);
    }
    if (randIndex.includes('-') === true) {
      resultOfQuestion = Number(randIndexElements[0])
        - Number(randIndexElements[randIndexElements.length - 1]);
    }
    if (randIndex.includes('*') === true) {
      resultOfQuestion = Number(randIndexElements[0])
        * Number(randIndexElements[randIndexElements.length - 1]);
    }
    return resultOfQuestion;
  };
  const calcResults = [calcCondition, randIndex, makeExpressionResult()];
  return calcResults;
}
