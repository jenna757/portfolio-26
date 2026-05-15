import CareerMdx from '../content/career.mdx';

const Career = () => {
  return (
    <section
      id="career"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="경력"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 border-b border-white/5 bg-navy/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-base font-bold uppercase tracking-widest text-heading">Career</h2>
      </div>
      <div>
        <CareerMdx />
      </div>
    </section>
  );
};

export default Career;
