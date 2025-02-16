/**
 * 838. Push Dominoes
 * https://leetcode.com/problems/push-dominoes/
 */
export function pushDominoes(dominoes: string): string {
  const N = dominoes.length;
  const arr = dominoes.split('');
  const forces = new Array<number>(N).fill(0);

  arr.reduce((force, domino, i) => {
    let nextForce: number;
    if (domino === 'R') {
      nextForce = N;
    } else if (domino === 'L') {
      nextForce = 0;
    } else {
      nextForce = Math.max(force - 1, 0);
    }
    forces[i] += nextForce;
    return nextForce;
  }, 0);

  arr.reduceRight((force, domino, i) => {
    let nextForce: number;
    if (domino === 'L') {
      nextForce = N;
    } else if (domino === 'R') {
      nextForce = 0;
    } else {
      nextForce = Math.max(force - 1, 0);
    }
    forces[i] -= nextForce;
    return nextForce;
  }, 0);

  return forces.map((force) => (force === 0 ? '.' : 0 < force ? 'R' : 'L')).join('');
}
