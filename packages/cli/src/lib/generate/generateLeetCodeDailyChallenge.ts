import path from 'node:path';

import { getLeetCodeDailyChallenge, getLeetCodeQuestionBySlug } from '@/api';
import { EXTNAME } from '@/constants';
import { createSolutionTemplate, createTestTemplate } from '@/lib/template';

import { getDatePath } from '@/utils/date';
import { ensureWriteFile } from '@/utils/fs';
import { kebabcase } from '@/utils/naming';

import { CodingSite } from '@/types';

export async function generateLeetCodeDailyChallenge(outputDir: string) {
  const {
    date,
    question: { titleSlug },
  } = await getLeetCodeDailyChallenge();
  const { id, title, codeSnippet, testCases } = await getLeetCodeQuestionBySlug(titleSlug);
  const datePath = getDatePath(new Date(date), outputDir);

  const fileName = kebabcase(CodingSite.LeetCode, id);

  await Promise.all([
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT}`),
      createSolutionTemplate(CodingSite.LeetCode, id, title, titleSlug, codeSnippet),
    ),
    ensureWriteFile(
      path.join(datePath, `${fileName}${EXTNAME.TYPESCRIPT_TEST}`),
      createTestTemplate(CodingSite.LeetCode, date, id, testCases),
    ),
  ]);
}
