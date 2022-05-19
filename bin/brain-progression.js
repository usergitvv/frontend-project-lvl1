#!/usr/bin/env node

import getProgressionAnswers from '../src/games/progression.js';
import {
  runGameProcess,
} from '../src/index.js';

runGameProcess(getProgressionAnswers());
