/**
 * 138476. 귤 고르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */
export function solution(k: number, tangerine: number[]): number {
  const sizeCounts = new Map<number, number>();
  for (const size of tangerine) {
    sizeCounts.set(size, (sizeCounts.get(size) ?? 0) + 1);
  }

  const counts = Array.from(sizeCounts.values()).sort((a, b) => b - a);

  let answer = 0;
  let totalCount = 0;
  while (answer < counts.length && totalCount < k) {
    totalCount += counts[answer];
    answer += 1;
  }
  return answer;
}
