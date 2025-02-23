/**
 * 773. Sliding Puzzle
 * https://leetcode.com/problems/sliding-puzzle
 */
export function slidingPuzzle(board: number[][]): number {
  const neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  const startState = board.flat().join('');
  const queue: [string, number][] = [[startState, 0]];
  const visited = new Set([startState]);
  while (0 < queue.length) {
    const peek = queue.shift();
    if (peek === undefined) break;
    const [currentState, moves] = peek;
    if (currentState === '123450') {
      return moves;
    }
    const zeroIndex = currentState.indexOf('0');
    for (const neighbor of neighbors[zeroIndex]) {
      const nextState = swap(currentState, zeroIndex, neighbor);
      if (!visited.has(nextState)) {
        queue.push([nextState, moves + 1]);
        visited.add(nextState);
      }
    }
  }
  return -1;
}

function swap(s: string, i: number, j: number): string {
  const arr = s.split('');
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join('');
}
