import path from 'node:path';

import {
  getLeetCodeDailyChallenge,
  getLeetCodeQuestionBySlug,
  getLeetCodeSlugById,
} from '@/api/leetcode';
import { exists } from '@/utils/fs';
import { confirmPrompt, numberPrompt } from '@/lib/prompt';

export async function generateLeetCodeBySlug(outDir: string, titleSlug: string): Promise<void> {
  const question = await getLeetCodeQuestionBySlug(titleSlug);
  const fileName = question.id.padStart(4, '0');
  const dirPath = path.join(outDir, 'leetcode', fileName);
  const isExist = await exists(dirPath);
  if (isExist) {
    const isContinue = await confirmPrompt('해당 문제가 존재합니다. 계속하시겠습니까?');
    if (!isContinue) {
      process.exit(1);
    }
  }

  // TODO: 템플릿 생성
  await Promise.all([]);
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
