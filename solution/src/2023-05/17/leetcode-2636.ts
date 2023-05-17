/**
 * 2636. Promise Pool
 * https://leetcode.com/problems/promise-pool
 */
export async function promisePool(functions: Array<() => Promise<unknown>>, n: number) {
  let i = 0;
  const executeNextFn = async () => {
    if (functions.length <= i) {
      return;
    }
    await functions[i++]();
    await executeNextFn();
  };

  return Promise.all(functions.slice(0, n).map(executeNextFn));
}
