/**
 * 307. Range Sum Query - Mutable
 * https://leetcode.com/problems/range-sum-query-mutable
 */
class Node {
  start: number;
  end: number;
  total: number;
  left: Node | null;
  right: Node | null;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.total = 0;
    this.left = null;
    this.right = null;
  }
}

export class NumArray {
  private readonly root: Node | null;

  constructor(nums: number[]) {
    this.root = this.createTree(nums, 0, nums.length - 1);
  }

  private createTree(nums: number[], start: number, end: number): Node | null {
    if (start > end) {
      return null;
    }
    if (start === end) {
      const node = new Node(start, end);
      node.total = nums[start];
      return node;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new Node(start, end);
    node.left = this.createTree(nums, start, mid);
    node.right = this.createTree(nums, mid + 1, end);
    node.total = (node.left?.total ?? 0) + (node.right?.total ?? 0);
    return node;
  }

  private _update(node: Node | null, i: number, value: number): void {
    if (node === null) {
      return;
    }
    if (node.start === node.end) {
      node.total = value;
      return;
    }
    const mid = Math.floor((node.start + node.end) / 2);
    if (i <= mid) {
      this._update(node.left, i, value);
    } else {
      this._update(node.right, i, value);
    }
    node.total = (node.left?.total ?? 0) + (node.right?.total ?? 0);
  }

  private _sumRange(node: Node | null, start: number, end: number): number {
    if (node === null) {
      return 0;
    }
    if (node.start === start && node.end === end) {
      return node.total;
    }
    const mid = Math.floor((node.start + node.end) / 2);
    if (end <= mid) {
      return this._sumRange(node.left, start, end);
    }
    if (start >= mid + 1) {
      return this._sumRange(node.right, start, end);
    }
    return this._sumRange(node.left, start, mid) + this._sumRange(node.right, mid + 1, end);
  }

  update(i: number, value: number): void {
    this._update(this.root, i, value);
  }

  sumRange(left: number, right: number): number {
    return this._sumRange(this.root, left, right);
  }
}
