/**
 * 1560. Most Visited Sector in  a Circular Track
 * https://leetcode.com/problems/most-visited-sector-in-a-circular-track
 */
export function mostVisited(n: number, rounds: number[]): number[] {
  const sectors = Array.from({ length: n }).map((_, i) => i + 1);
  const startSector = rounds[0];
  const lastSector = rounds[rounds.length - 1];
  if (startSector <= lastSector) {
    return sectors.filter((sector) => startSector <= sector && sector <= lastSector);
  }
  return sectors.filter((sector) => startSector <= sector || sector <= lastSector);
}
