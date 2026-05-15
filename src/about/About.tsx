const About = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="mt-2 text-xl font-medium leading-snug text-heading">안녕하세요.</h1>
      </header>
      <div className="max-w-[38em] space-y-4 text-pretty">
        <p className="text-lg font-medium leading-snug text-heading">
          사용자 경험의 경계를 넓히는 웹 퍼블리셔, 최진슬 입니다.
        </p>
        <p className="text-base leading-normal text-muted">
          저는 단순한 화면 구현을 넘어, <span className="font-medium text-heading">시멘틱 마크업과 WAI-ARIA</span>
          {
            '(aria-label 등 사용하여 스크린 리더와 같은 보조 기기에 보이지 않는 요소를 설명 또는 의미를 명확히 전달하는 접근성 기술)를 기반으로 누구나 소외되지 않는 웹 접근성을 설계합니다.'
          }
        </p>
        <p className="text-base leading-normal text-muted">
          최근에는 사내 <span className="font-medium text-heading">디자인 시스템을 제로베이스에서 구축</span>하여
          컴포넌트 라이브러리의 고도화와 운영을 전담하며 시스템의 효율성을 증명하고 있습니다.
        </p>
        <p className="text-base leading-normal text-muted">
          이전에는{' '}
          <span className="font-medium text-heading">
            공공기관 사이트 부터 전시, 교육, 게임 등 다양한 UI/UX를 요구하는 반응형 사이트를 웹퍼블리싱
          </span>{' '}
          하였습니다. 이러한 경험들과 빠른 적응력으로 단시간 내에 완성도 높은 결과물을 도출해낼 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default About;
