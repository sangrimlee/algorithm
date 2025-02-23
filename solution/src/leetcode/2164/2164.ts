/**
 * 2164. Sort Even and Odd Indices Independently
 * https://leetcode.com/problems/sort-even-and-odd-indices-independently
 */
export function sortEvenOdd(nums: number[]): number[] {
  const n = nums.length;
  const evens = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
  const odds = nums.filter((_, i) => i % 2 === 1).sort((a, b) => b - a);
  const answer: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer.push(evens[i / 2]);
    } else {
      answer.push(odds[(i - 1) / 2]);
    }
  }
  return answer;
}
