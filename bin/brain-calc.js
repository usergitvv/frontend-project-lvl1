#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import getCalcResults from '../src/games/calc.js';

runGameProcess(getCalcResults());
