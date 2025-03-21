/**
 * 661. Image Smoother
 * https://leetcode.com/problems/image-smoother
 */
export function imageSmoother(img: number[][]): number[][] {
  const [m, n] = [img.length, img[0].length];
  const directions = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];

  const result: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(0));
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      let total = 0;
      let count = 0;
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (0 <= ny && ny < m && 0 <= nx && nx < n) {
          total += img[ny][nx];
          count += 1;
        }
      }
      result[y][x] = Math.floor(total / count);
    }
  }
  return result;
}
