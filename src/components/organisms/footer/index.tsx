import * as React from 'react';

import './style.scss';

export interface Props {
  //
}

export const Navbar: React.FC<Props> = () => {
  return (
    <section className="organism-footer width--100 container flex flex--wrap flex--align-center flex--justify-center my-5 pt-5">
      <a href="" className="organism-footer__item mx-3">
        <p>Medium</p>
      </a>
      <a href="" className="organism-footer__item mx-3">
        <p>Facebook</p>
      </a>
      <a href="" className="organism-footer__item mx-3">
        <p>Instagram</p>
      </a>
      <a href="" className="organism-footer__item mx-3">
        <p>LinkedIn</p>
      </a>
      <a href="" className="organism-footer__item mx-3">
        <p>Github</p>
      </a>
    </section>
  );
};

Navbar.defaultProps = {
  //
};

export default Navbar;
