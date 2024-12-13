/**
 * 2593. Find Score of an Array After Marking All Elements
 * https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements
 */
export function findScore(nums: number[]): number {
  let answer = 0;
  const marked = new Set<number>();
  const sortedNums = nums
    .map((num, i) => [num, i])
    .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  for (const [num, i] of sortedNums) {
    if (!marked.has(i)) {
      answer += num;
      marked.add(i + 1);
      marked.add(i - 1);
    }
  }
  return answer;
}
