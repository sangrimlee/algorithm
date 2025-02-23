/**
 * 2475. Number of Unequal Triplets in Array
 * https://leetcode.com/problems/number-of-unequal-triplets-in-array
 */
class Counter {
  private readonly map: Map<number, number>;

  constructor() {
    this.map = new Map();
  }

  get(num: number) {
    return this.map.get(num) ?? 0;
  }

  add(num: number) {
    return this.map.set(num, this.get(num) + 1);
  }

  sub(num: number) {
    return this.map.set(num, this.get(num) - 1);
  }
}

export function unequalTriplets(nums: number[]): number {
  const counter = new Counter();

  let pairs = 0;
  let triplets = 0;
  nums.forEach((num, i) => {
    const count = counter.get(num);
    triplets += pairs - count * (i - count);
    pairs += i - count;
    counter.add(num);
  });

  return triplets;
}
