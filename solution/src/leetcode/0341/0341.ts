/**
 * 341. Flatten Nested List Iterator
 * https://leetcode.com/problems/flatten-nested-list-iterator
 */
export class NestedInteger {
  private value: number | NestedInteger[];

  constructor(value?: number) {
    this.value = value ?? [];
  }

  isInteger(): boolean {
    return !Array.isArray(this.value);
  }

  getInteger(): number | null {
    return !Array.isArray(this.value) ? this.value : null;
  }

  setInteger(value: number) {
    this.value = value;
  }

  add(elem: NestedInteger) {
    if (Array.isArray(this.value)) {
      this.value.push(elem);
    } else {
      this.value = [elem];
    }
  }

  getList(): NestedInteger[] {
    return Array.isArray(this.value) ? this.value : [];
  }
}

export class NestedIterator {
  private stack: NestedInteger[];

  constructor(nestedList: NestedInteger[]) {
    this.stack = nestedList.reverse();
  }

  hasNext(): boolean {
    while (0 < this.stack.length) {
      const top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return true;
      }
      this.stack.pop();
      this.stack.push(...top.getList().reverse());
    }
    return false;
  }

  next(): number {
    const top = this.stack.pop();
    if (top === undefined) {
      return -1;
    }
    return top.getInteger() ?? -1;
  }
}
