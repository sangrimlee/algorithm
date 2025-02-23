/**
 * 2515. Shortest Distance to Target String in a Circular Array
 * https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array
 */
export function closetTarget(words: string[], target: string, startIndex: number): number {
  const n = words.length;

  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      const distance = Math.abs(startIndex - i);
      answer = Math.min(answer, Math.min(distance, Math.abs(n - distance)));
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
