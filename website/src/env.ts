import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },
  runtimeEnv: {
    URL: process.env.URL,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});
