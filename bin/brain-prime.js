#!/usr/bin/env node

import getPrimeAnswers from '../src/games/prime.js';
import {
  generateGameProcess,
} from '../src/index.js';

generateGameProcess(getPrimeAnswers());
