/* eslint-disable @typescript-eslint/prefer-promise-reject-errors -- 문제 조건이 string 형식의 `reject`를 하는 내용 */

/**
 * 2637. Promise Time Limit
 * https://leetcode.com/problems/promise-time-limit
 */
export function timeLimit<P, R>(fn: (...params: P[]) => Promise<R>, t: number) {
  return (...args: P[]) => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          clearTimeout(timeout);
        });
    });
  };
}

/**
 * Using Promise.race, but it execute unnecessarily setTimeout callback function.
export function timeLimit2<P, R>(fn: (...params: P[]) => Promise<R>, t: number) {
  const timeout = (ms: number) =>
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, ms);
    });

  return (...args: P[]) => {
    return Promise.race([fn(...args), timeout(t)]);
  };
}
*/
