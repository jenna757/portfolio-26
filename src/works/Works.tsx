import WorksMdx from '../content/works.mdx';
import { mdxBodyClass } from '../content/mdxBodyClass';

const Works = () => {
  return (
    <section className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Works</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-heading">작업물</h1>
      </header>

      <div className="rounded-2xl border border-white/10 bg-navy-panel/40 p-6 shadow-[0_24px_80px_-32px_rgba(2,12,27,0.85)] ring-1 ring-white/5 backdrop-blur-md md:p-10">
        <article className={mdxBodyClass}>
          <WorksMdx />
        </article>
      </div>
    </section>
  );
};

export default Works;
