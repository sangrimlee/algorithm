/**
 * 258712. 가장 많이 받은 선물
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 */
class Counter<K> {
  private readonly map: Map<K, number>;
  constructor(arr: K[] = []) {
    this.map = new Map();
    arr.forEach((v) => {
      this.add(v);
    });
  }

  get(key: K): number {
    return this.map.get(key) ?? 0;
  }

  add(key: K) {
    return this.map.set(key, this.get(key) + 1);
  }

  sub(key: K) {
    return this.map.set(key, this.get(key) - 1);
  }
}

export function receivedGift(friends: string[], gifts: string[]): number {
  const giftCounts = new Counter<string>();
  const totalGifts = new Counter<string>();
  for (const gift of gifts) {
    const [given, received] = gift.split(' ');
    totalGifts.add(given);
    totalGifts.sub(received);
    giftCounts.add(gift);
  }

  function canRecevieGift(a: string, b: string) {
    if (a === b || giftCounts.get(`${a} ${b}`) < giftCounts.get(`${b} ${a}`)) {
      return false;
    }
    return (
      giftCounts.get(`${a} ${b}`) > giftCounts.get(`${b} ${a}`) ||
      totalGifts.get(a) > totalGifts.get(b)
    );
  }

  return friends.reduce(
    (answer, a) => Math.max(answer, friends.filter((b) => canRecevieGift(a, b)).length),
    0,
  );
}
