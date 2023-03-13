/**
 * 161990. 바탕화면 정리
 * https://school.programmers.co.kr/learn/courses/30/lessons/161990
 */
export function cleanUpWallpaper(wallpaper: string[]) {
  const [N, M] = [wallpaper.length, wallpaper[0].length];
  let [lux, luy, rdx, rdy] = [N, M, 0, 0];

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (wallpaper[x][y] === '#') {
        lux = Math.min(lux, x);
        luy = Math.min(luy, y);
        rdx = Math.max(rdx, x + 1);
        rdy = Math.max(rdy, y + 1);
      }
    }
  }
  return [lux, luy, rdx, rdy];
}
