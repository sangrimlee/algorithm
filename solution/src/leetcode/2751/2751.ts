/**
 * 2751. Robot Collisions
 * https://leetcode.com/problems/robot-collisions
 */
export function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string,
): number[] {
  const n = positions.length;
  const indices = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => positions[a] - positions[b],
  );

  const stack: number[] = [];
  for (const i of indices) {
    if (directions[i] == 'R') {
      stack.push(i);
      continue;
    }

    while (0 < stack.length && 0 < healths[i]) {
      const peek = stack[stack.length - 1];
      if (healths[peek] < healths[i]) {
        healths[peek] = 0;
        healths[i] -= 1;
        stack.pop();
      } else if (healths[peek] > healths[i]) {
        healths[peek] -= 1;
        healths[i] = 0;
      } else {
        healths[peek] = 0;
        healths[i] = 0;
        stack.pop();
      }
    }
  }

  return healths.filter((health) => 0 < health);
}
