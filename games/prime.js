import readlineSync from 'readline-sync';

import name from '../src/cli.js';

import {
    randomNum,
} from '../index.js';

export default function gamePrimeCode() {
    let i = 1;

    while (i <= 4) {
        if (i === 4) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const randNum = randomNum(2, 200);
        const answerBoolean = () => {
            if (randNum === 2) return true;
            if (randNum === 3) return true;
            for (let j = 2; j < randNum; j += 1) {
                if (randNum % j === 0) return false;
            }
            return true;
        };
        console.log(`Question: ${randNum}`);
        const answer = readlineSync.question('Your answer: ');
        if (answerBoolean() === true && answer === 'yes') {
            console.log('Correct!');
        }
        if (answerBoolean() !== true && answer === 'no') {
            console.log('Correct!');
        }
        if (answerBoolean() === true && answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
            break;
        }
        if (answerBoolean() !== true && answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
            break;
        }
        if (answer !== 'yes' && answer !== 'no') {
            console.log(`Your input is incorrect!\nLet's try again, ${name}!`);
            break;
        }
        i += 1;
    }
}
