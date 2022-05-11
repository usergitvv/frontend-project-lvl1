#!/usr/bin/env node

import name from '../src/cli.js';
import makeEvenCode from '../src/games/even.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
makeEvenCode();
