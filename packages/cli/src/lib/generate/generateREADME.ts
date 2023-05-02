import { createFileWithContent, getSolutions } from '@/utils';
import { createREADMETemplate } from '@/lib/template';

export async function generateREADME(solutionDir: string, outDir: string) {
  const solutions = await getSolutions(solutionDir, outDir);

  await createFileWithContent(outDir, 'README.md', createREADMETemplate(solutions));
}
