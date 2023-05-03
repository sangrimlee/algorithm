import path from 'node:path';

import { getProgrammersProblem } from '@/api';
import { EXTNAME } from '@/constants';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';

import { getDatePath, getDateString } from '@/utils/date';
import { ensureWriteFile } from '@/utils/fs';
import { kebabcase } from '@/utils/naming';

import { CodingSite } from '@/types';

export async function generateProgrammers(outputDir: string, id: string) {
  const { title, testCases } = await getProgrammersProblem(id);
  const currentDate = new Date();
  const datePath = getDatePath(currentDate, outputDir);
  const dateString = getDateString(currentDate);

  const fileName = kebabcase(CodingSite.Programmers, id);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT}`),
      createSolutionTemplate(CodingSite.Programmers, id, title, id),
    ),
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT_TEST}`),
      createTestTemplate(CodingSite.Programmers, dateString, id, testCases),
    ),
  ]);
}
