/**
 * 649. Dota2 Senate
 * https://leetcode.com/problems/dota2-senate
 */
export function predictPartyVictory(senate: string): string {
  const queue = [];
  let [rCount, dCount] = [0, 0];
  let [rBanCount, dBanCount] = [0, 0];

  for (const s of senate) {
    queue.push(s);
    rCount += Number(s === 'R');
    dCount += Number(s === 'D');
  }

  while (0 < rCount && 0 < dCount) {
    const current = queue.shift();
    if (current === 'R') {
      if (0 < rBanCount) {
        rBanCount -= 1;
        rCount -= 1;
      } else {
        dBanCount += 1;
        queue.push('R');
      }
    } else {
      if (0 < dBanCount) {
        dBanCount -= 1;
        dCount -= 1;
      } else {
        rBanCount += 1;
        queue.push('D');
      }
    }
  }

  return 0 < rCount ? 'Radiant' : 'Dire';
}
