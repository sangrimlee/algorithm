/**
 * 874. Walking Robot Simulation
 * https://leetcode.com/problems/walking-robot-simulation
 */
export function robotSim(commands: number[], obstacles: number[][]): number {
  const set = new Set(obstacles.map(([x, y]) => position(y, x)));
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  let answer = 0;
  let [cy, cx, cd] = [0, 0, 0];
  for (const command of commands) {
    if (command < 0) {
      cd = (command === -1 ? cd + 1 : cd + 3) % 4;
      continue;
    }

    let move = command;
    const [dy, dx] = directions[cd];
    while (0 < move && !set.has(position(cy + dy, cx + dx))) {
      [cy, cx] = [cy + dy, cx + dx];
      move -= 1;
    }
    answer = Math.max(answer, cy ** 2 + cx ** 2);
  }
  return answer;
}

function position(...coords: number[]): string {
  return coords.join(',');
}
