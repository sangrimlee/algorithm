/* eslint-disable @typescript-eslint/prefer-promise-reject-errors -- 문제 조건이 string 형식의 `reject`를 하는 내용 */

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
