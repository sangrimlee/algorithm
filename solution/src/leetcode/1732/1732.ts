/**
 * 1732. Find the Highest Altitude
 * https://leetcode.com/problems/find-the-highest-altitude
 */
export function largestAltitude(gains: number[]): number {
  return gains.reduce(
    (altitude, gain) => {
      const nextAltitude = altitude.current + gain;
      return {
        largest: Math.max(altitude.largest, nextAltitude),
        current: nextAltitude,
      };
    },
    {
      largest: 0,
      current: 0,
    },
  ).largest;
}
