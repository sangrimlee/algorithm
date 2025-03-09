'use client';

import { useCallback, useEffect, useState } from 'react';

import { ArrowUpCircleIcon, ArrowUpRightIcon } from 'lucide-react';

import { cx } from '@/utils/cx';

export interface TableOfContent {
  level: number;
  text: string;
  slug: string;
}

function createSectionObserver(rootElement: Element, setActiveSection: (slug: string) => void) {
  const elements = rootElement.children;
  const sections = new Map<Element, string>();
  let currentSectionId: string | null = null;
  for (const element of elements) {
    if (element.id && (element.tagName === 'H2' || element.tagName === 'H3')) {
      currentSectionId = element.id;
    }
    if (currentSectionId) {
      sections.set(element, `#${currentSectionId}`);
    }
  }

  const visibleElements = new Set<Element>();
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        visibleElements.add(entry.target);
      } else {
        visibleElements.delete(entry.target);
      }
    }

    const firstVisibleElement = Array.from(sections.entries()).find(([element]) =>
      visibleElements.has(element),
    );
    if (firstVisibleElement) {
      setActiveSection(firstVisibleElement[1]);
    }
  };
  const observer = new IntersectionObserver(observerCallback, {
    rootMargin: '-64px 0px',
  });
  Array.from(sections.keys()).forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

export interface TableOfContentsProps {
  tableOfContents: TableOfContent[];
  githubIssueLink: string;
  githubLink: string;
}

export function TableOfContents({
  tableOfContents,
  githubIssueLink,
  githubLink,
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const handleScrollEvent = useCallback(() => {
    setIsScrolled(window.scrollY > 300);
  }, []);

  useEffect(() => {
    handleScrollEvent();
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScrollEvent]);

  useEffect(() => {
    const root = document.querySelector('[data-docs="true"]');
    if (!root) return;
    const observer = createSectionObserver(root, setActiveSection);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cx(
        'sticky top-(--navbar-height) order-last h-(--content-height) w-56 shrink-0',
        'max-xl:hidden',
      )}
    >
      <div className="mt-6 mb-1 text-sm font-medium text-gray-12">On this page</div>
      <div className="relative">
        <ul
          className={cx(
            'styled-scrollbar space-y-2 overflow-y-auto py-2',
            'max-h-[calc(var(--content-height)-10rem)]',
          )}
        >
          {tableOfContents.map(({ level, text, slug }) => (
            <li
              key={slug}
              aria-current={activeSection === slug ? 'location' : undefined}
              className={cx(
                'text-sm transition-colors',
                activeSection === slug ? 'font-medium text-blue-11' : 'text-gray-11',
                {
                  'pl-3': level === 3,
                },
              )}
            >
              <a href={slug}>{text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-1 border-t py-4">
        <ul className="space-y-2 text-sm font-medium text-gray-11">
          <li>
            <a
              href={githubIssueLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start transition-colors hover:text-gray-12"
            >
              Question? Give us feedback
              <ArrowUpRightIcon className="ml-0.5 size-4 shrink-0" />
            </a>
          </li>
          <li>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start transition-colors hover:text-gray-12"
            >
              Edit this page on GitHub
              <ArrowUpRightIcon className="ml-0.5 size-4 shrink-0" />
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={scrollToTop}
              className={cx(
                'inline-flex cursor-pointer items-center transition hover:text-gray-12',
                { 'invisible opacity-0': !isScrolled },
              )}
            >
              Scroll to top
              <ArrowUpCircleIcon className="ml-1.5 size-4" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
