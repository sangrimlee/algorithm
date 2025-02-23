/**
 * 2032. Two Out of Three
 * https://leetcode.com/problems/two-out-of-three
 */
export function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const counter = new Map<number, number>();
  nums1.forEach((num) => {
    const count = counter.get(num) ?? 0;
    counter.set(num, count | 1);
  });
  nums2.forEach((num) => {
    const count = counter.get(num) ?? 0;
    counter.set(num, count | (1 << 1));
  });
  nums3.forEach((num) => {
    const count = counter.get(num) ?? 0;
    counter.set(num, count | (1 << 2));
  });

  const answer: number[] = [];
  for (const [num, count] of counter.entries()) {
    if ([3, 5, 6, 7].includes(count)) {
      answer.push(num);
    }
  }
  return answer;
}
