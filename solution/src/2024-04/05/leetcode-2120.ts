/**
 * 2120. Execution of All Suffix Instructions Staying in a Grid
 * https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid
 */
export function executeInstructions(n: number, startPos: number[], s: string): number[] {
  function isMovable(y: number, x: number) {
    return 0 <= y && y < n && 0 <= x && x < n;
  }

  function move(y: number, x: number, instruction: string) {
    switch (instruction) {
      case 'U':
        return [y - 1, x];
      case 'D':
        return [y + 1, x];
      case 'L':
        return [y, x - 1];
      case 'R':
        return [y, x + 1];
      default:
        return [y, x];
    }
  }

  function execute(y: number, x: number, startIndex: number) {
    let executeCount = 0;
    for (let i = startIndex; i < s.length; i++) {
      [y, x] = move(y, x, s[i]);
      if (!isMovable(y, x)) {
        return executeCount;
      }
      executeCount += 1;
    }
    return executeCount;
  }

  const [sy, sx] = startPos;
  return Array.from(s, (_, i) => execute(sy, sx, i));
}
