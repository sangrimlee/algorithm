import * as graphql from '@/lib/graphql';

import { parseLeetCode } from '@/lib/parse';
import type { TestCase } from '@/types';

const LEETCODE_QUESTION_DETAIL_QUERY = `query getQuestionBySlug($titleSlug: String) {
  question(titleSlug: $titleSlug) {
    id: questionFrontendId
    title
    titleSlug
    content
    categoryTitle
    codeSnippets {
      langSlug
      code
    }
    difficulty
    topicTags {
        name
        slug
    }
  }
}`;

interface LeetCodeQuestionResponseData {
  id: string;
  title: string;
  titleSlug: string;
  content: string;
  categoryTitle: string;
  codeSnippets: {
    langSlug: string;
    code: string;
  }[];
  difficulty: string;
  topicTags: {
    name: string;
    slug: string;
  }[];
}

interface LeetCodeQuestionResponse {
  data: {
    question: LeetCodeQuestionResponseData;
  };
}

export interface LeetCodeQuestion {
  id: string;
  title: string;
  url: string;
  difficulty: string;
  category: string;
  topics: string[];
  codeSnippet?: string;
  testCases: TestCase[];
}

export async function getLeetCodeQuestionBySlug(titleSlug: string): Promise<LeetCodeQuestion> {
  const {
    data: { question },
  } = await graphql.query<LeetCodeQuestionResponse>('https://leetcode.com/graphql', {
    query: LEETCODE_QUESTION_DETAIL_QUERY,
    variables: { titleSlug },
  });

  const {
    id,
    title,
    categoryTitle: category,
    content,
    codeSnippets,
    difficulty,
    topicTags,
  } = question;
  const url = `https://leetcode.com/problems/${titleSlug}`;
  const codeSnippet = codeSnippets.find(({ langSlug }) => langSlug === 'typescript')?.code;
  const { testCases } = parseLeetCode(content);
  const topics = topicTags.map(({ name }) => name);

  return {
    id,
    title,
    url,
    difficulty,
    category,
    topics,
    codeSnippet,
    testCases,
  };
}
