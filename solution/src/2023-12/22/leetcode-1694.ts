/**
 * 1694. Reformat Phone Number
 * https://leetcode.com/problems/reformat-phone-number
 */
export function reformatNumber(number: string): string {
  const removed = number.replace(/[- ]/g, '');
  const n = removed.length;
  const nums = [];
  for (let i = 0; i < n; i += 3) {
    if (n - i === 4) {
      nums.push(removed.substring(i, i + 2), removed.substring(i + 2));
      break;
    }
    nums.push(removed.substring(i, i + 3));
  }

  return nums.join('-');
}
