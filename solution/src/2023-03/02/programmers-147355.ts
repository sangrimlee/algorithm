/**
 * 147355. 크기가 작은 부분문자열
 * https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
export function solution(t: string, p: string): number {
  let answer = 0;

  const threshold = parseInt(p);
  for (let i = 0; i <= t.length - p.length; i++) {
    const currentNum = parseInt(t.substring(i, i + p.length));
    if (currentNum <= threshold) {
      answer += 1;
    }
  }

  return answer;
}
