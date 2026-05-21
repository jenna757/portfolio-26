import type { ReactNode } from 'react';

import { ExternalLinkIcon } from './ExternalLinkIcon';
import { useProjectListColumns } from './ProjectList';

const hoverPanel =
  'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-hover lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-border-subtle)] lg:group-hover:drop-shadow-lg';

/** 썸네일: 1열 목록 sm+ col-span(3·5), 2열 목록(Works 전체) 세로 배치·전체 너비·높이 16:9의 70%. */
const thumbCellClass =
  'z-10 aspect-video w-full rounded border-2 border-border-subtle object-cover transition group-hover:border-border-subtle-hover sm:order-1 sm:col-span-3 sm:translate-y-1';
const thumbCellClassGrid =
  'z-10 order-1 aspect-[16/6.3] w-full rounded border-2 border-border-subtle object-cover transition group-hover:border-border-subtle-hover';
const contentCellClass = 'z-10 sm:order-2 sm:col-span-5';
const contentCellClassGrid = 'z-10 order-2';

/** `public/works/pdf/` 에 두는 파일은 `/works/pdf/파일명.pdf` 형태로 지정 */
export type ProjectItemProps = {
  title: string;
  titleHref?: string;
  pdfHref?: string;
  pdfLabel?: string;
  description: ReactNode[];
  technologies?: string[];
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

const defaultPdfLabel = '상세 보기 (PDF)';

export const ProjectItem = ({
  title,
  titleHref,
  pdfHref,
  pdfLabel = defaultPdfLabel,
  description,
  technologies,
  imageSrc,
  imageAlt = '',
  children,
}: ProjectItemProps) => {
  const isTwoColumn = useProjectListColumns() === 2;
  const thumbClass = isTwoColumn ? thumbCellClassGrid : thumbCellClass;
  const contentClass = isTwoColumn ? contentCellClassGrid : contentCellClass;
  const titleHrefTrimmed = titleHref?.trim();
  const hasTitleLink = Boolean(titleHrefTrimmed);
  const isExternalTitleLink = hasTitleLink && /^https?:\/\//i.test(titleHrefTrimmed!);
  const pdfHrefTrimmed = pdfHref?.trim();
  const hasPdfLink = Boolean(pdfHrefTrimmed);

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
            {hasTitleLink ? (
              <a
                href={titleHrefTrimmed}
                className="group/link relative inline-flex items-baseline text-heading text-lg font-medium leading-loose hover:text-accent focus-visible:text-accent"
                {...(isExternalTitleLink
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : undefined)}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {title}
                  {isExternalTitleLink ? <ExternalLinkIcon /> : null}
                </span>
              </a>
            ) : (
              <span className="break-keep wrap-anywhere text-heading text-lg font-medium leading-loose">{title}</span>
            )}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-heading text-sm leading-normal">
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
          {hasPdfLink ? (
            <p className="mt-3">
              <a
                href={pdfHrefTrimmed}
                className="group/pdf relative inline-flex items-baseline text-sm font-medium text-accent hover:text-accent/90 focus-visible:text-accent/90"
                target="_blank"
                rel="noreferrer noopener"
              >
                {pdfLabel}
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            </p>
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
