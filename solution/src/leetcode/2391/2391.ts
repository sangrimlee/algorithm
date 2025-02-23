/**
 * 2391. Minimum Amount of Time to Collect Garbage
 * https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage
 */
export function garbageCollection(garbages: string[], travel: number[]): number {
  for (let i = 1; i < travel.length; i++) {
    travel[i] = travel[i - 1] + travel[i];
  }

  const lastGarbages = {
    M: 0,
    P: 0,
    G: 0,
  };

  let answer = 0;
  garbages.forEach((garbage, i) => {
    for (const char of garbage) {
      lastGarbages[char as keyof typeof lastGarbages] = i;
    }
    answer += garbage.length;
  });

  Object.values(lastGarbages).forEach((lastGarbage) => {
    answer += lastGarbage === 0 ? 0 : travel[lastGarbage - 1];
  });

  return answer;
}
