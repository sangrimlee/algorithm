import axios from 'axios';

interface GetLeetCodeSlugByIdResponse {
  acRate: number;
  difficulty: string;
  likes: number;
  dislikes: number;
  categoryTitle: string;
  frontendQuestionId: string;
  paidOnly: boolean;
  title: string;
  titleSlug: string;
  topicTags: Array<{ name: string; id: string; slug: string }>;
  hasSolution: boolean;
  hasVideoSolution: boolean;
  totalAcceptedRaw: number;
  totalSubmissionRaw: number;
}

export const getLeetCodeSlugById = async (id: string) => {
  const {
    data: { titleSlug },
  } = await axios.get<GetLeetCodeSlugByIdResponse>(`https://lcid.cc/info/${id}`);
  if (!titleSlug) {
    throw new Error('LeetCode에 없는 문제 번호 입니다.');
  }
  return titleSlug;
};
