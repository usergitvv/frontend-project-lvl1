#!./usr/bin/env node

import name from '../src/cli.js';
import gameEvenCode from '../games/even.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEvenCode();
