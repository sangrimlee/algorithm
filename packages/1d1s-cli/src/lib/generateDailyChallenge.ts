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

  createFileWithContent(
    dailyDir,
    fileName,
    createSolutionTemplate(CodingSite.Programmers, id, title, titleSlug),
  );
  createFileWithContent(dailyDir, testFileName, createTestTemplate(CodingSite.LeetCode, date, id));
}
