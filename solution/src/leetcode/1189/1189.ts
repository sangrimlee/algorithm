/**
 * 1189. Maximum Number of Balloons
 * https://leetcode.com/problems/maximum-number-of-balloons
 */
export function maxNumberOfBalloons(text: string): number {
  const createCounter = (s: string) => {
    const counter = new Map<string, number>();
    for (const char of s) {
      counter.set(char, (counter.get(char) ?? 0) + 1);
    }
    return counter;
  };

  let answer = Number.MAX_SAFE_INTEGER;
  const balloon = createCounter('balloon');
  const textCounter = createCounter(text);
  for (const [char, count] of balloon.entries()) {
    const textCount = textCounter.get(char) ?? 0;
    answer = Math.min(answer, Math.floor(textCount / count));
  }
  return answer;
}
