#!/usr/bin/env node

import {
  runGameProcess,
} from '../src/index.js';
import getGcdResults from '../src/games/gcd.js';

runGameProcess(getGcdResults());
