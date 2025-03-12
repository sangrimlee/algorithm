import { input } from '@inquirer/prompts';

export async function numberPrompt(message?: string): Promise<string> {
  const answer = await input({
    message: message ?? '번호를 입력하세요.',
    validate: (str) => {
      if (!/^\d+$/.test(str)) {
        return '숫자만 입력해주세요.';
      }
      return true;
    },
  });
  return answer;
}
