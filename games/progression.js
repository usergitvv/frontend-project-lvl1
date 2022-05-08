import readlineSync from 'readline-sync';

import name from '../src/cli.js';

import {
    randomNum,
    randomIndexTwo,
} from '../index.js';

const workingArray = () => {
    const randNum2 = randomNum(1, 10);
    let arrElem = randomNum(1, 100);
    const randArray = [];
    for (let i = 1; i <= 10; i += 1) {
        arrElem += randNum2;
        randArray.push(arrElem);
    }
    return randArray;
};

export default function gameProgressionCode() {
    let i = 1;

    while (i <= 4) {
        if (i === 4) {
            console.log(`Congratulations, ${name}!`);
            break;
        }
        const copyWorkingArray = workingArray().slice();
        const valueIndex = randomIndexTwo(copyWorkingArray);
        const elemIndex = copyWorkingArray[valueIndex];
        copyWorkingArray.splice(valueIndex, 1, '..');
        const terminalArray = copyWorkingArray.join(' ');
        console.log(`Question: ${terminalArray}`);
        const answer = readlineSync.question('Your answer: ');
        if (elemIndex === Number(answer)) {
            console.log('Correct!');
        }
        if (elemIndex !== Number(answer)) {
            console.log(`'${Number(answer)}' is wrong answer ;(. Correct answer was '${elemIndex}'.\nLet's try again, ${name}!`);
            break;
        }
        i += 1;
    }
}
