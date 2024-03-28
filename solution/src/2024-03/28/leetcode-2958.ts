/**
 * 2958. Length of Longest Subarray With at Most K Frequency
 * https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
 */
export function maxSubarrayLength(nums: number[], k: number): number {
  const counter = new Counter();

  let answer = 0;
  let start = 0;
  nums.forEach((num, end) => {
    counter.add(num);
    while (k < counter.get(num)) {
      counter.sub(nums[start]);
      start += 1;
    }
    answer = Math.max(answer, end - start + 1);
  });
  return answer;
}

class Counter {
  private readonly map: Map<number, number>;

  constructor() {
    this.map = new Map();
  }

  get(key: number): number {
    return this.map.get(key) ?? 0;
  }

  add(key: number) {
    return this.map.set(key, this.get(key) + 1);
  }

  sub(key: number) {
    return this.map.set(key, this.get(key) - 1);
  }
}
