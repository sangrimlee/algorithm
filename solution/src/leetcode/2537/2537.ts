/**
 * 2537. Count the Number of Good Subarrays
 * https://leetcode.com/problems/count-the-number-of-good-subarrays
 */
export function countGood(nums: number[], k: number): number {
  let answer = 0;

  let start = 0;
  let pairCount = 0;
  const counter = new Counter();
  for (const num of nums) {
    pairCount += counter.get(num);
    counter.add(num);
    while (pairCount >= k) {
      counter.sub(nums[start]);
      pairCount -= counter.get(nums[start]);
      start += 1;
    }
    answer += start;
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
}
