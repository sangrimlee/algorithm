import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    URL: process.env.URL,
  },
});
