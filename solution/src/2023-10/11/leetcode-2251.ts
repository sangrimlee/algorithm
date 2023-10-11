/**
 * 2251. Number of Flowers in Full Bloom
 * https://leetcode.com/problems/number-of-flowers-in-full-bloom
 */
export function fullBloomFlowers(flowers: number[][], people: number[]): number[] {
  const blooms = new Map();
  for (const [start, end] of flowers) {
    blooms.set(start, (blooms.get(start) ?? 0) + 1);
    blooms.set(end + 1, (blooms.get(end + 1) ?? 0) - 1);
  }

  const answer = new Array(people.length).fill(0);
  const times = [...blooms.keys()].sort((a, b) => a - b);
  const peopleWithIndex = people
    .map((time, peopleIndex) => ({ time, peopleIndex }))
    .sort((a, b) => a.time - b.time);

  let timeIndex = 0;
  let totalBlooms = 0;
  for (const { time, peopleIndex } of peopleWithIndex) {
    while (timeIndex < times.length && times[timeIndex] <= time) {
      totalBlooms += blooms.get(times[timeIndex]) ?? 0;
      timeIndex += 1;
    }
    answer[peopleIndex] = totalBlooms;
  }
  return answer;
}
