/**
 * 539. Minimum Time Difference
 * https://leetcode.com/problems/minimum-time-difference
 */
export function findMinDifference(timePoints: string[]): number {
  const MAX_MINUTE = 24 * 60;
  const MAX_SIZE = Number.MAX_SAFE_INTEGER;
  const minutes = new Array<boolean>(MAX_MINUTE).fill(false);

  for (const timePoint of timePoints) {
    const minute = toMinute(timePoint);
    if (minutes[minute]) {
      return 0;
    }
    minutes[minute] = true;
  }

  let prevIndex = MAX_SIZE;
  let firstIndex = MAX_SIZE;
  let lastIndex = MAX_SIZE;
  let answer = MAX_SIZE;

  for (let i = 0; i < MAX_MINUTE; i++) {
    if (!minutes[i]) continue;
    if (prevIndex !== MAX_SIZE) {
      answer = Math.min(answer, i - prevIndex);
    }
    prevIndex = i;
    if (firstIndex === MAX_SIZE) {
      firstIndex = i;
    }
    lastIndex = i;
  }

  return Math.min(answer, 24 * 60 - lastIndex + firstIndex);
}

function toMinute(timePoint: string): number {
  const [hour, minute] = timePoint.split(':').map((v) => +v);
  return 60 * hour + minute;
}
