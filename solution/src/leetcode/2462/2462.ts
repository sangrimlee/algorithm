import { Heap, range } from '@algorithm/lib';

/**
 * 2462. Total Cost to Hire K Workers
 * https://leetcode.com/problems/total-cost-to-hire-k-workers
 */
export function totalCost(costs: number[], k: number, candidates: number): number {
  const heap = new Heap<[number, number]>((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  for (const i of range(candidates)) {
    heap.push([costs[i], 0]);
  }
  for (const i of range(Math.max(candidates, costs.length - candidates), costs.length)) {
    heap.push([costs[i], 1]);
  }

  let answer = 0;
  let [nextHead, nextTail] = [candidates, costs.length - 1 - candidates];

  for (let i = 0; i < k; i++) {
    const item = heap.pop();
    if (!item) {
      continue;
    }
    const [currentCost, currentSectionId] = item;
    answer += currentCost;
    if (nextHead <= nextTail) {
      if (currentSectionId === 0) {
        heap.push([costs[nextHead], 0]);
        nextHead += 1;
      } else {
        heap.push([costs[nextTail], 1]);
        nextTail -= 1;
      }
    }
  }

  return answer;
}
