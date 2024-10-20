import { existsSync } from 'node:fs';
import path from 'node:path';

import { getLeetCodeQuestionBySlug } from '@/api/leetcode';
import { groupByCodingSite, getSolutions } from '@/api/solution';
import { ensureWriteFile } from '@/utils/fs';
import {
  createIntroductionPageTemplate,
  createLeetCodeSolutionPageTemplate,
  createProgrammersSolutionPageTemplate,
} from '@/lib/template';

import { EXTNAME } from '@/constants';
import { CodingSite, LeetCodeSolution, ProgrammersSolution, Solution } from '@/types';
import { createSolutionPageMeta } from '../template/page';

async function generateLeetCodeSolutionPage(solution: LeetCodeSolution, pagePath: string) {
  try {
    const { difficulty, topics } = await getLeetCodeQuestionBySlug(solution.slug);
    const template = await createLeetCodeSolutionPageTemplate(solution, difficulty, topics);
    await ensureWriteFile(pagePath, template);
  } catch (error) {
    const template = await createLeetCodeSolutionPageTemplate(solution);
    await ensureWriteFile(pagePath, template);
  }
}

async function generateProgrammersSolutionPage(solution: ProgrammersSolution, pagePath: string) {
  const template = await createProgrammersSolutionPageTemplate(solution);
  await ensureWriteFile(pagePath, template);
}

function generateSolutionPage(solution: Solution, outDir: string, force: boolean) {
  const pagePath = path.join(
    outDir,
    solution.codingSite.toLowerCase(),
    `${solution.id}${EXTNAME.MDX}`,
  );

  if (existsSync(pagePath) && !force) {
    return;
  }

  if (solution.codingSite === CodingSite.LeetCode) {
    return generateLeetCodeSolutionPage(solution, pagePath);
  }
  return generateProgrammersSolutionPage(solution, pagePath);
}

export async function generateSolutionPageMeta(
  codingSite: CodingSite,
  solutions: Solution[],
  outDir: string,
) {
  const meta = Object.fromEntries(
    solutions.map(({ id, title, codingSite }) =>
      codingSite === CodingSite.LeetCode ? [id, `${id}. ${title}`] : [id, title],
    ),
  );
  const template = await createSolutionPageMeta(meta);

  await ensureWriteFile(
    path.join(outDir, codingSite.toLowerCase(), `_meta${EXTNAME.TYPESCRIPT}`),
    template,
  );
}

export async function generateIntroductionPage(
  groups: Map<CodingSite, Solution[]>,
  outDir: string,
) {
  const template = await createIntroductionPageTemplate(groups);

  await ensureWriteFile(path.join(outDir, `index${EXTNAME.MDX}`), template);
}

export async function generatePage(solutionDir: string, outDir: string, force: boolean) {
  const solutions = await getSolutions(solutionDir, outDir);
  const groups = groupByCodingSite(solutions);

  await Promise.all([
    ...solutions.map((solution) => generateSolutionPage(solution, outDir, force)),
    ...Array.from(groups).map(([codingSite, solution]) =>
      generateSolutionPageMeta(codingSite, solution, outDir),
    ),
    generateIntroductionPage(groups, outDir),
  ]);
}
