#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import getProgressionResults from '../src/games/progression.js';

runGameProcess(getProgressionResults());
