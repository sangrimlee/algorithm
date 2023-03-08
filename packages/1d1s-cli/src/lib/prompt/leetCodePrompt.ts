import inquirer from 'inquirer';

export async function leetCodePrompt() {
  const { questionId } = await inquirer.prompt<{ questionId: string }>({
    type: 'input',
    name: 'questionId',
    message: 'LeetCode의 문제 번호를 입력하세요.',
  });
  return questionId;
}
