/**
 * 118670. 행렬과 연산
 * https://school.programmers.co.kr/learn/courses/30/lessons/118670
 */
type Operation = 'Rotate' | 'ShiftRow';

class Node<T> {
  value: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(value: T, prev: Node<T> | null = null, next: Node<T> | null = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class Deque<T> {
  private size = 0;
  private firstNode: Node<T> | null = null;
  private lastNode: Node<T> | null = null;

  constructor(arr: T[] = []) {
    arr.forEach((value) => {
      this.push(value);
    });
  }

  get length() {
    return this.size;
  }

  get first(): T | undefined {
    return this.firstNode?.value;
  }

  get last(): T | undefined {
    return this.lastNode?.value;
  }

  push(value: T): void {
    const last = this.lastNode;
    this.lastNode = new Node(value, last);
    if (last !== null) {
      last.next = this.lastNode;
    }
    if (this.firstNode === null) {
      this.firstNode = this.lastNode;
    }
    this.size += 1;
  }

  pushLeft(value: T): void {
    const first = this.firstNode;
    this.firstNode = new Node(value, null, first);
    if (first !== null) {
      first.prev = this.firstNode;
    }
    if (this.lastNode === null) {
      this.lastNode = this.firstNode;
    }
    this.size += 1;
  }

  pop(): T | undefined {
    if (this.size === 0 || this.firstNode === null || this.lastNode === null) {
      return;
    }
    const last = this.lastNode;
    this.lastNode = last.prev;
    if (this.lastNode !== null) {
      this.lastNode.next = null;
    }
    if (this.firstNode === last) {
      this.firstNode = null;
    }
    this.size -= 1;
    return last.value;
  }

  popLeft(): T | undefined {
    if (this.size === 0 || this.firstNode === null || this.lastNode === null) {
      return;
    }
    const first = this.firstNode;
    this.firstNode = first.next;
    if (this.firstNode !== null) {
      this.firstNode.prev = null;
    }
    if (this.lastNode === first) {
      this.lastNode = null;
    }
    this.size -= 1;
    return first.value;
  }

  rotate(): void {
    if (this.size === 0) {
      return;
    }
    const last = this.pop();
    if (last !== undefined) {
      this.pushLeft(last);
    }
  }

  *[Symbol.iterator]() {
    let currentNode = this.firstNode;
    while (currentNode !== null) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }
}

export function matrixAndOpertaion(rc: number[][], operations: Operation[]): number[][] {
  const [m, n] = [rc.length, rc[0].length];
  const left = new Deque<number>();
  const right = new Deque<number>();
  const mid = new Deque<Deque<number>>();

  rc.forEach((row) => {
    left.push(row[0]);
    right.push(row[n - 1]);
    mid.push(new Deque(row.slice(1, -1)));
  });

  const shiftRow = () => {
    left.rotate();
    right.rotate();
    mid.rotate();
  };

  const rotate = () => {
    const leftValue = left.popLeft();
    if (mid.first && leftValue !== undefined) {
      mid.first.pushLeft(leftValue);
      const lastValue = mid.first.pop();
      if (lastValue !== undefined) {
        right.pushLeft(lastValue);
      }
    }

    const rightValue = right.pop();
    if (mid.last && rightValue !== undefined) {
      mid.last.push(rightValue);
      const firstValue = mid.last.popLeft();
      if (firstValue !== undefined) {
        left.push(firstValue);
      }
    }
  };

  operations.forEach((op) => {
    if (op === 'ShiftRow') {
      shiftRow();
    } else {
      rotate();
    }
  });

  const answer: number[][] = [];
  for (let i = 0; i < m; i++) {
    const leftValue = left.popLeft();
    const midValue = mid.popLeft();
    const rightValue = right.popLeft();
    if (leftValue !== undefined && midValue !== undefined && rightValue !== undefined) {
      answer.push([leftValue, ...midValue, rightValue]);
    }
  }

  return answer;
}
