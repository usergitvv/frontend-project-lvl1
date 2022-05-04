import readlineSync from 'readline-sync';

import name from '../src/cli.js';

import {
    randomNum,
    randomIndex,
} from '../index.js';

export default function gameCalcCode() {
    let i = 1;

    while (i <= 4) {
        if (i === 4) {
            console.log(`Congratulations, ${name}!`);
            break;
        }

        const numOne = randomNum(1, 100);
        const numTwo = randomNum(1, 100);

        const expressionPlus = `${numOne} + ${numTwo}`;
        const expressionMinus = `${numOne} - ${numTwo}`;
        const expressionMultiplying = `${numOne} * ${numTwo}`;

        const arrOfExpressions = [
            expressionPlus,
            expressionMinus,
            expressionMultiplying,
        ];

        const randIndex = randomIndex(arrOfExpressions);
        const randIndexElements = randIndex.split(' ');

        console.log(`Question: ${randIndex}`);
        const answer = Number(readlineSync.question('Your answer: '));
        const expressionResult = () => {
            let resultOfQuestion = null;
            if (randIndex.includes('+') === true) {
                resultOfQuestion = Number(randIndexElements[0]) + Number(randIndexElements[randIndexElements.length - 1]);
            }
            if (randIndex.includes('-') === true) {
                resultOfQuestion = Number(randIndexElements[0]) - Number(randIndexElements[randIndexElements.length - 1]);
            }
            if (randIndex.includes('*') === true) {
                resultOfQuestion = Number(randIndexElements[0]) * Number(randIndexElements[randIndexElements.length - 1]);
            }
            return resultOfQuestion;
        };
        if (expressionResult() === answer) {
            console.log('Correct!');
        }
        if (expressionResult() !== answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressionResult()}'.\nLet's try again, ${name}!`);
            break;
        }
        i += 1;
    }
}
