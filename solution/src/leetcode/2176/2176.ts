/**
 * 2176. Count Equal and Divisible Pairs in an Array
 * https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
 */
export function countPairs(nums: number[], k: number): number {
  const indicesByNum = new Map<number, number[]>();
  nums.forEach((num, i) => {
    const indices = indicesByNum.get(num) ?? [];
    indices.push(i);
    indicesByNum.set(num, indices);
  });

  let answer = 0;
  for (const indices of indicesByNum.values()) {
    const gcdCount = new Map<number, number>();
    for (const i of indices) {
      const gcdI = gcd(i, k);
      for (const [gcdJ, count] of gcdCount) {
        if ((gcdI * gcdJ) % k === 0) {
          answer += count;
        }
      }
      gcdCount.set(gcdI, (gcdCount.get(gcdI) ?? 0) + 1);
    }
  }
  return answer;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
