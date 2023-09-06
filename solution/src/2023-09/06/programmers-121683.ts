/**
 * 121683. [PCCP 모의고사 #1] 외톨이 알파벳
 * https://school.programmers.co.kr/learn/courses/30/lessons/121683
 */
export function aloneAlphabet(s: string) {
  const stack: string[] = [];
  const counter = new Map<string, number>();
  for (const char of s) {
    if (0 < stack.length && stack[stack.length - 1] === char) {
      continue;
    }
    stack.push(char);
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }
  const alone = new Set(stack.filter((char) => 1 < (counter.get(char) ?? 0)));
  return 0 < alone.size ? [...alone].sort().join('') : 'N';
}
