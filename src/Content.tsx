import About from './about/About';
import Career from './career/Career';
import Works from './works/Works';

import type { Page } from './nav';

type ContentProps = {
  page: Page;
};

const Content = ({ page }: ContentProps) => {
  switch (page) {
    case 'about':
      return <About />;
    case 'career':
      return <Career />;
    case 'works':
      return <Works />;
    default: {
      const _exhaustive: never = page;
      return _exhaustive;
    }
  }
};

export default Content;
