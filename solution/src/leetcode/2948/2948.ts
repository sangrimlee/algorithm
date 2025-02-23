/**
 * 2948. Make Lexicographically Smallest Array by Swapping Elements
 * https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements
 */
export function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const n = nums.length;
  const sortedNums = [...nums].sort((a, b) => a - b);

  const groups = [[sortedNums[0]]];
  const groupByNum = new Map<number, number>([[sortedNums[0], 0]]);
  for (let i = 1; i < n; i++) {
    if (sortedNums[i] - sortedNums[i - 1] > limit) {
      groups.push([]);
    }
    const group = groups.length - 1;
    groups[group].push(sortedNums[i]);
    groupByNum.set(sortedNums[i], group);
  }

  const answer = new Array<number>(n).fill(-1);
  const groupIndices = new Array<number>(groups.length).fill(0);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const group = groupByNum.get(num) ?? 0;
    answer[i] = groups[group][groupIndices[group]];
    groupIndices[group] += 1;
  }
  return answer;
}
