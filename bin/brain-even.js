#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import makeEvenCode from '../src/games/even.js';

runGameProcess(makeEvenCode());
