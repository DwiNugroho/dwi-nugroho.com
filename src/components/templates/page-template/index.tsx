import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Seo from '@molecules/seo';

import Navbar from '@organisms/navbar';
import Footer from '@organisms/footer';
import MobileNav from '@organisms/mobile-navigation';

import './style.scss';

export interface Props extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        path?: string;
        title?: string;
        description?: string;
      };
      html: string;
    };
  };
}

export const PageTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data;
  return (
    <section className="width--100">
      <Seo title={markdownRemark.frontmatter.title} />
      <Navbar />

      <section
        className="width--100"
        style={{ minHeight: '74vh', marginTop: '84px' }}
      >
        <section className="width--100 background--spring-wood">
          <section className="container py-5">
            <h1>{markdownRemark.frontmatter.title}</h1>
            <h4 className="text--light-black">
              {markdownRemark.frontmatter.description}
            </h4>
          </section>
        </section>
        <br />
        <section className="width--100 container">
          <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </section>
      </section>
      <Footer />
      <br />
      <br />
      <section className="width--100 component--mobile-visible">
        <MobileNav />
      </section>
    </section>
  );
};

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        description
        path
        title
      }
      html
    }
  }
`;

export default PageTemplate;
