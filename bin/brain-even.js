#!/usr/bin/env node

import {
  generateGameProcess,
} from '../src/index.js';
import makeEvenCode from '../src/games/even.js';

generateGameProcess(makeEvenCode());
