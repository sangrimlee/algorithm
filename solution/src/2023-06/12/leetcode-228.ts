/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges
 */
export function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }

  const answer = [];
  const createRange = (start: number, end: number) => {
    return start === end - 1 ? `${start}` : `${start}->${end - 1}`;
  };

  let [start, end] = [nums[0], nums[0]];
  for (const num of nums) {
    if (end === num) {
      end += 1;
    } else {
      answer.push(createRange(start, end));
      [start, end] = [num, num + 1];
    }
  }
  answer.push(createRange(start, end));

  return answer;
}
