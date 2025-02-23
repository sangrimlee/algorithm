/**
 * 250136. [PCCP 기출문제] 2번 / 석유 시추
 * https://school.programmers.co.kr/learn/courses/30/lessons/250136
 */
export function drillOil(land: number[][]): number {
  const [n, m] = [land.length, land[0].length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const oilGroup = new Map<number, number>();

  function getTotalOil(y: number, x: number, group: number): number {
    let totalOil = 1;
    let queue = [[y, x]];
    land[y][x] = group;
    while (0 < queue.length) {
      const nextQueue = [];
      for (const [cy, cx] of queue) {
        for (const [dy, dx] of directions) {
          const [ny, nx] = [cy + dy, cx + dx];
          if (0 <= ny && ny < n && 0 <= nx && nx < m && land[ny][nx] === 1) {
            land[ny][nx] = group;
            totalOil += 1;
            nextQueue.push([ny, nx]);
          }
        }
      }
      queue = nextQueue;
    }
    return totalOil;
  }

  let group = 2;
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (land[y][x] === 1) {
        oilGroup.set(group, getTotalOil(y, x, group));
        group += 1;
      }
    }
  }

  let answer = 0;
  for (let x = 0; x < m; x++) {
    let totalOil = 0;
    const groups = new Set();
    for (let y = 0; y < n; y++) {
      if (1 < land[y][x] && !groups.has(land[y][x])) {
        totalOil += oilGroup.get(land[y][x]) ?? 0;
        groups.add(land[y][x]);
      }
    }
    answer = Math.max(answer, totalOil);
  }
  return answer;
}
