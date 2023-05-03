import path from 'node:path';
import { getProgrammersProblem } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createDailyPath, createFileName, getCurrentDate } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';

import { CodingSite } from '@/types';

export async function generateProgrammers(outputDir: string, id: string) {
  const { title, testCases } = await getProgrammersProblem(id);
  const date = getCurrentDate();
  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.Programmers);

  await Promise.all([
    ensureWriteFile(
      path.join(dailyDir, fileName),
      createSolutionTemplate(CodingSite.Programmers, id, title, id),
    ),
    ensureWriteFile(
      path.join(dailyDir, testFileName),
      createTestTemplate(CodingSite.Programmers, date, id, testCases),
    ),
  ]);
}
