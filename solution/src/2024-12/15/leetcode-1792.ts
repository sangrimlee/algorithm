import { Heap } from '@algorithm/lib';

/**
 * 1792. Maximum Average Pass Ratio
 * https://leetcode.com/problems/maximum-average-pass-ratio
 */
export function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const heap = new Heap<number[]>(sortByRatioDiff);
  for (const [pass, total] of classes) {
    heap.push([pass, total]);
  }

  for (let i = 0; i < extraStudents; i++) {
    const [pass, total] = heap.pop()!;
    heap.push([pass + 1, total + 1]);
  }

  let totalPassRatio = 0;
  while (!heap.isEmpty) {
    const [pass, total] = heap.pop()!;
    totalPassRatio += pass / total;
  }
  return totalPassRatio / classes.length;
}

function sortByRatioDiff([pass1, total1]: number[], [pass2, total2]: number[]) {
  const ratioDiff1 = (pass1 + 1) / (total1 + 1) - pass1 / total1;
  const ratioDiff2 = (pass2 + 1) / (total2 + 1) - pass2 / total2;
  return ratioDiff2 - ratioDiff1;
}
