import { z } from 'zod';

export const LeetCodeDiffcultySchema = z.enum(['Easy', 'Medium', 'Hard']);
export type LeetCodeDiffculty = z.infer<typeof LeetCodeDiffcultySchema>;

export const LeetCodeMedataSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  difficulty: LeetCodeDiffcultySchema,
  tags: z.string().array().optional(),
  url: z.string(),
});
export type LeetCodeMetadata = z.infer<typeof LeetCodeMedataSchema>;
