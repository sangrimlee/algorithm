/**
 * 752. Open the Lock
 * https://leetcode.com/problems/open-the-lock
 */
export function openLock(deadends: string[], target: string): number {
  function* next(code: string) {
    for (let i = 0; i < code.length * 2; i++) {
      const index = Math.floor(i / 2);
      const diff = i % 2 === 0 ? -1 : 1;
      const nextDigit = (parseInt(code[index]) + diff + 10) % 10;
      yield `${code.substring(0, index)}${nextDigit}${code.substring(index + 1)}`;
    }
  }

  const isDeadend = new Set(deadends);
  if (isDeadend.has('0000')) {
    return -1;
  }

  let attemptTimes = 0;
  let queue: string[] = [target];
  while (0 < queue.length) {
    const nextQueue: string[] = [];
    for (const code of queue) {
      if (code === '0000') {
        return attemptTimes;
      }
      for (const nextCode of next(code)) {
        if (!isDeadend.has(nextCode)) {
          isDeadend.add(nextCode);
          nextQueue.push(nextCode);
        }
      }
    }
    queue = nextQueue;
    attemptTimes += 1;
  }
  return -1;
}
