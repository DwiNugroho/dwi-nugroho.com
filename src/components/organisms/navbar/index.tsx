import * as React from 'react';
import { Link } from 'gatsby';
import ReactToolTip from 'react-tooltip';

import Github from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';

import './style.scss';

export interface Props {
  //
}

export const Navbar: React.FC<Props> = () => {
  const [isClient, setClient] = React.useState(false);

  React.useEffect(() => {
    setClient(true);
  }, []);

  return (
    <section className="organism-navbar background--white width--100">
      <nav
        className="container flex flex--align-center flex--justify-space-between width--100"
        style={{ minHeight: '84px' }}
      >
        <Link to="/">
          <h3 className="mb-0 text--black">DwiNugroho</h3>
        </Link>
        <section className="component--desktop-visible flex flex--align-center">
          {/* <Link
            to="/"
            className="organism-navbar__item mx-3"
            activeClassName="organism-navbar__item--active"
          >
            <p>Home</p>
          </Link> */}
          <Link
            to="/blog"
            className="organism-navbar__item mx-3"
            activeClassName="organism-navbar__item--active"
          >
            <p>Blog</p>
          </Link>
          {/* <Link
            to="/projects"
            className="organism-navbar__item mx-3"
            activeClassName="organism-navbar__item--active"
          >
            <p>Projects</p>
          </Link> */}
          <Link
            to="/me"
            className="organism-navbar__item mx-3"
            activeClassName="organism-navbar__item--active"
          >
            <p>About Me</p>
          </Link>
        </section>
        <section className="flex flex--align-center">
          <a
            data-tip="LinkedIn"
            href="https://www.linkedin.com/in/dwi-nugroho-462126138/"
            target="_blank"
            className="organism-navbar__item mx-2"
          >
            <LinkedIn />
          </a>
          <a
            data-tip="Github"
            href="https://github.com/DwiNugroho"
            target="_blank"
            className="organism-navbar__item mx-2"
          >
            <Github />
          </a>

          {isClient && <ReactToolTip effect="solid" place="bottom" />}
        </section>
      </nav>
    </section>
  );
};

Navbar.defaultProps = {
  //
};

export default Navbar;
