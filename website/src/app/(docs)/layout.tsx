export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-(--content-width) items-start gap-12">{children}</div>
  );
}
