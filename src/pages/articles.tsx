import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import SEO from '@/components/seo';
import Layout from '@/layouts/default';
import Card, { CardTypes } from '@/components/card';

type PropTypes = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        excerpt?: string;
        frontmatter: CardTypes;
      };
    }[];
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
              path={item.node.frontmatter.path}
              cover={item.node.frontmatter.cover}
              // category={item.node.frontmatter.category}
              title={item.node.frontmatter.title}
              description={
                item.node.frontmatter.description || item.node.excerpt
              }
              date={item.node.frontmatter.date}
              tags={item.node.frontmatter.tags}
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
            tags
            description
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
