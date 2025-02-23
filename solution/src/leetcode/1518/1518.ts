/**
 * 1518. Water Bottles
 * https://leetcode.com/problems/water-bottles
 */
export function numWaterBottles(numBottles: number, numExchange: number): number {
  let answer = numBottles;
  let emptyBottles = numBottles;
  while (numExchange <= emptyBottles) {
    const fullBottles = Math.floor(emptyBottles / numExchange);
    answer += fullBottles;
    emptyBottles = fullBottles + (emptyBottles % numExchange);
  }
  return answer;
}
