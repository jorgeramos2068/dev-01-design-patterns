// import { FirstLogger } from '@/helpers';

import { LoggerAdapter } from '@/helpers';

const logger = new LoggerAdapter('adapter.ts');

logger.writeLog('normal message');
logger.writeWarning('warning message');
logger.writeError('error message');
