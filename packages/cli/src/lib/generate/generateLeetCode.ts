import path from 'node:path';

import { getLeetCodeQuestionBySlug, getLeetCodeSlugById } from '@/api';
import { EXTNAME } from '@/constants';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';

import { getDatePath, getDateString } from '@/utils/date';
import { ensureWriteFile } from '@/utils/fs';
import { kebabcase } from '@/utils/naming';

import { CodingSite } from '@/types';

export async function generateLeetCode(outputDir: string, id: string) {
  const titleSlug = await getLeetCodeSlugById(id);
  const { title, codeSnippet } = await getLeetCodeQuestionBySlug(titleSlug);

  const currentDate = new Date();
  const datePath = getDatePath(currentDate, outputDir);
  const dateString = getDateString(currentDate);

  const fileName = kebabcase(CodingSite.LeetCode, id);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT}`),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT_TEST}`),
      createTestTemplate(CodingSite.LeetCode, dateString, id),
    ),
  ]);
}
