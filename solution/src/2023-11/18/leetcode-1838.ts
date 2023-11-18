/**
 * 1838. Frequency of the Most Frequent Element
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element
 */
export function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let answer = 0;
  let [start, rangeSum] = [0, 0];
  for (let end = 0; end < nums.length; end++) {
    const num = nums[end];
    rangeSum += num;
    while (k < num * (end - start + 1) - rangeSum) {
      rangeSum -= nums[start];
      start += 1;
    }
    answer = Math.max(answer, end - start + 1);
  }

  return answer;
}
