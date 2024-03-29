/**
 * 2623. Memoize
 * https://leetcode.com/problems/memoize
 */
export function memoize<P, R>(fn: (...params: P[]) => R): (...params: P[]) => R {
  const cache = new Map<string, R>();
  return (...args) => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }
    const ret = fn(...args);
    cache.set(key, ret);
    return ret;
  };
}
