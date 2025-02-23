/**
 * 1436. Destination City
 * https://leetcode.com/problems/destination-city
 */
export function destCity(paths: string[][]): string {
  const starts = new Set<string>();
  const ends = new Set<string>();
  for (const [start, end] of paths) {
    starts.add(start);
    ends.add(end);
  }

  for (const city of ends) {
    if (!starts.has(city)) {
      return city;
    }
  }
  throw new Error('There is no destination city.');
}
