/**
 * 1442. Count Triplets That Can Form Two Arrays of Equal XOR
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor
 */
export function countTriplets(arr: number[]): number {
  const n = arr.length;
  let answer = 0;
  let prefix = 0;

  const counts = new Map<number, number>([[0, 1]]);
  const totalCounts = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    prefix ^= arr[i];

    const count = counts.get(prefix) ?? 0;
    counts.set(prefix, count + 1);

    const totalCount = totalCounts.get(prefix) ?? 0;
    totalCounts.set(prefix, totalCount + i + 1);

    answer += count * i - totalCount;
  }

  return answer;
}
