/* eslint-disable @typescript-eslint/only-throw-error */

import { range } from '@algorithm/lib';

/**
 * 169199. 리코쳇 로봇
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 */
export function ricochetRobot(board: string[]): number {
  const [m, n] = [board.length, board[0].length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = Array.from({ length: m }).map(() => new Array<boolean>(n).fill(false));

  const isMovable = (y: number, x: number) =>
    0 <= y && y < m && 0 <= x && x < n && board[y][x] !== 'D';
  const findRobot = () => {
    for (const y of range(m)) {
      for (const x of range(n)) {
        if (board[y][x] === 'R') {
          return [y, x];
        }
      }
    }
    throw "Can't find robot.";
  };

  const moveRobot = (y: number, x: number, direction: number) => {
    const [dy, dx] = directions[direction];
    let [cy, cx] = [y, x];
    let [ny, nx] = [cy + dy, cx + dx];
    while (isMovable(ny, nx)) {
      [cy, cx] = [ny, nx];
      [ny, nx] = [ny + dy, nx + dx];
    }
    return [cy, cx];
  };

  const [sy, sx] = findRobot();
  visited[sy][sx] = true;

  let queue = [[sy, sx, 0]];
  while (0 < queue.length) {
    const nextQueue: number[][] = [];
    for (const [cy, cx, cc] of queue) {
      for (const direction of range(4)) {
        const [ny, nx] = moveRobot(cy, cx, direction);
        if (board[ny][nx] === 'G') {
          return cc + 1;
        }
        if (!visited[ny][nx]) {
          visited[ny][nx] = true;
          nextQueue.push([ny, nx, cc + 1]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
}
