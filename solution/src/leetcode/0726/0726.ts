/**
 * 726. Number of Atoms
 * https://leetcode.com/problems/number-of-atoms
 */
export function countOfAtoms(formula: string): string {
  function addDigit(num: number, digit: string) {
    if (num === 0) {
      return parseInt(digit);
    }
    return parseInt(`${digit}${num.toString()}`);
  }

  const n = formula.length;
  const stack: number[] = [];
  const counter = new Counter<string>();

  let element = '';
  let elementCount = 0;
  let coefficient = 1;
  for (let i = n - 1; 0 <= i; i--) {
    const char = formula[i];

    if (/[0-9]/.test(char)) {
      elementCount = addDigit(elementCount, char);
    } else if (/[A-Z]/.test(char)) {
      element = `${char}${element}`;
      counter.update(element, Math.max(1, elementCount) * coefficient);
      element = '';
      elementCount = 0;
    } else if (/[a-z]/.test(char)) {
      element = `${char}${element}`;
    } else if (char === ')') {
      if (0 < elementCount) {
        stack.push(elementCount);
        coefficient *= elementCount;
      } else {
        stack.push(1);
      }
      elementCount = 0;
    } else if (char === '(') {
      coefficient = Math.floor(coefficient / (stack.pop() ?? 1));
      elementCount = 0;
    }
  }
  const elements = [...counter.entries()].sort(([a], [b]) => (a < b ? -1 : 1));
  return elements
    .map(([element, count]) => (1 < count ? `${element}${count.toString()}` : element))
    .join('');
}

class Counter<K> extends Map<K, number> {
  constructor(entries?: K[]) {
    super();
    entries?.forEach((entry) => {
      this.add(entry);
    });
  }
  get(key: K): number {
    return super.get(key) ?? 0;
  }

  update(key: K, value: number) {
    super.set(key, this.get(key) + value);
  }

  add(key: K): void {
    super.set(key, this.get(key) + 1);
  }

  sub(key: K): void {
    super.set(key, this.get(key) - 1);
  }
}
