/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

/**
 * 2721. Execute Asynchronous Functions in Parallel
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel
 */
export function promiseAll<T>(funcs: (() => Promise<T>)[]): Promise<T[]> {
  if (funcs.length === 0) {
    return Promise.resolve([]);
  }

  let resolvedCount = 0;
  const result: T[] = [];

  return new Promise<T[]>((resolve, reject) => {
    funcs.forEach((func, i) => {
      func()
        .then((value) => {
          result[i] = value;
          resolvedCount += 1;
          if (resolvedCount === funcs.length) {
            resolve(result);
          }
        })
        .catch((reason: unknown) => {
          reject(reason);
        });
    });
  });
}
