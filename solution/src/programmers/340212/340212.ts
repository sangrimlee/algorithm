/**
 * 340212. [PCCP 기출문제] 2번 / 퍼즐 게임 챌린지
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212
 */
export function puzzleGameChallenge(diffs: number[], times: number[], limit: number): number {
  function canSolvePuzzle(level: number): boolean {
    let currentTime = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (i === 0 || diffs[i] <= level) {
        currentTime += times[i];
      } else {
        currentTime += (diffs[i] - level) * (times[i - 1] + times[i]) + times[i];
      }
      if (limit < currentTime) {
        return false;
      }
    }
    return true;
  }

  let left = 1;
  let right = diffs.reduce((prev, diff) => Math.max(prev, diff), 1);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canSolvePuzzle(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
