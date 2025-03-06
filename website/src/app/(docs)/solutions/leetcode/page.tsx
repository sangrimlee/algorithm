import * as Breadcrumb from '@/components/ui/breadcrumb';

export default function LeetCodePage() {
  return (
    <article className="min-h-(--content-height) w-full min-w-0 pt-4 pb-16">
      <Breadcrumb.Root className="mt-2">
        <Breadcrumb.List>
          <Breadcrumb.Page>LeetCode</Breadcrumb.Page>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-12">문제 목록</h1>
      </div>
      <div></div>
    </article>
  );
}
