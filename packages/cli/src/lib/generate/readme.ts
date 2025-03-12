import path from 'node:path';

import { getSolutions } from '@/api/solution';
import { createTemplate } from '@/lib/template';
import { ensureWriteFile } from '@/utils/fs';

export async function generateREADME(solutionDir: string, outDir: string) {
  const leetcode = await getSolutions(path.join(solutionDir, 'leetcode'), outDir);
  const programmers = await getSolutions(path.join(solutionDir, 'programmers'), outDir);

  const template = await createTemplate('README', { leetcode, programmers });
  await ensureWriteFile(path.join(outDir, 'README.md'), template);
}
