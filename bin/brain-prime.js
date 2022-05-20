#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import getPrimeResults from '../src/games/prime.js';

runGameProcess(getPrimeResults());
