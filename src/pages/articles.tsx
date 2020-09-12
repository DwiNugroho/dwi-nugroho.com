import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

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

const Articles: React.FC<PageProps<PropTypes>> = ({ data }) => (
  <Layout>
    <section className="container">
      <section className="list-articles">
        {data.allMarkdownRemark.edges.map((item, index) => (
          <Link
            key={index}
            className="list-articles__item"
            to={item.node.frontmatter.path}
          >
            <Card
              cover={item.node.frontmatter.cover}
              // category={item.node.frontmatter.category}
              title={item.node.frontmatter.title}
              description={item.node.frontmatter.description}
              date={item.node.frontmatter.date}
              tag={item.node.frontmatter.tags}
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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
            tags
            date(formatString: "dddd, DD MMMM YYYY")
          }
        }
      }
    }
  }
`;

export default Articles;
