/**
 * 2723. Add Two Promises
 * https://leetcode.com/problems/add-two-promises
 */
export function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>,
): Promise<number> {
  /* if use async await
   * return (await promise1) + (await promise2);
   */
  return Promise.all([promise1, promise2]).then((nums) => nums.reduce((a, b) => a + b, 0));
}
