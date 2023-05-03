import path from 'node:path';

import { getLeetCodeDailyChallenge, getLeetCodeQuestionBySlug } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import { createDailyPath, createFileName } from '@/utils';
import { ensureWriteFile } from '@/utils/fs';

import { CodingSite } from '@/types';

export async function generateLeetCodeDailyChallenge(outputDir: string) {
  const {
    date,
    question: { titleSlug },
  } = await getLeetCodeDailyChallenge();
  const { id, title, codeSnippet, testCases } = await getLeetCodeQuestionBySlug(titleSlug);

  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);

  await Promise.all([
    ensureWriteFile(
      path.join(dailyDir, fileName),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(dailyDir, testFileName),
      createTestTemplate(CodingSite.LeetCode, date, id, testCases),
    ),
  ]);
}
