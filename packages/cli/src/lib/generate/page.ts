import path from 'node:path';

import { getLeetCodeQuestionBySlug } from '@/api/leetcode';
import { groupByCodingSite, getSolutions } from '@/api/solution';
import { ensureWriteFile, ensureWriteJson } from '@/utils/fs';
import {
  createLeetCodeSolutionPageTemplate,
  createProgrammersSolutionPageTemplate,
} from '@/lib/template';

import { EXTNAME } from '@/constants';
import { CodingSite, LeetCodeSolution, ProgrammersSolution, Solution } from '@/types';

async function generateLeetCodeSolutionPage(solution: LeetCodeSolution, pagePath: string) {
  const { difficulty, topics } = await getLeetCodeQuestionBySlug(solution.slug);
  const template = createLeetCodeSolutionPageTemplate(solution, difficulty, topics);

  await ensureWriteFile(pagePath, template);
}

async function generateProgrammersSolutionPage(solution: ProgrammersSolution, pagePath: string) {
  const template = createProgrammersSolutionPageTemplate(solution);
  await ensureWriteFile(pagePath, template);
}

function generateSolutionPage(solution: Solution, outDir: string) {
  const pagePath = path.join(
    outDir,
    solution.codingSite.toLowerCase(),
    `${solution.id}${EXTNAME.MDX}`,
  );

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
