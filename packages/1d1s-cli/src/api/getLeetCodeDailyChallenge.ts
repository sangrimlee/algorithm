import axios, { AxiosRequestConfig } from 'axios';

const LEETCODE_API_URL = 'https://leetcode.com/graphql';

const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    link
    question {
      difficulty
      title
      titleSlug
      frontendQuestionId: questionFrontendId
    }
  }
}`;

interface DailyChallengeQuestion {
  date: string;
  link: string;
  question: {
    difficulty: string;
    title: string;
    titleSlug: string;
    frontendQuestionId: string;
  };
}

export const getDailyCodingChallenge = async () => {
  const config: AxiosRequestConfig<{ query: string }> = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      query: DAILY_CODING_CHALLENGE_QUERY,
    },
  };

  const { data } = await axios<{
    data: { activeDailyCodingChallengeQuestion: DailyChallengeQuestion };
  }>(LEETCODE_API_URL, config);

  return data.data.activeDailyCodingChallengeQuestion;
};
