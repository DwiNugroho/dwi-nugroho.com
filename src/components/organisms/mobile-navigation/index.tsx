import * as React from 'react';
import { Link } from 'gatsby';

import Home from '@/assets/icons/home.svg';
import Blog from '@/assets/icons/file-text.svg';
import Projects from '@/assets/icons/briefcase.svg';
import AboutMe from '@/assets/icons/user.svg';

import './style.scss';

export interface Props {
  //
}

export const MobileNav: React.FC<Props> = () => {
  return (
    <section className="organism-mobile-nav width--100">
      <section className="flex container">
        <Link
          to="/"
          className="organism-mobile-nav__item flex flex--column flex--align-center p-1 pt-2"
          activeClassName="organism-mobile-nav__item--active"
        >
          <Home />
          <p className="text--center mb-0 mt-1">Home</p>
        </Link>
        <Link
          to="/blog"
          className="organism-mobile-nav__item flex flex--column flex--align-center p-1 pt-2"
          activeClassName="organism-mobile-nav__item--active"
        >
          <Blog />
          <p className="text--center mb-0 mt-1">Blog</p>
        </Link>
        <Link
          to="/projects"
          className="organism-mobile-nav__item flex flex--column flex--align-center p-1 pt-2"
          activeClassName="organism-mobile-nav__item--active"
        >
          <Projects />
          <p className="text--center mb-0 mt-1">Projects</p>
        </Link>
        <Link
          to="/me"
          className="organism-mobile-nav__item flex flex--column flex--align-center p-1 pt-2"
          activeClassName="organism-mobile-nav__item--active"
        >
          <AboutMe />
          <p className="text--center mb-0 mt-1">About Me</p>
        </Link>
      </section>
    </section>
  );
};

MobileNav.defaultProps = {
  //
};

export default MobileNav;
