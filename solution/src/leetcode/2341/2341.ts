/**
 * 2341. Maximum Number of Pairs in Array
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array
 */
export function numberOfPairs(nums: number[]): number[] {
  const set = new Set<number>();

  let numOfPairs = 0;
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
      numOfPairs += 1;
    } else {
      set.add(num);
    }
  }

  return [numOfPairs, set.size];
}
