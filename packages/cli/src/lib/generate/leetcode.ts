import path from 'node:path';

import {
  getLeetCodeDailyChallenge,
  getLeetCodeQuestionBySlug,
  getLeetCodeSlugById,
} from '@/api/leetcode';
import { exists } from '@/utils/fs';

export async function generateLeetCodeBySlug(titleSlug: string): Promise<void> {
  const question = await getLeetCodeQuestionBySlug(titleSlug);
  const fileName = question.id.padStart(4, '0');
  const dirPath = path.join('leetcode', fileName);
  const isExist = await exists(dirPath);
  if (isExist) {
    throw new Error('이미 존재하는 풀이입니다.');
  }
  // TODO: 템플릿 생성
  await Promise.all([]);
}

export async function generateLeetCodeDailyChallenge(): Promise<void> {
  const titleSlug = await getLeetCodeDailyChallenge();
  await generateLeetCodeBySlug(titleSlug);
}

export async function generateLeetCodeById(id: string): Promise<void> {
  const titleSlug = await getLeetCodeSlugById(id);
  await generateLeetCodeBySlug(titleSlug);
}
