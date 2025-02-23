/**
 * 1460. Make Two Arrays Equal by Reversing Subarrays
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays
 */
class Counter extends Map<number, number> {
  constructor(arr: number[] = []) {
    super();
    arr.forEach((num) => {
      this.add(num);
    });
  }
  get(key: number): number {
    return super.get(key) ?? 0;
  }

  add(key: number): void {
    super.set(key, this.get(key) + 1);
  }

  sub(key: number): void {
    super.set(key, this.get(key) - 1);
  }
}

export function canBeEqual(target: number[], arr: number[]): boolean {
  const counter = new Counter(target);
  for (const num of arr) {
    const count = counter.get(num);
    counter.sub(num);
    if (count === 0) {
      return false;
    }
  }
  return true;
}
