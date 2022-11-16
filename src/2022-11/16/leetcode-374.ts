/**
 * 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 */
export function guessNumber(n: number, guess: (num: number) => number): number {
  let answer = n;
  let [start, end] = [1, n];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const result = guess(mid);
    if (result === 0) {
      answer = mid;
      break;
    } else if (result === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

export function guess(pick: number) {
  return (num: number) => {
    if (pick === num) return 0;
    return pick < num ? -1 : 1;
  };
}
