/**
 * 150365. 미로 탈출 명령어
 * https://school.programmers.co.kr/learn/courses/30/lessons/150365
 */
export function escapeMaze(
  n: number,
  m: number,
  x: number,
  y: number,
  r: number,
  c: number,
  k: number,
): string {
  const getDistance = (x: number, y: number) => Math.abs(r - x) + Math.abs(c - y);
  const isMovable = (x: number, y: number) => 1 <= x && x <= n && 1 <= y && y <= m;

  const diff = getDistance(x, y) - k;
  if (0 < diff || diff % 2 !== 0) {
    return 'impossible';
  }

  const directions: [string, number, number][] = [
    ['d', 1, 0],
    ['l', 0, -1],
    ['r', 0, 1],
    ['u', -1, 0],
  ];

  let answer = '';
  let [cx, cy] = [x, y];
  for (let remainDistance = k; 0 < remainDistance; remainDistance--) {
    for (const [route, dx, dy] of directions) {
      const [nx, ny] = [cx + dx, cy + dy];
      if (isMovable(nx, ny) && getDistance(nx, ny) <= remainDistance) {
        [cx, cy] = [nx, ny];
        answer += route;
        break;
      }
    }
  }

  return answer;
}
