import readlineSync from 'readline-sync';

import name from '../cli.js';

import makeRandomNum from '../utils.js';

export default function makeEvenCode() {
  let i = 1;

  while (i <= 4) {
    if (i === 4) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    const randNum = makeRandomNum(1, 1000);
    console.log(`Question: ${randNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (randNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (randNum % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (randNum % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
    if (randNum % 2 !== 0 && answer === 'yes') {
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
