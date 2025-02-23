/* eslint-disable */

/**
 * 2632. Curry
 * https://leetcode.com/problems/curry
 */
type Curry<F> = F extends (...args: infer Args) => infer R ? CurryFn<Args, R> : never;

type CurryFn<Args extends any[], R> = <P extends any[]>(
  ...args: P
) => Args extends [...P, ...infer Rest] ? (Rest extends [] ? R : CurryFn<Rest, R>) : never;

export function curry<F extends (...args: any[]) => any>(fn: F): Curry<F> {
  function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more: any[]) => curried(...args, ...more);
  }
  return curried as Curry<F>;
}
