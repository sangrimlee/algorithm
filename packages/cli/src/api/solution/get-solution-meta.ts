import path from 'node:path';

import { z } from 'zod';

import { readJsonFile } from '@/utils/fs';

const leetCodeMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  category: z.string(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  tags: z.string().array().optional(),
});

const programmersMetaSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  level: z.number().min(1).max(5),
});

const solutionMetaSchema = z.union([leetCodeMetaSchema, programmersMetaSchema]);

export type LeetCodeMeta = z.infer<typeof leetCodeMetaSchema>;
export type ProgrammersMeta = z.infer<typeof programmersMetaSchema>;
export type SolutionMeta = z.infer<typeof solutionMetaSchema>;

export async function getSolutionMeta(solutionPath: string): Promise<SolutionMeta> {
  const content = await readJsonFile(path.join(path.dirname(solutionPath), 'meta.json'));
  const meta = solutionMetaSchema.parse(content);
  return meta;
}
