import { CodingSite } from '../enums';

export const CODING_SITE_URL: Record<CodingSite, string> = {
  [CodingSite.LeetCode]: 'https://leetcode.com/problems',
  [CodingSite.Programmers]: 'https://school.programmers.co.kr/learn/courses/30/lessons',
} as const;
