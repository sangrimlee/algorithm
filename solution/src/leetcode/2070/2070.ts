/**
 * 2070. Most Beautiful Item for Each Query
 * https://leetcode.com/problems/most-beautiful-item-for-each-query
 */
export function maximumBeauty(items: number[][], queries: number[]): number[] {
  const [n, m] = [items.length, queries.length];
  const answer = new Array<number>(m).fill(0);
  const sortedItems = items.sort((a, b) => a[0] - b[0]);
  const sortedQueries = queries.map((query, i) => [i, query]).sort((a, b) => a[1] - b[1]);

  let itemIndex = 0;
  let maxBeauty = 0;
  for (const [queryIndex, query] of sortedQueries) {
    while (itemIndex < n && sortedItems[itemIndex][0] <= query) {
      maxBeauty = Math.max(maxBeauty, sortedItems[itemIndex][1]);
      itemIndex += 1;
    }
    answer[queryIndex] = maxBeauty;
  }
  return answer;
}
