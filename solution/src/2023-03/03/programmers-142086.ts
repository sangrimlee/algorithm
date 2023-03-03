/**
 * 142086. 가장 가까운 같은 글자
 * https://school.programmers.co.kr/learn/courses/30/lessons/142086
 */
export function solution(s: string) {
  const answer = [];
  const lastIndicies = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastIndex = lastIndicies.get(char);
    answer.push(lastIndex !== undefined ? i - lastIndex : -1);
    lastIndicies.set(char, i);
  }

  return answer;
}
