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
    <section className="width--100">
      <nav
        className="organism-navbar container flex flex--align-center flex--justify-space-between width--100"
        style={{ minHeight: '100px' }}
      >
        <Link to="">
          <h3 className="mb-0">DwiNugroho</h3>
        </Link>
        <section className="component--desktop-visible flex flex--align-center">
          <Link to="" className="organism-navbar__item mx-2">
            <p>Home</p>
          </Link>
          <Link to="" className="organism-navbar__item mx-2">
            <p>Articles</p>
          </Link>
          <Link to="" className="organism-navbar__item mx-2">
            <p>About</p>
          </Link>
        </section>
        <section className="component--desktop-visible flex flex--align-center">
          <a data-tip="LinkedIn" href="" className="organism-navbar__item mx-2">
            <LinkedIn />
          </a>
          <a data-tip="Github" href="" className="organism-navbar__item mx-2">
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
