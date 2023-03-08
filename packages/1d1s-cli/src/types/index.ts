export enum CodingSite {
  LeetCode = 'LeetCode',
  Programmers = 'Programmers',
}

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
