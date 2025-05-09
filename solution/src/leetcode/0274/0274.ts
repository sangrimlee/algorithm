/**
 * 274. H-Index
 * https://leetcode.com/problems/h-index
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function hIndex(citations: number[]): number {
  const n = citations.length;
  const counts = new Array<number>(n + 1).fill(0);
  for (const citation of citations) {
    if (n <= citation) {
      counts[n] += 1;
    } else {
      counts[citation] += 1;
    }
  }

  let totalCount = 0;
  for (let i = n; 0 <= i; i--) {
    totalCount += counts[i];
    if (i <= totalCount) {
      return i;
    }
  }
  return 0;
}

/**
 * Time Complexity: O(nlog(n))
 * Space Complexity: O(1)
export function hIndex(citations: number[]): number {
  const n = citations.length;
  citations.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (n - i <= citations[i]) {
      return n - i;
    }
  }
  return 0;
}
*/
