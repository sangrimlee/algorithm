import path from 'node:path';

import { getLeetCodeDailyChallenge, getLeetCodeQuestionBySlug } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createFileName } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';
import { getDatePath } from '@/utils/date';

import { CodingSite } from '@/types';

export async function generateLeetCodeDailyChallenge(outputDir: string) {
  const {
    date,
    question: { titleSlug },
  } = await getLeetCodeDailyChallenge();
  const { id, title, codeSnippet, testCases } = await getLeetCodeQuestionBySlug(titleSlug);
  const datePath = getDatePath(new Date(date), outputDir);
  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, fileName),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(datePath, testFileName),
      createTestTemplate(CodingSite.LeetCode, date, id, testCases),
    ),
  ]);
}
