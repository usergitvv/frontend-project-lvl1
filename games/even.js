import readlineSync from 'readline-sync';

import name from '../src/cli.js';

import {
    randomNum,
} from '../index.js';

export default function gameEvenCode() {
    let i = 1;

    while (i <= 4) {
        if (i === 4) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const randNum = randomNum(1, 1000);
        console.log(`Question: ${randNum}`);
        const answerOne = readlineSync.question('Your answer: ');
        if (randNum % 2 === 0 && answerOne === 'yes') {
            console.log('Correct!');
        }
        if (randNum % 2 !== 0 && answerOne === 'no') {
            console.log('Correct!');
        }
        if (randNum % 2 === 0 && answerOne === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
            break;
        }
        if (randNum % 2 !== 0 && answerOne === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
            break;
        }
        if (answerOne !== 'yes' && answerOne !== 'no') {
            console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
            break;
        }
        i += 1;
    }
}
