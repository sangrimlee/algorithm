/**
 * 3340. Check Balanced String
 * https://leetcode.com/problems/check-balanced-string
 */
export function isBalanced(num: string): boolean {
  const n = num.length;
  let [even, odd] = [0, 0];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      even += parseInt(num[i]);
    } else {
      odd += parseInt(num[i]);
    }
  }
  return even === odd;
}
