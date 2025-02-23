import { range } from '@algorithm/lib';

/**
 * 338. Counting Bits
 * https://leetcode.com/problems/counting-bits
 */
export function countBits(n: number): number[] {
  const answer = new Array<number>(n + 1).fill(-1);
  const countBit = (n: number): number => {
    if (answer[n] !== -1) {
      return answer[n];
    }
    if (n <= 1) {
      return (answer[n] = n);
    }
    if (n % 2 === 0) {
      return (answer[n] = countBit(n / 2));
    }
    return (answer[n] = countBit(Math.floor(n / 2)) + 1);
  };
  for (const num of range(n + 1)) {
    countBit(num);
  }
  return answer;
}
