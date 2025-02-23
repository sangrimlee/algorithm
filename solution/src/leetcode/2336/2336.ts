/**
 * 2336. Smallest Number in Infinite Set
 * https://leetcode.com/problems/smallest-number-in-infinite-set
 */
export class SmallestInfiniteSet {
  private smallest: number;
  private readonly set: Set<number>;

  constructor() {
    this.smallest = 1;
    this.set = new Set();
  }

  popSmallest(): number {
    if (this.set.size === 0) {
      this.smallest += 1;
      return this.smallest - 1;
    }
    const smallestFromSet = this.findSmallestFromSet();
    this.set.delete(smallestFromSet);
    return smallestFromSet;
  }

  addBack(num: number): void {
    if (num < this.smallest) {
      this.set.add(num);
    }
  }

  findSmallestFromSet(): number {
    let smallestFromSet = Number.MAX_SAFE_INTEGER;
    for (const num of this.set) {
      smallestFromSet = Math.min(smallestFromSet, num);
    }
    return smallestFromSet;
  }
}
