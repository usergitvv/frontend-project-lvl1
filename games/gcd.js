import readlineSync from 'readline-sync';

import name from '../src/cli.js';

import {
    randomNum,
} from '../index.js';

export default function gameGcdCode() {
    let j = 1;

    while (j <= 4) {
        if (j === 4) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const numOne = randomNum(1, 100);
        const numTwo = randomNum(1, 100);

        const numMin = Math.min(numOne, numTwo);
        let result = null;
        const correctDevider = () => {
            for (let i = 1; i <= numMin; i += 1) {
                if (numOne % i === 0 && numTwo % i === 0) result = i;
            }
            return result;
        };
        console.log(`Question: ${numOne} ${numTwo}`);
        const userInput = readlineSync.question('Your answer: ');
        const answer = Number(userInput);
        if (correctDevider() === answer) {
            console.log('Correct!');
        }
        if (correctDevider() !== answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctDevider()}'.\nLet's try again, ${name}!`);
            break;
        }
        j += 1;
    }
}
