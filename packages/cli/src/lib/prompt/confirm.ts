import { confirm } from '@inquirer/prompts';

export async function confirmPrompt(message?: string): Promise<boolean> {
  const answer = await confirm({ message: message ?? '계속하시겠습니까?', default: false });
  return answer;
}
