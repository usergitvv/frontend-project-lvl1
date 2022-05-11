#!/usr/bin/env node

import name from '../src/cli.js';
import makePrimeCode from '../src/games/prime.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
makePrimeCode();
