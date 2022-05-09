#!./usr/bin/env node

import name from '../src/cli.js';
import gameProgressionCode from '../games/progression.js';

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
gameProgressionCode();
