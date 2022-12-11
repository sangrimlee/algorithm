import { getDailyCodingChallenge } from '../api';
import { CodingSite } from '../enums';
import { createSolutionTemplate, createTestTemplate } from '../templates';
import {
  createDailyPath,
  createFileName,
  createFileWithContent,
  createPathIfNotExist,
} from '../utils';

export async function generateDailyChallenge(outputDir: string) {
  const {
    date,
    question: { frontendQuestionId: id, title, titleSlug },
  } = await getDailyCodingChallenge();
  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.LeetCode);
  createPathIfNotExist(dailyDir);

  createFileWithContent(dailyDir, fileName, createSolutionTemplate(id, title, titleSlug));
  createFileWithContent(dailyDir, testFileName, createTestTemplate(date, CodingSite.LeetCode, id));
}
