/**
 * 846. Hand of Straights
 * https://leetcode.com/problems/hand-of-straights
 */
export function isNStraightHand(hand: number[], groupSize: number): boolean {
  const counter = new Counter(hand);
  const cards = [...counter.keys()].sort((a, b) => a - b);

  for (const card of cards) {
    if (counter.get(card) <= 0) continue;
    for (let i = groupSize - 1; 0 <= i; i--) {
      counter.sub(card + i, counter.get(card));
      if (counter.get(card + i) < 0) {
        return false;
      }
    }
  }

  return true;
}

class Counter<K> extends Map<K, number> {
  constructor(arr: K[]) {
    super();
    arr.forEach((v) => {
      this.add(v);
    });
  }

  get(key: K): number {
    return super.get(key) ?? 0;
  }

  add(key: K, value = 1): void {
    super.set(key, this.get(key) + value);
  }

  sub(key: K, value = 1): void {
    super.set(key, this.get(key) - value);
  }
}
