/**
 * 2848. Points That Intersect With Cars
 * https://leetcode.com/problems/points-that-intersect-with-cars
 */
export function numberOfPoints(nums: number[][]): number {
  const prefix = new Array<number>(102).fill(0);
  for (const [start, end] of nums) {
    prefix[start] += 1;
    prefix[end + 1] -= 1;
  }

  let answer = 0;
  let prefixSum = 0;
  prefix.forEach((value) => {
    prefixSum += value;
    if (0 < prefixSum) {
      answer += 1;
    }
  });

  return answer;
}
