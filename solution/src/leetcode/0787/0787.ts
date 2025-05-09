/**
 * 787. Cheapest Flights Within K Stops
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 */
export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graph = Array.from({ length: n }, () => new Array<[number, number]>());
  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }
  const prices = new Array<number>(n).fill(Number.MAX_SAFE_INTEGER);
  prices[src] = 0;

  let queue = [[src, 0, 0]];
  while (0 < queue.length) {
    const nextQueue: number[][] = [];
    for (const [city, price, stop] of queue) {
      if (stop === k + 1) {
        continue;
      }
      for (const [nextCity, nextPrice] of graph[city]) {
        if (price + nextPrice < prices[nextCity]) {
          prices[nextCity] = price + nextPrice;
          queue.push([nextCity, price + nextPrice, stop + 1]);
        }
      }
    }
    queue = nextQueue;
  }

  return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst];
}
