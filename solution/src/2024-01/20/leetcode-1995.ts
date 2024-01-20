/**
 * 1995. Count Special Quadruplets
 * https://leetcode.com/problems/count-special-quadruplets
 */
class Counter {
  map: Map<number, number>;

  constructor(arr: number[] = []) {
    this.map = new Map();
    arr.forEach((v) => {
      this.add(v);
    });
  }

  get(key: number) {
    return this.map.get(key) ?? 0;
  }

  add(key: number) {
    return this.map.set(key, this.get(key) + 1);
  }
}

export function countQuadruplets(nums: number[]): number {
  const n = nums.length;
  const counter = new Counter([nums[n - 1] - nums[n - 2]]);

  let answer = 0;
  for (let i = n - 3; 1 <= i; i--) {
    for (let j = i - 1; 0 <= j; j--) {
      answer += counter.get(nums[i] + nums[j]);
    }

    for (let k = n - 1; i < k; k--) {
      counter.add(nums[k] - nums[i]);
    }
  }

  return answer;
}
