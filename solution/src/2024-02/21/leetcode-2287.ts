/**
 * 2287. Rearrange Characters to Make Target String
 * https://leetcode.com/problems/rearrange-characters-to-make-target-string
 */
export function rearrangeCharacters(s: string, target: string): number {
  function createCounter(str: string) {
    const counter = new Map<string, number>();
    for (const char of str) {
      counter.set(char, (counter.get(char) ?? 0) + 1);
    }
    return counter;
  }

  const sCounter = createCounter(s);
  const tCounter = createCounter(target);

  let answer = Number.MAX_SAFE_INTEGER;
  for (const [char, tCount] of tCounter.entries()) {
    const sCount = sCounter.get(char) ?? 0;
    answer = Math.min(answer, Math.floor(sCount / tCount));
  }
  return answer;
}
