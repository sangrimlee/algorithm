/**
 * 2843. Count Symmetric Integers
 * https://leetcode.com/problems/count-symmetric-integers
 */
export function countSymmetricIntegers(low: number, high: number): number {
  let answer = 0;
  for (let num = low; num <= high; num++) {
    if (isSymmetricInteger(num)) {
      answer += 1;
    }
  }
  return answer;
}

function isSymmetricInteger(num: number): boolean {
  const s = num.toString();
  if (s.length % 2 !== 0) {
    return false;
  }

  const n = s.length / 2;
  let [left, right] = [0, 0];
  for (let i = 0; i < n; i++) {
    left += parseInt(s[i]);
    right += parseInt(s[s.length - i - 1]);
  }
  return left === right;
}
