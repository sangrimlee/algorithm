/**
 * 811. Subdomain Visit Count
 * https://leetcode.com/problems/subdomain-visit-count
 */
export function subdomainVisits(cpdomains: string[]): string[] {
  const visits = new Map<string, number>();
  for (const cpdomain of cpdomains) {
    const [rep, domain] = cpdomain.split(' ');
    for (const subdomain of subdomains(domain)) {
      visits.set(subdomain, (visits.get(subdomain) ?? 0) + parseInt(rep));
    }
  }
  return [...visits].map(([subdomain, visit]) => `${visit} ${subdomain}`);
}

function* subdomains(domain: string) {
  const levels = domain.split('.').reverse();
  let subdomain = '';
  for (const level of levels) {
    subdomain = subdomain.length === 0 ? level : `${level}.${subdomain}`;
    yield subdomain;
  }
}
