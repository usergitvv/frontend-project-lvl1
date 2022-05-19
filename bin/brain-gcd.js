#!/usr/bin/env node

import getGcdAnswers from '../src/games/gcd.js';
import {
  runGameProcess,
} from '../src/index.js';

runGameProcess(getGcdAnswers());
