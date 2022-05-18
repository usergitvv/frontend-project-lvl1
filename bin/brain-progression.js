#!/usr/bin/env node

import getProgressionAnswers from '../src/games/progression.js';
import {
  generateGameProcess,
} from '../src/index.js';

generateGameProcess(getProgressionAnswers());
