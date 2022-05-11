#!/usr/bin/env node

import name from '../src/cli.js';
import makeCalcCode from '../src/games/calc.js';

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
makeCalcCode();
