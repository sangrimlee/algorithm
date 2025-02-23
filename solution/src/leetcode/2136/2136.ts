/**
 * 2136. Earliest Possible Day of Full Bloom
 * https://leetcode.com/problems/earliest-possible-day-of-full-bloom/
 */
export function earliestFullBloom(plantTime: number[], growTime: number[]): number {
  let answer = 0;
  let currentPlantTime = 0;

  const inidices = Array.from(plantTime).map((_, i) => i);
  inidices.sort((a, b) => growTime[b] - growTime[a]);
  for (const i of inidices) {
    currentPlantTime += plantTime[i];
    answer = Math.max(answer, currentPlantTime + growTime[i]);
  }

  return answer;
}
