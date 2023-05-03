import path from 'node:path';

import { createREADMETemplate } from '@/lib/template';
import { ensureWriteFile } from '@/utils/fs';
import { groupByCodingSite, getSolutions } from '@/api/solution';

export async function generateREADME(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);
  const solutionGroups = groupByCodingSite(solutions);

  await ensureWriteFile(path.join(outDir, 'README.md'), createREADMETemplate(solutionGroups));
}
