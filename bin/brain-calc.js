#!/usr/bin/env node

import {
  generateGameProcess,
} from '../src/index.js';
import makeWorkingExpressionArr from '../src/games/calc.js';

generateGameProcess(makeWorkingExpressionArr());
