/**
 * 131127. 할인 행사
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */

class Counter<K> {
  private readonly counter: Map<K, number>;

  constructor() {
    this.counter = new Map<K, number>();
  }

  get(key: K): number {
    return this.counter.get(key) ?? 0;
  }

  add(key: K): void {
    this.counter.set(key, this.get(key) + 1);
  }

  sub(key: K): void {
    this.counter.set(key, this.get(key) - 1);
  }
}

export function salePromotion(want: string[], number: number[], discount: string[]) {
  const [N, M] = [want.length, discount.length];

  const counter = new Counter<string>();

  const isMatched = () => {
    for (let i = 0; i < N; i++) {
      if (counter.get(want[i]) < number[i]) {
        return false;
      }
    }
    return true;
  };

  let answer = 0;
  for (let i = 0; i < M; i++) {
    if (10 <= i) {
      counter.sub(discount[i - 10]);
    }
    counter.add(discount[i]);
    if (isMatched()) {
      answer += 1;
    }
  }
  return answer;
}
