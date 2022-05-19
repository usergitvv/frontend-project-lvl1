#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import makeWorkingExpressionArr from '../src/games/calc.js';

runGameProcess(makeWorkingExpressionArr());
