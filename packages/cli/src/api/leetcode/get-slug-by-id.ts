import axios from 'axios';

type GetLeetCodeAllProblemResponse = Record<
  string,
  | {
      acRate: number;
      difficulty: string;
      likes: number;
      dislikes: number;
      categoryTitle: string;
      frontendQuestionId: string;
      paidOnly: boolean;
      title: string;
      titleSlug: string;
      topicTags: { name: string; id: string; slug: string }[];
      hasSolution: boolean;
      hasVideoSolution: boolean;
      totalAcceptedRaw: number;
      totalSubmissionRaw: number;
    }
  | undefined
>;

export async function getLeetCodeSlugById(id: string): Promise<string> {
  const { data: allProblem } = await axios.get<GetLeetCodeAllProblemResponse>(
    'https://raw.githubusercontent.com/bunnyxt/lcid/main/problems_all.json',
  );
  const titleSlug = allProblem[id]?.titleSlug;
  if (!titleSlug) {
    throw new Error('LeetCode에 없는 문제 번호 입니다.');
  }
  return titleSlug;
}
