import path from 'node:path';

import { getLeetCodeQuestionBySlug, getLeetCodeSlugById } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createFileName } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';
import { getDatePath, getDateString } from '@/utils/date';
import { CodingSite } from '@/types';

export async function generateLeetCode(outputDir: string, id: string) {
  const titleSlug = await getLeetCodeSlugById(id);
  const { title, codeSnippet } = await getLeetCodeQuestionBySlug(titleSlug);

  const currentDate = new Date();
  const datePath = getDatePath(currentDate, outputDir);
  const dateString = getDateString(currentDate);

  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, fileName),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(datePath, testFileName),
      createTestTemplate(CodingSite.LeetCode, dateString, id),
    ),
  ]);
}
