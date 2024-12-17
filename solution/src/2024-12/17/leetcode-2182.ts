import { Heap } from '@algorithm/lib';

/**
 * 2182. Construct String With Repeat Limit
 * https://leetcode.com/problems/construct-string-with-repeat-limit
 */
export function repeatLimitedString(s: string, repeatLimit: number): string {
  const counter = new Map<string, number>();
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }
  const heap = new Heap<number[]>(([a], [b]) => b - a);
  for (const [char, count] of counter) {
    heap.push([char.charCodeAt(0), count]);
  }

  const answer: string[] = [];
  while (!heap.isEmpty) {
    const [charCode, count] = heap.pop()!;
    const char = String.fromCharCode(charCode);
    const usedCount = Math.min(count, repeatLimit);
    answer.push(char.repeat(usedCount));
    if (usedCount < count && !heap.isEmpty) {
      const [nextCharCode, nextCount] = heap.pop()!;
      answer.push(String.fromCharCode(nextCharCode));
      if (1 < nextCount) {
        heap.push([nextCharCode, nextCount - 1]);
      }
      heap.push([charCode, count - usedCount]);
    }
  }
  return answer.join('');
}
