import * as React from 'react';
import { Link } from 'gatsby';

export interface Props {
  //
}

export const Footer: React.FC<Props> = () => {
  return (
    <section className="organism-footer width--100 container flex flex--wrap flex--align-center flex--justify-center my-5 pt-5">
      {/* <a
        href="https://medium.com/@dwinugrohoo"
        target="_blank"
        className="organism-footer__item mx-3"
      >
        <p>Medium</p>
      </a> */}
      <a
        href="https://facebook.com/pixellpie/"
        target="_blank"
        className="organism-footer__item mx-3"
      >
        <p>Facebook</p>
      </a>
      <a
        href="https://www.instagram.com/dwinugrohoo__/"
        target="_blank"
        className="organism-footer__item mx-3"
      >
        <p>Instagram</p>
      </a>
      <a
        href="https://www.linkedin.com/in/dwi-nugroho/"
        target="_blank"
        className="organism-footer__item mx-3"
      >
        <p>LinkedIn</p>
      </a>
      <a
        href="https://github.com/DwiNugroho"
        target="_blank"
        className="organism-footer__item mx-3"
      >
        <p>Github</p>
      </a>
      <Link to="/rss.xml" className="organism-footer__item mx-3">
        <p>RSS</p>
      </Link>
    </section>
  );
};

Footer.defaultProps = {
  //
};

export default Footer;
