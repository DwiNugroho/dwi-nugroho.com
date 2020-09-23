import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

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

const IndexPage: React.FC<PageProps<PropTypes>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <h1>Popular Articles</h1>
      <hr />
      <section className="home-articles">
        {data.allMarkdownRemark.edges.map((item, index) => (
          <Link
            key={index}
            className={`home-articles__item ${
              data.allMarkdownRemark.edges.length > 2 &&
              index === 0 &&
              'home-articles__item--width-100'
            }`}
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
    </section>
  </Layout>
);

export const query = graphql`
  query MyQuery {
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
                fluid(maxWidth: 930) {
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

export default IndexPage;
