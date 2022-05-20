#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import getEvenResults from '../src/games/even.js';

runGameProcess(getEvenResults());
