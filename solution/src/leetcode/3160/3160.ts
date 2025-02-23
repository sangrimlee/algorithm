/**
 * 3160. Find the Number of Distinct Colors Among the Balls
 * https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls
 */
export function queryResults(limit: number, queries: number[][]): number[] {
  const balls = new Map<number, number>();
  const colors = new Map<number, number>([]);

  const answer: number[] = [];
  for (const [ball, color] of queries) {
    const prevColor = balls.get(ball) ?? 0;
    if (prevColor !== 0) {
      const prevCount = colors.get(prevColor) ?? 0;
      if (prevCount <= 1) {
        colors.delete(prevColor);
      } else {
        colors.set(prevColor, prevCount - 1);
      }
    }

    balls.set(ball, color);
    colors.set(color, (colors.get(color) ?? 0) + 1);
    answer.push(colors.size);
  }
  return answer;
}
