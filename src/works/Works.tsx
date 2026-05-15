import WorksMdx from '../content/works.mdx';

const Works = () => {
  return (
    <section
      id="works"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="작업물"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Works</h2>
      </div>
      <div>
        <WorksMdx />
      </div>
    </section>
  );
};

export default Works;
