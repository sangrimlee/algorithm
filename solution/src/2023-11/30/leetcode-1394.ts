/**
 * 1394. Find Lucky Integer in an Array
 * https://leetcode.com/problems/find-lucky-integer-in-an-array
 */
export function findLucky(arr: number[]): number {
  const freqs = new Map<number, number>();
  arr.forEach((num) => {
    freqs.set(num, (freqs.get(num) ?? 0) + 1);
  });

  let answer = -1;
  for (const [num, freq] of freqs.entries()) {
    if (num === freq) {
      answer = Math.max(answer, num);
    }
  }
  return answer;
}
