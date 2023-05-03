import path from 'node:path';

import { createREADMETemplate } from '@/lib/template';
import { ensureWriteFile } from '@/utils/fs';
import { getSolutionGroupByCodingSite } from '@/api/solution';

export async function generateREADME(solutionDir: string, outDir: string) {
  const solutionGroups = await getSolutionGroupByCodingSite(solutionDir, outDir);

  await ensureWriteFile(path.join(outDir, 'README.md'), createREADMETemplate(solutionGroups));
}
