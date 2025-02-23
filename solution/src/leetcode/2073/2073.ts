/**
 * 2073. Time Needed to Buy Tickets
 * https://leetcode.com/problems/time-needed-to-buy-tickets
 */
export function timeRequiredToBuy(tickets: number[], k: number): number {
  let answer = 0;
  for (let i = 0; i < tickets.length; i++) {
    answer += Math.min(i <= k ? tickets[k] : tickets[k] - 1, tickets[i]);
  }
  return answer;
}
