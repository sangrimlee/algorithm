import { Heap, range } from '@algorithm/lib';

/**
 * 142085. 디펜스 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/142085
 */
export function defenseGame(n: number, k: number, enemy: number[]): number {
  const heap = new Heap<number>((a, b) => a - b);
  for (const i of range(k)) {
    heap.push(enemy[i]);
  }

  let remain = n;
  for (const i of range(k, enemy.length)) {
    heap.push(i);
    remain -= heap.pop() || 0;
    if (remain < 0) {
      return i;
    }
  }
  return enemy.length;
}
