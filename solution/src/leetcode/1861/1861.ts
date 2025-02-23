/**
 * 1861. Rotating the Box
 * https://leetcode.com/problems/rotating-the-box
 */
export function rotateTheBox(box: string[][]): string[][] {
  const [m, n] = [box.length, box[0].length];
  const answer = Array.from({ length: n }, () => new Array<string>(m).fill('.'));
  for (let y = 0; y < m; y++) {
    let lastPosition = n - 1;
    for (let x = n - 1; 0 <= x; x--) {
      if (box[y][x] === '.') continue;
      if (box[y][x] === '#') {
        answer[lastPosition][m - y - 1] = '#';
        lastPosition -= 1;
      } else {
        answer[x][m - y - 1] = '*';
        lastPosition = x - 1;
      }
    }
  }
  return answer;
}
