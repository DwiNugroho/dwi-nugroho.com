import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import Layout from '@/layouts/default';
import SEO from '@/components/seo';

import './style.scss';

interface DataProps {
  markdownRemark: {
    html: string;
    timeToRead?: number;
    frontmatter: {
      title: string;
      author?: string;
      date?: string;
      cover?: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}

const Post: FC<PageProps<DataProps>> = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <section className="post-container">
        <h1 className="post-template__title">{post.frontmatter.title}</h1>
        <hr />
        <p className="post-template__date">{`${post.frontmatter.date} • ${post.timeToRead} min read`}</p>
      </section>
      <section className="container post-template__cover">
        {post.frontmatter.cover && (
          <Img
            className="post-template__cover-img"
            fluid={post.frontmatter.cover.childImageSharp.fluid}
            alt={post.frontmatter.title}
            draggable={false}
          />
        )}
      </section>
      <br />
      <br />
      <section className="post-container">
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
      excerpt
      id
      timeToRead
      frontmatter {
        date(formatString: "dddd, DD MMMM YYYY")
        title
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
`;

export default Post;
