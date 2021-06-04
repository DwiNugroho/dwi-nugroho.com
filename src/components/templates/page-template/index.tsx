import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Template from '@templates/main';

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
    <Template
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
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
    </Template>
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
