import path from 'node:path';

import { getProgrammersQuestionById } from '@/api/programmers';
import { confirmPrompt, numberPrompt } from '@/lib/prompt';
import { createTemplate } from '@/lib/template';
import { ensureWriteFile, ensureWriteJson, exists } from '@/utils/fs';

export async function generateProgrammers(outDir: string) {
  const id = await numberPrompt('Programmers 문제 번호를 입력하세요.');
  const fileName = id.padStart(6, '0');
  const dirPath = path.join(outDir, 'programmers', fileName);
  const isExist = await exists(dirPath);
  if (isExist) {
    const isContinue = await confirmPrompt('해당 문제가 존재합니다. 계속하시겠습니까?');
    if (!isContinue) {
      return;
    }
  }

  const question = await getProgrammersQuestionById(id);
  const programmersQuestion = { siteName: 'Programmers', fileName, ...question };
  const meta = {
    id: question.id,
    url: question.url,
    title: question.title,
    level: question.level,
  };
  const [solutionTemplate, solutionTestTemplate] = await Promise.all([
    createTemplate('SOLUTION', programmersQuestion),
    createTemplate('SOLUTION_TEST', programmersQuestion),
  ]);
  await Promise.all([
    ensureWriteFile(path.join(dirPath, `${fileName}.ts`), solutionTemplate),
    ensureWriteFile(path.join(dirPath, `${fileName}.test.ts`), solutionTestTemplate),
    ensureWriteJson(path.join(dirPath, 'meta.json'), meta),
  ]);
}
