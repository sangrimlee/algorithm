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

export async function getLeetCodeDailyChallenge(): Promise<string> {
  const { data } = await graphql.query<DailyChallengeResponse>('https://leetcode.com/graphql', {
    query: DAILY_CODING_CHALLENGE_QUERY,
  });

  const { titleSlug } = data.activeDailyCodingChallengeQuestion.question;
  return titleSlug;
}
