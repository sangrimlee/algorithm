import path from 'node:path';

import {
  getLeetCodeDailyChallenge,
  getLeetCodeQuestionBySlug,
  getLeetCodeSlugById,
} from '@/api/leetcode';
import { ensureWriteFile, ensureWriteJson, exists } from '@/utils/fs';
import { confirmPrompt, numberPrompt } from '@/lib/prompt';
import { createTemplate } from '../template';

export async function generateLeetCodeBySlug(outDir: string, titleSlug: string): Promise<void> {
  const question = await getLeetCodeQuestionBySlug(titleSlug);
  const fileName = question.id.padStart(4, '0');
  const dirPath = path.join(outDir, 'leetcode', fileName);
  const isExist = await exists(dirPath);
  if (isExist) {
    const isContinue = await confirmPrompt('해당 문제가 존재합니다. 계속하시겠습니까?');
    if (!isContinue) {
      return;
    }
  }

  const leetCodeQuestion = { siteName: 'LeetCode', fileName, ...question };
  const meta = {
    id: question.id,
    url: question.url,
    title: question.title,
    category: question.title,
    difficulty: question.difficulty,
    tags: question.tags,
  };

  const [solutionTemplate, solutionTestTemplate] = await Promise.all([
    createTemplate('SOLUTION', leetCodeQuestion),
    createTemplate('SOLUTION_TEST', leetCodeQuestion),
  ]);
  await Promise.all([
    ensureWriteFile(path.join(dirPath, `${fileName}.ts`), solutionTemplate),
    ensureWriteFile(path.join(dirPath, `${fileName}.test.ts`), solutionTestTemplate),
    ensureWriteJson(path.join(dirPath, 'meta.json'), meta),
  ]);
}

export async function generateLeetCodeDailyChallenge(outDir: string): Promise<void> {
  const titleSlug = await getLeetCodeDailyChallenge();
  await generateLeetCodeBySlug(outDir, titleSlug);
}

export async function generateLeetCodeById(outDir: string): Promise<void> {
  const id = await numberPrompt('LeetCode 문제 번호를 입력하세요.');
  const titleSlug = await getLeetCodeSlugById(id.toString());
  await generateLeetCodeBySlug(outDir, titleSlug);
}
