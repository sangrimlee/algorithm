/**
 * 2709. Greatest Common Divisor Traversal
 * https://leetcode.com/problems/greatest-common-divisor-traversal
 */

export function canTraverseAllPairs(nums: number[]): boolean {
  const n = nums.length;
  if (n === 1) {
    return true;
  }
  const parents = Array.from({ length: n }, (_, i) => i);
  const childCounts = new Array<number>(n).fill(1);

  function find(x: number): number {
    if (parents[x] === x) {
      return x;
    }
    parents[x] = find(parents[x]);
    return parents[x];
  }

  function union(x: number, y: number) {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX === parentY) {
      return;
    }
    if (childCounts[parentX] > childCounts[parentY]) {
      parents[parentY] = parentX;
      childCounts[parentX] += childCounts[parentY];
    } else {
      parents[parentX] = parentY;
      childCounts[parentY] += childCounts[parentX];
    }
  }

  const firstIndices = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (num === 1) {
      return false;
    }

    let divisor = 2;
    while (divisor * divisor <= num) {
      if (num % divisor === 0) {
        if (firstIndices.has(divisor)) {
          union(i, firstIndices.get(divisor)!);
        } else {
          firstIndices.set(divisor, i);
        }
        while (num % divisor === 0) {
          num /= divisor;
        }
      }
      divisor += 1;
    }

    if (1 < num) {
      if (firstIndices.has(num)) {
        union(i, firstIndices.get(num)!);
      } else {
        firstIndices.set(num, i);
      }
    }
  }

  return childCounts[find(0)] === n;
}
