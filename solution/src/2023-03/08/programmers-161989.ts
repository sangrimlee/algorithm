/**
 * 161989. 덧칠하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */
export function overPainting(n: number, m: number, section: number[]): number {
  let totalSection = 0;
  let lastIndex = -1;
  for (const i of section) {
    if (i <= lastIndex) {
      continue;
    }
    lastIndex = i + m - 1;
    totalSection += 1;
  }

  return totalSection;
}
