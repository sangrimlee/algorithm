import path from 'node:path';
import { getProgrammersProblem } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createFileName } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';
import { getDatePath, getDateString } from '@/utils/date';

import { CodingSite } from '@/types';

export async function generateProgrammers(outputDir: string, id: string) {
  const { title, testCases } = await getProgrammersProblem(id);
  const currentDate = new Date();
  const datePath = getDatePath(currentDate, outputDir);
  const dateString = getDateString(currentDate);
  const { fileName, testFileName } = createFileName(id, CodingSite.Programmers);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, fileName),
      createSolutionTemplate(CodingSite.Programmers, id, title, id),
    ),
    ensureWriteFile(
      path.join(datePath, testFileName),
      createTestTemplate(CodingSite.Programmers, dateString, id, testCases),
    ),
  ]);
}
