import type { ReactNode } from 'react';

import { ExternalLinkIcon } from './ExternalLinkIcon';

const hoverPanel =
  'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.06] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg';

/**
 * 썸네일 가로 비율은 8열 그리드에서의 col-span으로만 결정됩니다.
 * `imgClass`에 w-* 를 넣어도 셀 밖으로는 못 나갑니다. 넓히려면 아래 span을 3·5 또는 4·4처럼 바꾸세요.
 */
const thumbCellClass =
  'z-10 sm:order-1 sm:col-span-3 sm:translate-y-1 sm:self-start';
const contentCellClass = 'z-10 sm:order-2 sm:col-span-5';

/** 썸네일/플레이스홀더 모양만 (테두리·비율·호버). 가로 크기는 thumbCellClass 의 col-span. */
const imgClass =
  'aspect-video w-full rounded border-2 border-white/10 object-cover transition group-hover:border-white/25';

export type ProjectItemProps = {
  title: string;
  titleHref: string;
  description: string;
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export const ProjectItem = ({
  title,
  titleHref,
  description,
  technologies,
  imageSrc,
  imageAlt = '',
  children,
}: ProjectItemProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className={hoverPanel} />
        <div className={contentCellClass}>
          <h3 className="font-medium leading-snug text-heading">
            <a
              href={titleHref}
              className="group/link relative inline-flex items-baseline text-base font-medium leading-tight text-heading"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ExternalLinkIcon />
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-muted">{description}</p>
          {technologies && technologies.length > 0 ? (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
          {children}
        </div>
        <div className={thumbCellClass}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              width={400}
              height={225}
              decoding="async"
              className={imgClass}
            />
          ) : (
            <div
              className={`${imgClass} bg-gradient-to-br from-navy-panel to-navy-deep`}
              role="img"
              aria-label={imageAlt || 'Project preview placeholder'}
            />
          )}
        </div>
      </div>
    </li>
  );
};
