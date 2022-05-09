#!./usr/bin/env node

import name from '../src/cli.js';
import gamePrimeCode from '../games/prime.js';

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gamePrimeCode();
