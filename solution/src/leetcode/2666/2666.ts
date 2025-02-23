/**
 * 2666. Allow One Function Call
 * https://leetcode.com/problems/allow-one-function-call
 */
export function once<T, R>(fn: (...args: T[]) => R): (...args: T[]) => R | undefined {
  let called = false;
  return (...args) => {
    if (called) {
      return;
    }
    called = true;
    return fn(...args);
  };
}
