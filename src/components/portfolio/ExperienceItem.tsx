import { ExternalLinkIcon } from './ExternalLinkIcon';

const hoverPanel =
  'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.06] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg';

export type ExperienceItemProps = {
  date: string;
  title: string;
  company: string;
  companyHref?: string;
  description: string;
  technologies: string[];
  relatedLinks?: { href: string; label: string }[];
  subTitles?: string[];
};

export const ExperienceItem = ({
  date,
  title,
  company,
  companyHref,
  description,
  technologies,
  relatedLinks,
  subTitles,
}: ExperienceItemProps) => {
  const headingBody = (
    <>
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {title}
        {' · '}
        <span className="inline-block">
          {company}
          {companyHref ? <ExternalLinkIcon /> : null}
        </span>
      </span>
    </>
  );

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className={hoverPanel} />
        <header
          className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-muted sm:col-span-2"
          aria-label={date}
        >
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="text-lg font-medium leading-snug text-heading">
            {companyHref ? (
              <a
                href={companyHref}
                className="group/link relative inline-flex items-baseline leading-tight text-heading"
                target="_blank"
                rel="noreferrer noopener"
              >
                {headingBody}
              </a>
            ) : (
              <div className="relative inline-flex items-baseline leading-tight text-heading">{headingBody}</div>
            )}
          </h3>
          {subTitles?.map((line) => (
            <div key={line} className="text-base text-muted" aria-hidden>
              {line}
            </div>
          ))}
          <p className="mt-2 text-base leading-normal text-muted">{description}</p>
          {relatedLinks && relatedLinks.length > 0 ? (
            <ul className="mt-2 flex flex-wrap" aria-label="관련 링크">
              {relatedLinks.map(({ href, label }) => (
                <li key={href + label} className="mr-4">
                  <a
                    href={href}
                    className="relative mt-2 inline-flex items-center text-base font-medium text-heading/90 hover:text-accent"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ChainIcon />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-2 flex flex-wrap" aria-label="기술 스택">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

function ChainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mr-1 h-3 w-3"
      aria-hidden
    >
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
  );
}
