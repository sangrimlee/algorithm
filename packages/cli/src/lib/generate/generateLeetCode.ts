import path from 'node:path';

import { getLeetCodeQuestionBySlug, getLeetCodeSlugById } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createDailyPath, createFileName, getCurrentDate } from '@/utils';

import { CodingSite } from '@/types';
import { ensureWriteFile } from '@/utils/fs';

export async function generateLeetCode(outputDir: string, id: string) {
  const titleSlug = await getLeetCodeSlugById(id);
  const { title, codeSnippet } = await getLeetCodeQuestionBySlug(titleSlug);
  const date = getCurrentDate();
  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);

  await Promise.all([
    ensureWriteFile(
      path.join(dailyDir, fileName),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(dailyDir, testFileName),
      createTestTemplate(CodingSite.LeetCode, date, id),
    ),
  ]);
}
