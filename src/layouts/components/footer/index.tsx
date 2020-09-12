import React from 'react';
import { Link } from 'gatsby';

import { footer } from '@/api/menu';

import './style.scss';

const Footer = () => (
  <section className="footer">
    <footer className="container">
      {footer.map((item, index) =>
        item.path ? (
          <Link className="footer__menu" key={index} to={item.path}>
            {item.name}
          </Link>
        ) : (
          <a
            className="footer__menu"
            key={index}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.name}
          </a>
        )
      )}
    </footer>
  </section>
);

export default Footer;
