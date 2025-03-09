import { z } from 'zod';

export const ProgrammersLevelSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
export type ProgrammersLevel = z.infer<typeof ProgrammersLevelSchema>;

export const ProgrammersMetadataSchema = z.object({
  id: z.string(),
  title: z.string(),
  level: ProgrammersLevelSchema,
  url: z.string(),
});
export type ProgrammersMetadata = z.infer<typeof ProgrammersMetadataSchema>;
