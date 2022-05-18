#!/usr/bin/env node

import getGcdAnswers from '../src/games/gcd.js';
import {
  generateGameProcess,
} from '../src/index.js';

generateGameProcess(getGcdAnswers());
