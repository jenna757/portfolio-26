import Spotlight from '../components/Spotlight';
import WorksMdx from '../content/works.mdx';

const WorksPage = () => {
  return (
    <div className="group/spotlight relative min-h-screen">
      <Spotlight />
      <div className="relative z-40 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16">
        <header className="mb-12 border-b border-navy-panel/80 pb-8 md:mb-16">
          <a
            href="/#works"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted transition-colors hover:text-heading focus-visible:text-heading"
          >
            <span aria-hidden>←</span>
            <span
              className="h-px w-8 bg-muted transition-all group-hover:w-12 group-hover:bg-heading group-focus-visible:w-12 group-focus-visible:bg-heading motion-reduce:transition-none"
              aria-hidden
            />
            메인으로
          </a>
          <p className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">최진슬</p>
          <p className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">Works</p>
          <p className="mt-4 max-w-xl leading-normal text-muted">참여한 프로젝트 전체 목록입니다.</p>
        </header>
        <main className="min-w-0 pb-16">
          <WorksMdx />
        </main>
        <p className="text-xs text-muted/70">© {new Date().getFullYear()}. 최진슬 All rights reserved.</p>
      </div>
    </div>
  );
};

export default WorksPage;
