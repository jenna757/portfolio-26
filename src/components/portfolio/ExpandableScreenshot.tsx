import { useId, useState } from 'react';

const figureClassName = 'overflow-hidden rounded border-2 border-border-subtle bg-navy-panel/40 shadow-lg';

const chevronClassName = 'h-4 w-4 shrink-0';

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={chevronClassName}
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M5.47 8.47a.75.75 0 011.06 0L10 11.939l3.47-3.47a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={chevronClassName}
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M9.47 6.47a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10 8.061 6.28 11.78a.75.75 0 11-1.06-1.06l4.25-4.25z"
      clipRule="evenodd"
    />
  </svg>
);

type ExpandableScreenshotProps = {
  /** 형제 항목과 구분하는 고유 키 (상태·id 분리용) */
  screenshotKey: string;
  src: string;
  alt: string;
  label: string;
  imgClassName?: string;
  collapsedMaxHeightClass?: string;
};

export const ExpandableScreenshot = ({
  screenshotKey,
  src,
  alt,
  label,
  imgClassName = 'block h-auto w-auto max-w-full',
  collapsedMaxHeightClass = 'max-h-[28rem]',
}: ExpandableScreenshotProps) => {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const panelId = `screenshot-panel-${screenshotKey}-${contentId}`;

  return (
    <figure className={`${figureClassName} inline-block max-w-full self-start`}>
      <figcaption className="border-t border-b border-border-subtle px-4 py-2 text-xs text-muted">{label}</figcaption>
      <div className="relative inline-block max-w-full">
        {!expanded ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-navy-panel via-navy-panel/100 to-transparent"
            aria-hidden
          />
        ) : null}
        <div id={panelId} className={`relative overflow-hidden ${expanded ? '' : collapsedMaxHeightClass}`}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className={imgClassName} />
        </div>
        <div className={`relative z-[2] flex justify-center px-4 ${expanded ? 'py-2.5' : 'pb-4'}`}>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="inline-flex w-1/2 cursor-pointer items-center justify-center gap-1.5 rounded-3xl border p-2 text-sm font-medium text-accent transition-colors hover:bg-navy hover:text-heading focus-visible:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>{expanded ? '접기' : '펼쳐보기'}</span>
            {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        </div>
      </div>
    </figure>
  );
};
