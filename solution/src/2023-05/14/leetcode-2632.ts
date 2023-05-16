/**
 * 2632. Curry
 * https://leetcode.com/problems/curry
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function curry(fn: Function): Function {
  const curried = (...args: unknown[]) => {
    if (fn.length <= args.length) {
      return fn(...args);
    }
    return (...nextArgs: unknown[]) => curried(...args, ...nextArgs);
  };
  return curried;
}
