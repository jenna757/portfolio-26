import SummaryMdx from '../content/summary.mdx';

const Works = () => {
  return (
    <section id="works" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="작업물">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Works</h2>
      </div>
      <p className="flex mt-10 mb-8 justify-between">
        <p className="text-base font-bold leading-normal text-muted">프로젝트</p>
        <a
          href="/works"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className="h-px w-8 bg-accent transition-all group-hover:w-12 motion-reduce:transition-none"
            aria-hidden
          />
          리스트 더보기
          <span aria-hidden>→</span>
        </a>
      </p>
      <div>
        <SummaryMdx />
      </div>
    </section>
  );
};

export default Works;
