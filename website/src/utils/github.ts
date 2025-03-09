import path from 'node:path';

import { urljoin } from './url';

const GITHUB_REPOSITORY_LINK = 'https://github.com/sangrimlee/algorithm';

export function getGithubIssueLink(title: string): string {
  const url = urljoin(GITHUB_REPOSITORY_LINK, '/issues/new');
  url.searchParams.set('title', title);
  url.searchParams.set('labels', 'feedback');
  return url.toString();
}

export function getGithubLink(filePath: string): string {
  const relativePath = path.relative('..', filePath);
  return urljoin(GITHUB_REPOSITORY_LINK, 'blob/main', relativePath).toString();
}
