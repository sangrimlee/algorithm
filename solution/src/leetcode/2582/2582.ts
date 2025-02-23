/**
 * 2582. Pass the Pillow
 * https://leetcode.com/problems/pass-the-pillow
 */
export function passThePillow(n: number, time: number): number {
  const remain = time % (2 * (n - 1));
  return n - Math.abs(n - 1 - remain);
}
