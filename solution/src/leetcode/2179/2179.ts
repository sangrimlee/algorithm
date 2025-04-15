/**
 * 2179. Count Good Triplets in an Array
 * https://leetcode.com/problems/count-good-triplets-in-an-array
 */
export function goodTriplets(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const pos2 = new Array<number>(n).fill(-1);
  const indexMapping = new Array<number>(n).fill(-1);
  nums2.forEach((num2, i) => {
    pos2[num2] = i;
  });
  nums1.forEach((num1, i) => {
    indexMapping[pos2[num1]] = i;
  });

  const tree = new BinaryIndexedTree(n);
  let answer = 0;
  for (let value = 0; value < n; value++) {
    const pos = indexMapping[value];

    const left = tree.query(pos);
    tree.update(pos, 1);
    const right = n - 1 - pos - (value - left);
    answer += left * right;
  }
  return answer;
}

class BinaryIndexedTree {
  readonly size: number;
  private readonly tree: number[];

  constructor(size: number) {
    this.size = size;
    this.tree = new Array<number>(this.size + 1).fill(0);
  }

  update(index: number, delta: number): void {
    let currentIndex = index + 1;
    while (currentIndex <= this.size) {
      this.tree[currentIndex] += delta;
      currentIndex += currentIndex & -currentIndex;
    }
  }

  query(index: number): number {
    let result = 0;
    let currentIndex = index + 1;
    while (currentIndex > 0) {
      result += this.tree[currentIndex];
      currentIndex -= currentIndex & -currentIndex;
    }
    return result;
  }
}
