'use client';

import { useCallback, useRef, useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

import { CheckIcon, CopyIcon } from 'lucide-react';

import { cx } from '@/utils/cx';

/* -------------------------------------------------------------------------------------------------
 * CodeBlock
 * -----------------------------------------------------------------------------------------------*/

type CodeBlockProps = ComponentPropsWithoutRef<'figure'> & {
  'data-rehype-pretty-code-figure'?: string;
};

export function CodeBlock({
  className,
  'data-rehype-pretty-code-figure': isCodeBlock,
  ...props
}: CodeBlockProps) {
  if (isCodeBlock === undefined) {
    return <figure className={className} {...props} />;
  }
  return <div className={cx('code-block', className)} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * CodeBlockPre
 * -----------------------------------------------------------------------------------------------*/

type CodeBlockPreProps = ComponentPropsWithoutRef<'pre'>;

export function CodeBlockPre({ children, className, ...props }: CodeBlockPreProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const copyCode = useCallback(async () => {
    if (!preRef.current?.textContent) {
      return;
    }
    await navigator.clipboard.writeText(preRef.current.textContent);
  }, []);

  return (
    <pre className={cx('code-block__pre', className)} ref={preRef} {...props}>
      {children}
      <CopyButton onCopy={copyCode} />
    </pre>
  );
}

interface CopyButtonProps {
  onCopy: () => Promise<void>;
}

const CopyButton = ({ onCopy }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    onCopy()
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch(() => {
        alert('코드 복사에 실패하였습니다.');
      });
  }, [onCopy]);

  return (
    <button
      type="button"
      aria-label="코드 복사"
      className={cx('code-block__copy-button', {
        'code-block__copy-button_copied': isCopied,
      })}
      onClick={handleClick}
    >
      <CopyIcon className="copy-button__icon copy-button__icon_copy" />
      <CheckIcon className="copy-button__icon copy-button__icon_copied" />
    </button>
  );
};
