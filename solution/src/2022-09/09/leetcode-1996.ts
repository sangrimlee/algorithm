/**
 * 1996. The Number of Weak Characters in the Game
 * https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/
 */
export function numberOfWeakCharacters(properties: number[][]): number {
  let answer = 0;
  const stack: number[] = [];
  properties.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));

  for (const [, defense] of properties) {
    while (0 < stack.length && stack[stack.length - 1] < defense) {
      stack.pop();
      answer += 1;
    }
    stack.push(defense);
  }

  return answer;
}
