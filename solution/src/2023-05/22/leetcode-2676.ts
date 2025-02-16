/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument*/

/**
 * 2676. Throttle
 * https://leetcode.com/problems/throttle
 */
export function throttle(fn: (...args: any[]) => void, t: number): (...args: any[]) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let delayed = 0;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const delay = Math.max(0, delayed - Date.now());
    timeoutId = setTimeout(() => {
      fn(...args);
      delayed = Date.now() + t;
    }, delay);
  };
}
