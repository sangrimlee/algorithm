/**
 * 697. Degree of an Array
 * https://leetcode.com/problems/degree-of-an-array
 */
export function findShortestSubArray(nums: number[]): number {
  const counter = new Map<number, number>();
  const firstIndices = new Map<number, number>();

  let answer = 0;
  let degree = 0;
  nums.forEach((num, i) => {
    const firstIndex = firstIndices.get(num) ?? i;
    firstIndices.set(num, firstIndex);
    const count = (counter.get(num) ?? 0) + 1;
    counter.set(num, count);
    if (degree < count) {
      degree = count;
      answer = i - firstIndex + 1;
    } else if (degree == count) {
      answer = Math.min(answer, i - firstIndex + 1);
    }
  });

  return answer;
}
