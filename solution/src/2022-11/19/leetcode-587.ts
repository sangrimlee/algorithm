/**
 * 587. Erect the Fence
 * https://leetcode.com/problems/erect-the-fence/
 */
export function outerTrees(points: number[][]): number[][] {
  const stack: number[][] = [];
  points.sort((p, q) => (q[0] - p[0] == 0 ? q[1] - p[1] : q[0] - p[0]));

  const orientation = (r: number[]) => {
    const p = stack[stack.length - 1];
    const q = stack[stack.length - 2];
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
  };

  for (const point of points) {
    while (2 <= stack.length && 0 < orientation(point)) {
      stack.pop();
    }
    stack.push(point);
  }
  stack.pop();

  for (const point of points.reverse()) {
    while (2 <= stack.length && 0 < orientation(point)) {
      stack.pop();
    }
    stack.push(point);
  }

  const delimiter = '-';
  const pointSet = new Set(stack.map((point) => point.join(delimiter)));
  const answer = Array.from(pointSet).map((point) => {
    const [x, y] = point.split(delimiter);
    return [+x, +y];
  });
  return answer;
}
