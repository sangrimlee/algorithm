import { range } from '@algorithm/lib';

/**
 * 134. Gas Station
 * https://leetcode.com/problems/gas-station
 */
export function canCompleteCircuit(gases: number[], costs: number[]): number {
  const n = gases.length;

  const totalRemain = gases.reduce((total, gas, i) => total + gas - costs[i], 0);
  if (totalRemain < 0) {
    return -1;
  }

  let [answer, remain] = [0, 0];
  for (const i of range(n)) {
    if (remain < 0) {
      remain = 0;
      answer = i;
    }
    remain += gases[i] - costs[i];
  }

  return answer;
}
