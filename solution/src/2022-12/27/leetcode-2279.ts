/**
 * 2279. Maximum Bags With Full Capacity of Rocks
 * https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks
 */
export function maximumBags(
  capacities: number[],
  rocks: number[],
  additionalRocks: number,
): number {
  const remainCapacities = capacities
    .map((capacity, i) => capacity - rocks[i])
    .sort((a, b) => a - b);

  let answer = 0;
  for (const remainCapacity of remainCapacities) {
    if (additionalRocks < remainCapacity) {
      return answer;
    }
    additionalRocks -= remainCapacity;
    answer += 1;
  }

  return answer;
}
