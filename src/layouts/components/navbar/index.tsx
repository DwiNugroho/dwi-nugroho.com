import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Menu from '@/api/menu';
import Github from '@/assets/icons/github.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';

import './style.scss';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav className="container navbar">
      <section className="navbar__content">
        <Link to="/" className="navbar__title">
          <h3 className="m-0">{data.site.siteMetadata.title}</h3>
        </Link>
        {Menu.map((item, index) => (
          <Link key={index} to={item.path} className="navbar__menu">
            <p className="m-0">{item.name}</p>
          </Link>
        ))}
      </section>
      <section className="navbar__icons">
        <a
          href="https://www.linkedin.com/in/dwi-nugroho-462126138/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/DwiNugroho"
          rel="noreferrer"
          target="_blank"
        >
          <Github />
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
