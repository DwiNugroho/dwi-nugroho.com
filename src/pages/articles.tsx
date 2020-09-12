import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import SEO from '@/components/seo';
import Layout from '@/layouts/default';
import Card from '@/components/card';

type edgesTypes = {
  node: {
    id: string;
    excerpt?: string;
    frontmatter: {
      cover?: {
        childImageSharp: {
          fluid: object;
        };
      };
      title: string;
      path: string;
      description?: string;
      date?: string;
      category?: string;
      tags?: string[];
    };
  };
}[];

type PropTypes = {
  allMarkdownRemark: {
    edges: edgesTypes;
  };
};

const Articles: React.FC<PageProps<PropTypes>> = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <section className="container">
      <section className="list-articles">
        {data.allMarkdownRemark.edges.map((item, index) => (
          <Link
            key={index}
            className="list-articles__item"
            to={item.node.frontmatter.path}
          >
            <Card
              cover={
                item.node.frontmatter.cover
                  ? item.node.frontmatter.cover.childImageSharp.fluid
                  : null
              }
              // category={item.node.frontmatter.category}
              title={item.node.frontmatter.title}
              description={item.node.excerpt}
              date={item.node.frontmatter.date}
              // tag={item.node.frontmatter.tags}
            />
          </Link>
        ))}
      </section>
      <br />
      <br />
      <hr />
    </section>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            date(formatString: "dddd, DD MMMM YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Articles;
