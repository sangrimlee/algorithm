/**
 * 2799. Count Complete Subarrays in an Array
 * https://leetcode.com/problems/count-complete-subarrays-in-an-array
 */
export function countCompleteSubarrays(nums: number[]): number {
  const n = nums.length;
  const distinctCount = new Set(nums).size;

  let answer = 0;
  let start = 0;
  const counter = new Counter();
  for (let end = 0; end < n; end++) {
    counter.add(nums[end]);
    while (counter.size === distinctCount) {
      answer += n - end;
      counter.sub(nums[start]);
      start += 1;
    }
  }
  return answer;
}

class Counter {
  private readonly map: Map<number, number>;

  constructor() {
    this.map = new Map();
  }

  get(num: number): number {
    return this.map.get(num) ?? 0;
  }

  add(num: number): void {
    this.map.set(num, this.get(num) + 1);
  }

  sub(num: number): void {
    this.map.set(num, this.get(num) - 1);
    if (this.get(num) <= 0) {
      this.map.delete(num);
    }
  }

  get size(): number {
    return this.map.size;
  }
}
