import path from 'node:path';

import { createREADMETemplate } from '@/lib/template';
import { getSolutions } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';

export async function generateREADME(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);

  await ensureWriteFile(path.join(outDir, 'README.md'), createREADMETemplate(solutions));
}
