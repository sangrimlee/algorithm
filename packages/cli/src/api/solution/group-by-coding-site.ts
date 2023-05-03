import { CodingSite, Solution } from '@/types';
import { getSolutions } from './solutions';

export async function getSolutionGroupByCodingSite(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);

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
