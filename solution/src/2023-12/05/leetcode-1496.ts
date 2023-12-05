/**
 * 1496. Path Crossing
 * https://leetcode.com/problems/path-crossing
 */
export function isPathCrossing(path: string): boolean {
  const move = (y: number, x: number, direction: string): [number, number] => {
    switch (direction) {
      case 'N':
        return [y - 1, x];
      case 'S':
        return [y + 1, x];
      case 'E':
        return [y, x + 1];
      case 'W':
        return [y, x - 1];
      default:
        throw new Error(`${direction} is wrong direction.`);
    }
  };

  let [cy, cx] = [0, 0];
  const visited = new Set([`${cy},${cx}`]);
  for (const direction of path) {
    const [ny, nx] = move(cy, cx, direction);
    const keyOfPos = `${ny},${nx}`;
    if (visited.has(keyOfPos)) {
      return true;
    }
    visited.add(keyOfPos);
    [cy, cx] = [ny, nx];
  }
  return false;
}
