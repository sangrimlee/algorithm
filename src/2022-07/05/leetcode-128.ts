/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */
export function longestConsecutive(nums: number[]): number {
  let answer = 0;
  const numsMap = new Map<number, boolean>();
  nums.forEach((num) => {
    numsMap.set(num, true);
  });

  nums.forEach((num) => {
    if (!numsMap.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numsMap.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      answer = Math.max(answer, currentLength);
    }
  });

  return answer;
}
