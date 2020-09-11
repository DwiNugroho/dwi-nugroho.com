import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@/layouts/default';
import SEO from '@/components/seo';

interface DataProps {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      author?: string;
      date?: string;
    };
  };
}

const Post: FC<PageProps<DataProps>> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <section className="post-container">
        <h1>{post.frontmatter.title}</h1>
        <h4>{`Posted on ${post.frontmatter.date}`}</h4>
        <br />
        {/* eslint-disable-next-line */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "dddd, DD MMMM YYYY")
        title
      }
    }
  }
`;

export default Post;
