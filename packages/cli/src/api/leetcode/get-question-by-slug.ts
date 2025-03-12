import * as graphql from '@/lib/graphql';
import type { TestCase } from '@/types';
import { getLeetCodeTestCases } from './get-test-cases';

const LEET_CODE_QUESTION_QUERY = `
query getQuestionBySlug($titleSlug: String) {
  question(titleSlug: $titleSlug) {
    id: questionFrontendId
    category: categoryTitle
    title
    titleSlug
    difficulty
    content
    tags: topicTags {
        name
    }
    codeSnippets {
      langSlug
      code
    }
  }
}`;

interface LeetCodeQuestionResponse {
  data: {
    question: {
      id: string;
      category: string;
      title: string;
      titleSlug: string;
      difficulty: string;
      content: string;
      tags: { name: string }[];
      codeSnippets: {
        langSlug: string;
        code: string;
      }[];
    };
  };
}

export interface LeetCodeQuestion {
  id: string;
  category: string;
  title: string;
  titleSlug: string;
  difficulty: string;
  url: string;
  tags: string[];
  testCases: TestCase[];
  codeSnippet?: string;
}

export async function getLeetCodeQuestionBySlug(titleSlug: string): Promise<LeetCodeQuestion> {
  const {
    data: { question },
  } = await graphql.query<LeetCodeQuestionResponse>('https://leetcode.com/graphql', {
    query: LEET_CODE_QUESTION_QUERY,
    variables: { titleSlug },
  });

  const { id, title, category, content, codeSnippets, difficulty, tags } = question;
  const url = `https://leetcode.com/problems/${titleSlug}`;
  const codeSnippet = codeSnippets.find(({ langSlug }) => langSlug === 'typescript')?.code;
  const testCases = getLeetCodeTestCases(content);

  return {
    id,
    category,
    title,
    titleSlug,
    difficulty,
    url,
    tags: tags.map(({ name }) => name),
    testCases,
    codeSnippet,
  };
}
