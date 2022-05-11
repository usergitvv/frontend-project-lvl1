#!/usr/bin/env node

import name from '../src/cli.js';
import makeGcdCode from '../src/games/gcd.js';

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
makeGcdCode();
