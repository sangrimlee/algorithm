/**
 * 2629. Function Composition
 * https://leetcode.com/problems/function-composition
 */
type F = (x: number) => number;

export function compose(functions: F[]): F {
  return (x) => functions.reduceRight((acc, func) => func(acc), x);
}
