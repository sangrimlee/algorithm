import * as Sidebar from '@/components/ui/sidebar';

import { meta } from '../_meta';

export function SideNav() {
  return (
    <Sidebar.Root className="pt-5 max-lg:hidden">
      <Sidebar.Content>
        <Sidebar.List>
          <Sidebar.Item>
            <Sidebar.Link type="label" href="/solutions/programmers">
              문제 목록
            </Sidebar.Link>
          </Sidebar.Item>
          {Object.entries(meta).map(([slug, name]) => (
            <Sidebar.Item key={slug}>
              <Sidebar.Link href={`/solutions/programmers/${slug}`}>{name}</Sidebar.Link>
            </Sidebar.Item>
          ))}
        </Sidebar.List>
      </Sidebar.Content>
    </Sidebar.Root>
  );
}
