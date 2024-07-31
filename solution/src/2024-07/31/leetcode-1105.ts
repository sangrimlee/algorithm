/**
 * 1105. Filling Bookcase Shelves
 * https://leetcode.com/problems/filling-bookcase-shelves
 */
export function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length;
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let maxHeight = 0;
    let totalWidth = 0;
    let prevIndex = i - 1;
    while (0 <= prevIndex && totalWidth + books[prevIndex][0] <= shelfWidth) {
      maxHeight = Math.max(maxHeight, books[prevIndex][1]);
      totalWidth += books[prevIndex][0];
      dp[i] = Math.min(dp[i], dp[prevIndex] + maxHeight);
      prevIndex -= 1;
    }
  }

  return dp[n];
}
