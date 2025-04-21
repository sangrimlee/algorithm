/**
 * 1534. Count Good Triplets
 * https://leetcode.com/problems/count-good-triplets
 */
export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  const n = arr.length;

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) {
        continue;
      }

      for (let k = j + 1; k < n; k++) {
        if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}
