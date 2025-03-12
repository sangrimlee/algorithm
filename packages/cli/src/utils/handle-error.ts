import { z } from 'zod';
import { logger } from './logger';

export function handleError(error: unknown) {
  logger.error('Something went wrong. Please check the error below for more details.');
  logger.error('');

  if (typeof error === 'string') {
    logger.error(error);
    logger.break();
    process.exit(1);
  }

  if (error instanceof z.ZodError) {
    logger.error('Invalid Options:');
    for (const [key, value] of Object.entries(error.flatten().fieldErrors)) {
      logger.error(`- ${key}: ${value?.toString() ?? ''}`);
    }
    logger.break();
    process.exit(1);
  }

  if (error instanceof Error) {
    logger.error(error.message);
    logger.break();
    process.exit(1);
  }

  logger.break();
  process.exit(1);
}
