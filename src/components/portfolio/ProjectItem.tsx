import type { ReactNode } from 'react';

import { ExternalLinkIcon } from './ExternalLinkIcon';
import { useProjectListColumns } from './ProjectList';

const hoverPanel =
  'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-hover lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-border-subtle)] lg:group-hover:drop-shadow-lg';

/** 썸네일 가로 비율은 8열 그리드 col-span(3·5)으로 결정됩니다. */
const thumbCellClass =
  'z-10 aspect-video w-full rounded border-2 border-border-subtle object-cover transition group-hover:border-border-subtle-hover sm:order-1 sm:col-span-3 sm:translate-y-1';
const thumbCellClassGrid =
  'z-10 order-1 aspect-video w-full rounded border-2 border-border-subtle object-cover transition group-hover:border-border-subtle-hover';
const contentCellClass = 'z-10 sm:order-2 sm:col-span-5';
const contentCellClassGrid = 'z-10 order-2';

export type ProjectItemProps = {
  title: string;
  titleHref: string;
  description: ReactNode[];
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
  const isTwoColumn = useProjectListColumns() === 2;
  const thumbClass = isTwoColumn ? thumbCellClassGrid : thumbCellClass;
  const contentClass = isTwoColumn ? contentCellClassGrid : contentCellClass;

  return (
    <li className={isTwoColumn ? undefined : 'mb-12'}>
      <div
        className={
          isTwoColumn
            ? 'group relative grid grid-cols-1 gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'
            : 'group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'
        }
      >
        <div className={hoverPanel} />
        <div className={contentClass}>
          <h3 className="font-medium leading-snug">
            <a
              href={titleHref}
              className="group/link relative inline-flex items-baseline text-heading text-lg font-medium leading-loose"
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
          <ul className="mt-2 list-disc space-y-1 pl-4 text-heading text-base leading-normal">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {technologies && technologies.length > 0 ? (
            <ul className="mt-2 flex flex-wrap" aria-label="기술 스택">
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
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            width={300}
            height={169}
            decoding="async"
            className={thumbClass}
          />
        ) : (
          <div
            className={`${thumbClass} bg-gradient-to-br from-navy-panel to-navy-deep`}
            role="img"
            aria-label={imageAlt || 'Project preview placeholder'}
          />
        )}
      </div>
    </li>
  );
};
