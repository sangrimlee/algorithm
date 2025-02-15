import { Heap } from '@algorithm/lib';

/**
 * 121688. 신입사원 교육
 * https://school.programmers.co.kr/learn/courses/30/lessons/121688
 */
export function newRecruits(ability: number[], n: number): number {
  const heap = new Heap<number>((a, b) => a - b);
  ability.forEach((a) => { heap.push(a); });

  for (let i = 0; i < n; i++) {
    const sumAbility = (heap.pop() ?? 0) + (heap.pop() ?? 0);
    heap.push(sumAbility);
    heap.push(sumAbility);
  }

  return heap.heap.reduce((acc, v) => acc + v, 0);
}
