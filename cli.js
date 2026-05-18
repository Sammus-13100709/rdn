#!/usr/bin/env node

import { router } from '../src/router.js';
import logger from '../src/logger.js';

logger.info("inciando o projeto");

router(process.argv.slice(2));