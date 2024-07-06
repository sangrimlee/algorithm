import { ListNode } from '@algorithm/lib';

/**
 * 2326. Spiral Matrix IV
 * https://leetcode.com/problems/spiral-matrix-iv
 */
export function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const answer: number[][] = Array.from({ length: m }, () => new Array(n).fill(-1));
  let currentNode = head;
  for (const [y, x] of sprial(m, n)) {
    if (currentNode === null) {
      return answer;
    }
    answer[y][x] = currentNode.val;
    currentNode = currentNode.next;
  }
  return answer;
}

function* sprial(m: number, n: number) {
  const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let currentIndex = 0;
  let [cy, cx] = [0, -1];
  let currentDirection = 0;
  while (currentIndex < m * n) {
    const [dy, dx] = directions[currentDirection];
    const [ny, nx] = [cy + dy, cx + dx];
    if (0 <= ny && ny < m && 0 <= nx && nx < n && !visited[ny][nx]) {
      visited[ny][nx] = true;
      yield [ny, nx];
      currentIndex += 1;
      [cy, cx] = [ny, nx];
    } else {
      currentDirection = (currentDirection + 1) % 4;
    }
  }
}
