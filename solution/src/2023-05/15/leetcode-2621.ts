/**
 * 2621. Sleep
 * https://leetcode.com/problems/sleep
 */
export function sleep(ms: number) {
  return new Promise<void>((resolve, reject) => {
    if (typeof ms !== 'number' || isNaN(ms)) {
      reject('TypeError');
    }
    setTimeout(resolve, ms);
  });
}
