import path from 'node:path';

import { getSolutions } from '@/api/solution';
import { createSolutionPageTemplate } from '@/lib/template';
import { ensureWriteFile } from '@/utils/fs';
import { Solution } from '@/types';
import { EXTNAME } from '@/constants';

async function generateSolutionPage(solution: Solution, outDir: string) {
  const solutionPageTemplate = createSolutionPageTemplate(solution);

  await ensureWriteFile(
    path.join(outDir, solution.codingSite.toLowerCase(), `${solution.id}${EXTNAME.MDX}`),
    solutionPageTemplate,
  );
}

export async function generatePage(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);

  await Promise.all(solutions.map((solution) => generateSolutionPage(solution, outDir)));
}
