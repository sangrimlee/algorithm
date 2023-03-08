import { getProgrammersProblem } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import {
  createDailyPath,
  createFileName,
  createFileWithContent,
  createPathIfNotExist,
  getCurrentDate,
} from '@/utils';

import { CodingSite } from '@/types';

export async function generateProgrammers(outputDir: string, id: string) {
  const { title, testCases } = await getProgrammersProblem(id);
  const date = getCurrentDate();
  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.Programmers);
  createPathIfNotExist(dailyDir);

  await Promise.all([
    createFileWithContent(
      dailyDir,
      fileName,
      createSolutionTemplate(CodingSite.Programmers, id, title, id),
    ),
    createFileWithContent(
      dailyDir,
      testFileName,
      createTestTemplate(CodingSite.Programmers, date, id, testCases),
    ),
  ]);
}
