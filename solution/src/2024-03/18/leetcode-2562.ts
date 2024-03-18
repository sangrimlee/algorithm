/**
 * 2562. Find the Array Concatenation Value
 * https://leetcode.com/problems/find-the-array-concatenation-value
 */
export function findTheArrayConcVal(nums: number[]): number {
  function concatenate(num1: number, num2: number) {
    return parseInt(`${num1}${num2}`, 10);
  }

  let answer = 0;
  let [start, end] = [0, nums.length - 1];
  while (start <= end) {
    answer += start === end ? nums[start] : concatenate(nums[start], nums[end]);
    start += 1;
    end -= 1;
  }
  return answer;
}
