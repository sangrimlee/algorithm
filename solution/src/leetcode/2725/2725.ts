/**
 * 2725. Interval Cancellation
 * https://leetcode.com/problems/interval-cancellation
 */
export function cancellable<T>(fn: (...args: T[]) => void, args: T[], t: number): () => void {
  fn(...args);
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);
  return () => {
    clearInterval(intervalId);
  };
}
