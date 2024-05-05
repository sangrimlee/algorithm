/**
 * 3095. Shortest Subarray With OR at Least K I
 * https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i
 */
export function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  let answer = Number.MAX_SAFE_INTEGER;

  for (let start = 0; start < n; start++) {
    let curr = 0;
    for (let end = start; end < n; end++) {
      curr = curr | nums[end];
      if (k <= curr) {
        answer = Math.min(answer, end - start + 1);
        break;
      }
    }
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
