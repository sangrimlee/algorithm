/**
 * 1578. Minimum Time to Make Rope Colorful
 * https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 */
export function minCost(colors: string, neededTime: number[]): number {
  const N = colors.length;
  if (N === 1) {
    return 0;
  }
  let answer = 0;
  let maxTime = neededTime[0];
  let totalTime = neededTime[0];
  for (let i = 1; i < N; i++) {
    const currentTime = neededTime[i];
    if (colors[i - 1] !== colors[i]) {
      answer += totalTime - maxTime;
      maxTime = currentTime;
      totalTime = currentTime;
    } else {
      maxTime = Math.max(maxTime, currentTime);
      totalTime += currentTime;
    }
  }
  answer += totalTime - maxTime;

  return answer;
}
