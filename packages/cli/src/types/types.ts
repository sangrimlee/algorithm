import type { CodingSite } from './enums';

export interface TestCase {
  input: string[];
  output: string;
}

export interface LeetCodeQuestion {
  id: string;
  title: string;
  titleSlug: string;
  content: string;
  codeSnippets: Array<{
    langSlug: string;
    code: string;
  }>;
}

export interface BaseSolution {
  id: string;
  code: string;
  url: string;
  title: string;
  relativePath: string;
}

export interface ProgrammersSolution extends BaseSolution {
  codingSite: CodingSite.Programmers;
}

export interface LeetCodeSolution extends BaseSolution {
  codingSite: CodingSite.LeetCode;
  slug: string;
}

export type Solution = ProgrammersSolution | LeetCodeSolution;
