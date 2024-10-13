/**
 * 632. Smallest Range Covering Elements from K Lists
 * https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists
 */
export function smallestRange(nums: number[][]): number[] {
  const k = nums.length;
  const merged = nums.flatMap((num, col) => num.map((value) => [value, col]));
  merged.sort((a, b) => a[0] - b[0]);

  const freq = new Map<number, number>();
  let [left, count] = [0, 0];
  let [start, end] = [0, Number.MAX_SAFE_INTEGER];

  for (let right = 0; right < merged.length; right++) {
    const rightCol = merged[right][1];
    freq.set(rightCol, (freq.get(rightCol) ?? 0) + 1);
    if (freq.get(rightCol) === 1) {
      count += 1;
    }

    while (count === k) {
      const range = merged[right][0] - merged[left][0];
      if (range < end - start) {
        [start, end] = [merged[left][0], merged[right][0]];
      }

      const leftCol = merged[left][1];
      freq.set(leftCol, (freq.get(leftCol) ?? 0) - 1);
      if (freq.get(leftCol) === 0) {
        count -= 1;
      }
      left += 1;
    }
  }

  return [start, end];
}
