const About = () => {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">About</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-heading">소개</h1>
      </header>
      <div className="max-w-prose space-y-4 leading-relaxed text-muted">
        <p>
          <a
            href="https://brittanychiang.com/"
            className="text-accent underline-offset-4 transition-colors hover:text-heading hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Brittany Chiang
          </a>
          의 포트폴리오를 벤치마킹한 다크 네이비 톤 레이아웃입니다. 왼쪽 메뉴에서{' '}
          <span className="text-heading">Career</span>와 <span className="text-heading">Works</span>는 각각{' '}
          <code className="rounded-md bg-navy-deep/80 px-1.5 py-0.5 font-mono text-sm text-accent">
            src/content/career.mdx
          </code>
          ,{' '}
          <code className="rounded-md bg-navy-deep/80 px-1.5 py-0.5 font-mono text-sm text-accent">
            src/content/works.mdx
          </code>
          로 내용을 채울 수 있습니다.
        </p>
        <p className="text-sm text-muted/90">
          이 소개 문단은 <code className="text-accent">src/about/About.tsx</code>에서 수정하면 됩니다.
        </p>
      </div>
    </section>
  );
};

export default About;
