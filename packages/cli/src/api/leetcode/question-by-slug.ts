import * as graphql from '@/lib/graphql';

import { parseLeetCode } from '@/lib/parse';

const LEETCODE_QUESTION_DETAIL_QUERY = `query getQuestionBySlug($titleSlug: String) {
  question(titleSlug: $titleSlug) {
    id: questionFrontendId
    title
    titleSlug
    content
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

interface LeetCodeQuestion {
  id: string;
  title: string;
  titleSlug: string;
  content: string;
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
    question: LeetCodeQuestion;
  };
}

export const getLeetCodeQuestionBySlug = async (titleSlug: string) => {
  try {
    const {
      data: { question },
    } = await graphql.query<LeetCodeQuestionResponse>('https://leetcode.com/graphql', {
      query: LEETCODE_QUESTION_DETAIL_QUERY,
      variables: { titleSlug },
    });

    const { id, title, content, codeSnippets, difficulty, topicTags } = question;
    const codeSnippet = codeSnippets.find(({ langSlug }) => langSlug === 'typescript')?.code;
    const { testCases } = parseLeetCode(content);

    return {
      id,
      title,
      codeSnippet,
      testCases,
      difficulty,
      topics: topicTags,
    };
  } catch (error) {
    console.error(error);
    throw new Error('문제를 불러오는 중에 오류가 발생하였습니다. 문제 번호를 확인해주세요.');
  }
};
