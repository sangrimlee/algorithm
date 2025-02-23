/**
 * 3258. Count Substrings That Satisfy K-Constraint I
 * https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i
 */
export function countKConstraintSubstrings(s: string, k: number): number {
  let answer = 0;

  let [one, zero] = [0, 0];
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === '0') {
      zero += 1;
    } else {
      one += 1;
    }

    while (k < zero && k < one) {
      if (s[left] === '0') {
        zero -= 1;
      } else {
        one -= 1;
      }
      left += 1;
    }

    answer += right - left + 1;
  }

  return answer;
}
