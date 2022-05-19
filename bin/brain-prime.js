#!/usr/bin/env node

import getPrimeAnswers from '../src/games/prime.js';
import {
  runGameProcess,
} from '../src/index.js';

runGameProcess(getPrimeAnswers());
