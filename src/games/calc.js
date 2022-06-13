import getRandomNumber from '../utils.js';
import {
  roundsCount,
  runEngine,
} from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, sign, number2) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state, this math operation is absent: ${sign}!`);
  }
};

const generateRounds = () => {
  const rounds = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${number1} ${randomOperator} ${number2}`;
    const answer = calculate(number1, randomOperator, number2).toString();
    const round = [question, answer];
    rounds.push(round);
  }
  return rounds;
};

const runCalcGame = () => {
  const results = generateRounds();
  return runEngine(description, results);
};

export default runCalcGame;
