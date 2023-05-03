import path from 'node:path';

import { groupByCodingSite, getSolutions } from '@/api/solution';
import { createSolutionPageTemplate } from '@/lib/template';
import { ensureWriteFile, ensureWriteJson } from '@/utils/fs';
import { CodingSite, Solution } from '@/types';
import { EXTNAME } from '@/constants';

async function generateSolutionPage(solution: Solution, outDir: string) {
  const solutionPageTemplate = createSolutionPageTemplate(solution);

  await ensureWriteFile(
    path.join(outDir, solution.codingSite.toLowerCase(), `${solution.id}${EXTNAME.MDX}`),
    solutionPageTemplate,
  );
}

export async function generateSolutionPageMeta(
  codingSite: CodingSite,
  solutions: Solution[],
  outDir: string,
) {
  const meta = Object.fromEntries(solutions.map(({ id, title }) => [id, title]));

  await ensureWriteJson(path.join(outDir, codingSite.toLowerCase(), `_meta${EXTNAME.JSON}`), meta);
}

export async function generatePage(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);
  const groups = Array.from(groupByCodingSite(solutions));

  await Promise.all([
    ...solutions.map((solution) => generateSolutionPage(solution, outDir)),
    ...groups.map(([codingSite, solution]) =>
      generateSolutionPageMeta(codingSite, solution, outDir),
    ),
  ]);
}
