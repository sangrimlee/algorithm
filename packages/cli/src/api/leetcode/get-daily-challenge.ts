import * as graphql from '@/lib/graphql';

const LEET_CODE_DAILY_CHALLENGE_QUERY = `
query questionOfToday {
  dailyChallenge: activeDailyCodingChallengeQuestion {
    question {
      titleSlug
    }
  }
}`;

interface LeetCodeDailyChallengeResponse {
  data: {
    dailyChallenge: {
      question: {
        titleSlug: string;
      };
    };
  };
}

export async function getLeetCodeDailyChallenge(): Promise<string> {
  const {
    data: { dailyChallenge },
  } = await graphql.query<LeetCodeDailyChallengeResponse>('https://leetcode.com/graphql', {
    query: LEET_CODE_DAILY_CHALLENGE_QUERY,
  });

  return dailyChallenge.question.titleSlug;
}
