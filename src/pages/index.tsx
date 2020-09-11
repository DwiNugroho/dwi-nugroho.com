import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import SEO from '@/components/seo';
import Layout from '@/layouts/default';
import Card from '@/components/card';

type edgesTypes = {
  node: {
    id: string;
    frontmatter: {
      cover?: string;
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

const IndexPage: React.FC<PageProps<PropTypes>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section className="container">
      <h1>Popular Articles</h1>
      <hr />
      <section className="article-list">
        {data.allMarkdownRemark.edges.map((item, index) => (
          <Link
            key={index}
            className="article-list__item"
            to={item.node.frontmatter.path}
          >
            <Card
              cover={item.node.frontmatter.cover}
              category={item.node.frontmatter.category}
              title={item.node.frontmatter.title}
              description={item.node.frontmatter.description}
              date={item.node.frontmatter.date}
              tag={item.node.frontmatter.tags}
            />
          </Link>
        ))}
      </section>
    </section>
  </Layout>
);

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
            tags
            date(formatString: "dddd, DD MMMM YYYY")
            category
          }
        }
      }
    }
  }
`;

export default IndexPage;
