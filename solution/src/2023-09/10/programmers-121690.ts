/**
 * 121690. 보물 지도
 * https://school.programmers.co.kr/learn/courses/30/lessons/121690
 */
export function treasureMap(n: number, m: number, hole: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const distance = new Array(n)
    .fill(null)
    .map(() => new Array(m).fill(null).map(() => [Infinity, Infinity]));
  for (const [a, b] of hole) {
    distance[a - 1][b - 1][0] = -1;
    distance[a - 1][b - 1][1] = -1;
  }
  distance[0][0][0] = 0;
  distance[0][0][1] = 0;

  function isMovable(y: number, x: number) {
    return 0 <= y && y < n && 0 <= x && x < m;
  }

  const queue = [[0, 0, 1]];
  while (0 < queue.length) {
    const peek = queue.shift();
    if (!peek) {
      continue;
    }
    const [cy, cx, canSkip] = peek;
    const nd = distance[cy][cx][canSkip] + 1;
    for (const [dy, dx] of directions) {
      const [ny, nx] = [cy + dy, cx + dx];
      if (isMovable(ny, nx) && nd < distance[ny][nx][canSkip]) {
        distance[ny][nx][canSkip] = nd;
        queue.push([ny, nx, canSkip]);
      }
    }
    if (!canSkip) {
      continue;
    }
    for (const [dy, dx] of directions) {
      const [ny, nx] = [cy + 2 * dy, cx + 2 * dx];
      if (isMovable(ny, nx) && nd < distance[ny][nx][0]) {
        distance[ny][nx][0] = nd;
        queue.push([ny, nx, 0]);
      }
    }
  }

  const minDistance = Math.min(...distance[n - 1][m - 1]);
  return minDistance === Infinity ? -1 : minDistance;
}
