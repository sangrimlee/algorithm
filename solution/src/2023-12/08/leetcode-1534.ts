/**
 * 1534. Count Good Triplets
 * https://leetcode.com/problems/count-good-triplets
 */
export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  const diff = (i: number, j: number) => Math.abs(arr[i] - arr[j]);
  const n = arr.length;

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (diff(i, j) > a) {
        continue;
      }
      for (let k = j + 1; k < n; k++) {
        if (diff(j, k) <= b && diff(i, k) <= c) {
          answer += 1;
        }
      }
    }
  }

  return answer;
}
