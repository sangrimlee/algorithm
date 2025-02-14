import type { CodingSite, Solution } from '@/types';

export function groupByCodingSite(solutions: Solution[]) {
  const groups = new Map<CodingSite, Solution[]>();
  for (const solution of solutions) {
    const group = groups.get(solution.codingSite);
    if (group) {
      group.push(solution);
    } else {
      groups.set(solution.codingSite, [solution]);
    }
  }

  return groups;
}
