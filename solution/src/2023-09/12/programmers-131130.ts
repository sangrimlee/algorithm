/**
 * 131130. 혼자 놀기의 달인
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 */
export function playAlone(cards: number[]): number {
  const n = cards.length;
  const parents = new Array(n + 1).fill(undefined).map((_, i) => i);

  function find(a: number): number {
    if (parents[a] === a) {
      return parents[a];
    }
    return (parents[a] = find(parents[a]));
  }

  function union(a: number, b: number): void {
    const parentA = find(a);
    const parentB = find(b);
    if (parentA <= parentB) {
      parents[parentB] = parentA;
    } else {
      parents[parentA] = parentB;
    }
  }

  cards.forEach((card) => {
    union(card, cards[card - 1]);
  });

  const counter = new Map<number, number>();
  cards.forEach((card) => {
    const parent = find(card);
    counter.set(parent, (counter.get(parent) ?? 0) + 1);
  });

  const [first, second] = [...counter.values()].sort((a, b) => b - a);
  return !second ? 0 : first * second;
}
