import { getLeetCodeQuestionBySlug, getLeetCodeSlugById } from '@/api';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';
import {
  createDailyPath,
  createFileName,
  createFileWithContent,
  createPathIfNotExist,
  getCurrentDate,
} from '@/utils';

import { CodingSite } from '@/types';

export async function generateLeetCode(outputDir: string, id: string) {
  const titleSlug = await getLeetCodeSlugById(id);
  const { title, codeSnippet } = await getLeetCodeQuestionBySlug(titleSlug);
  const date = getCurrentDate();
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
      createTestTemplate(CodingSite.LeetCode, date, id),
    ),
  ]);
}
