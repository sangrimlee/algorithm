/**
 * 2176. Count Equal and Divisible Pairs in an Array
 * https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
 */
export function countPairs(nums: number[], k: number): number {
  const indicesByValue = new Map<number, number[]>();

  let answer = 0;
  nums.forEach((num, i) => {
    const indices = indicesByValue.get(num) ?? [];
    if (indices.length === 0) {
      indicesByValue.set(num, [i]);
      return;
    }

    for (const j of indices) {
      if ((i * j) % k === 0) {
        answer += 1;
      }
    }
    indices.push(i);
  });

  return answer;
}
