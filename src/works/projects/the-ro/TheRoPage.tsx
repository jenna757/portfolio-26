import { ExpandableScreenshot } from '../../../components/portfolio/ExpandableScreenshot';
import WorksSubpageLayout from '../../WorksSubpageLayout';

import logoSrc from '../../../assets/img/gravity/the_ro/thero_logo.webp';
import pageDesktopSrc from '../../../assets/img/gravity/the_ro/page.webp';
import pageMobileSrc from '../../../assets/img/gravity/the_ro/page_mo.webp';
import demoVideoSrc from '../../../assets/img/gravity/the_ro/full.mp4';

const ROLES = [
  '더 라그나로크 사전예약 및 공식 사이트 반응형 퍼블리싱',
  '확실한 컨셉 전달을 위하여 스크롤시 캐릭터가 움직이도록 코드 구현',
  '메인 진입시 각 캐릭터들 생동감을 위하여 gif로 요소 세팅',
] as const;

const TECHNOLOGIES = ['Javascript', 'SCSS', 'GSAP', 'AOS', 'HTML'] as const;

const figureClassName = 'overflow-hidden rounded border-2 border-border-subtle bg-navy-panel/40 shadow-lg';

const TheRoPage = () => {
  return (
    <WorksSubpageLayout
      backHref="/works"
      backLabel="Works 목록"
      title="THE 라그나로크"
      subtitle="더 라그나로크 사전예약·공식 사이트 구축·유지보수(2024.06 — 2024.09)"
    >
      <div className="space-y-16">
        <section className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <img
            src={logoSrc}
            alt="THE 라그나로크 로고"
            width={280}
            height={120}
            className="h-auto w-48 max-w-full sm:w-56"
            decoding="async"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">역할</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-heading text-sm leading-normal">
              {ROLES.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="기술 스택">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech}>
                  <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent">사이트 미리보기</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            메인 비주얼 GSAP 모션, 스크롤 인터랙션(AOS), 사전예약 CTA 흐름을 중심으로 퍼블리싱했습니다.
          </p>
          <figure className={`${figureClassName} mt-6`}>
            <video
              src={demoVideoSrc}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-navy-deep object-cover"
              aria-label="THE 라그나로크 사이트 전체 화면 녹화"
            />
          </figure>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent">스크린샷</h2>
          <div className="mt-6 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            <ExpandableScreenshot
              key="the-ro-desktop"
              screenshotKey="the-ro-desktop"
              src={pageDesktopSrc}
              alt="THE 라그나로크 데스크톱 화면"
              label="Desktop"
            />
            <ExpandableScreenshot
              key="the-ro-mobile"
              screenshotKey="the-ro-mobile"
              src={pageMobileSrc}
              alt="THE 라그나로크 모바일 화면"
              label="Mobile"
              imgClassName="mx-auto block h-auto w-auto max-w-xs"
              collapsedMaxHeightClass="max-h-[32rem]"
            />
          </div>
        </section>
      </div>
    </WorksSubpageLayout>
  );
};

export default TheRoPage;
