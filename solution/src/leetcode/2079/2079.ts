/**
 * 2079. Watering Plants
 * https://leetcode.com/problems/watering-plants
 */
export function wateringPlants(plants: number[], capacity: number): number {
  const n = plants.length;

  let answer = 0;
  let remain = capacity;
  plants.forEach((water, i) => {
    if (remain < water) {
      answer += i * 2;
      remain = capacity;
    }
    remain -= water;
  });
  return answer + n;
}
