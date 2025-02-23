/**
 * 525. Contiguous Array
 * https://leetcode.com/problems/contiguous-array
 */
export function findMaxLength(nums: number[]): number {
  const indices = new Map<number, number>([[0, -1]]);

  let sum = 0;
  let answer = 0;
  nums.forEach((num, i) => {
    sum += num === 0 ? -1 : 1;

    const prevIndex = indices.get(sum);
    if (prevIndex !== undefined) {
      answer = Math.max(answer, i - prevIndex);
    } else {
      indices.set(sum, i);
    }
  });
  return answer;
}
