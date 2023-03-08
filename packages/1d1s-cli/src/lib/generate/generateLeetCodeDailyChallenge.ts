import { getLeetCodeDailyChallenge, getLeetCodeQuestionBySlug } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import {
  createDailyPath,
  createFileName,
  createFileWithContent,
  createPathIfNotExist,
} from '@/utils';

import { CodingSite } from '@/types';

export async function generateLeetCodeDailyChallenge(outputDir: string) {
  const {
    date,
    question: { titleSlug },
  } = await getLeetCodeDailyChallenge();
  const { id, title, codeSnippet, testCases } = await getLeetCodeQuestionBySlug(titleSlug);

  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);
  createPathIfNotExist(dailyDir);

  await Promise.all([
    createFileWithContent(
      dailyDir,
      fileName,
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    createFileWithContent(
      dailyDir,
      testFileName,
      createTestTemplate(CodingSite.LeetCode, date, id, testCases),
    ),
  ]);
}
