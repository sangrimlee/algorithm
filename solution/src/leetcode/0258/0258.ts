/**
 * 258. Add Digits
 * https://leetcode.com/problems/add-digits
 */
export function addDigits(num: number): number {
  return ((num - 1) % 9) + 1;
}

/** Iteration
function addDigits(num: number): number {
  let current = num;
  while (10 <= current) {
    current = [...current.toString()].reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
  return current;
};
*/
