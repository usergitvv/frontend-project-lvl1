#!/usr/bin/env node

import name from '../src/cli.js';
import makeProgressionCode from '../src/games/progression.js';

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
makeProgressionCode();
