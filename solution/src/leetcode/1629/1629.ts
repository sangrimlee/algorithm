/**
 * 1629. Slowest Key
 * https://leetcode.com/problems/slowest-key
 */
export function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let answer = '';
  let maxDuration = 0;
  releaseTimes.forEach((releaseTime, i) => {
    const key = keysPressed[i];
    const prevReleaseTime = i === 0 ? 0 : releaseTimes[i - 1];
    const duration = releaseTime - prevReleaseTime;
    if (maxDuration < duration) {
      maxDuration = duration;
      answer = key;
    } else if (maxDuration === duration) {
      answer = answer < key ? key : answer;
    }
  });

  return answer;
}
