import { CodingSite } from './enums';

export function isCodingSite(site: string): CodingSite {
  if (/leetcode/i.test(site)) {
    return CodingSite.LeetCode;
  }
  if (/programmers/i.test(site)) {
    return CodingSite.Programmers;
  }
  throw new Error('잘못된 CodingSite입니다.');
}
