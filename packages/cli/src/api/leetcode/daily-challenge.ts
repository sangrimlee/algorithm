import * as graphql from '@/lib/graphql';

const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    question {
      titleSlug
    }
  }
}`;

interface DailyChallengeQuestion {
  date: string;
  question: {
    titleSlug: string;
  };
}

interface DailyChallengeResponse {
  data: { activeDailyCodingChallengeQuestion: DailyChallengeQuestion };
}

export const getLeetCodeDailyChallenge = async () => {
  try {
    const { data } = await graphql.query<DailyChallengeResponse>('https://leetcode.com/graphql', {
      query: DAILY_CODING_CHALLENGE_QUERY,
    });

    return data.activeDailyCodingChallengeQuestion;
  } catch (error) {
    console.error(error);
    throw new Error('문제를 불러오는 중에 오류가 발생하였습니다.\n');
  }
};
