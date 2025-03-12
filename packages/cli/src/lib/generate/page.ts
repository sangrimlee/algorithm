import path from 'node:path';

import { createTemplate } from '@/lib/template';
import { ensureWriteFile } from '@/utils/fs';
import { getMissingPages } from '@/api/page';

async function generatePageBySite(siteName: string, solutionDir: string, outDir: string) {
  const pages = await getMissingPages(
    path.join(solutionDir, siteName),
    path.join(outDir, siteName),
  );
  for (const page of pages) {
    const template = await createTemplate('PAGE', page);
    await ensureWriteFile(path.join(outDir, siteName, `${page.fileName}.mdx`), template);
  }
}

export async function generatePage(solutionDir: string, outDir: string) {
  await Promise.all(
    ['programmers', 'leetcode'].map((siteName) =>
      generatePageBySite(siteName, solutionDir, outDir),
    ),
  );
}
