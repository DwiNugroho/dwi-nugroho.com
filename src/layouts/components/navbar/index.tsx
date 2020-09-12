import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { navbar } from '@/api/menu';
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
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        {navbar.map((item, index) => (
          <Link key={index} to={item.path} className="navbar__menu">
            <p>{item.name}</p>
          </Link>
        ))}
      </section>
      <section className="navbar__icons">
        <a
          href="https://www.linkedin.com/in/dwi-nugroho-462126138/"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/DwiNugroho"
          rel="noopener noreferrer"
          target="_blank"
          title="Github"
        >
          <Github />
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
