/**
 * 1688. Count of Matches in Tournament
 * https://leetcode.com/problems/count-of-matches-in-tournament
 */
export function numberOfMatches(n: number): number {
  /**
   * As n - 1 teams will be eliminated, there will be n - 1 matches played,
   * with each match eliminating a team.
   */
  return n - 1;
}
