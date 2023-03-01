import { getProgrammersProblem } from '../api';
import { CodingSite } from '../enums';
import { createSolutionTemplate, createTestTemplate } from '../templates';
import {
  createDailyPath,
  createFileName,
  createFileWithContent,
  createPathIfNotExist,
  getCurrentDate,
} from '../utils';

export async function generateProgrammersProblem(outputDir: string, id: string) {
  const { title } = await getProgrammersProblem(id);
  const date = getCurrentDate();
  const dailyDir = createDailyPath(outputDir, date);
  const { fileName, testFileName } = createFileName(id, CodingSite.Programmers);
  createPathIfNotExist(dailyDir);

  createFileWithContent(
    dailyDir,
    fileName,
    createSolutionTemplate(CodingSite.Programmers, id, title, id),
  );
  createFileWithContent(
    dailyDir,
    testFileName,
    createTestTemplate(CodingSite.Programmers, date, id),
  );
}
