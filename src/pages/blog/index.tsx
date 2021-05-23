import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Template from '@templates/main';
import PostCard from '@molecules/post-card';

import './style.scss';

const Blog: React.FC<PageProps> = ({ data }) => {
  return (
    <Template title="Blog">
      <section className="width--100 background--spring-wood">
        <section className="container py-5">
          <h1>Blog.</h1>
          <p>
            Posts, tutorials, snippets, musings, notes, and everything else. The
            archive of everything I've written.
          </p>
        </section>
      </section>
      <br />
      <section className="container">
        <section className="articles flex flex--wrap width--100">
          {(data as any).allMarkdownRemark.nodes.map((item, index) => (
            <section key={`article-${index}`} className="articles__item">
              <PostCard
                title={item.frontmatter.title}
                thumbnail={
                  item.frontmatter.cover
                    ? item.frontmatter.cover.childImageSharp.fluid
                    : null
                }
                description={item.excerpt}
                path={item.frontmatter.path}
                tags={item.frontmatter.tags}
                info={`${item.frontmatter.date || ''} · ${
                  item.timeToRead
                } min read`}
              />
            </section>
          ))}
        </section>
      </section>
    </Template>
  );
};

export const pageQuery = graphql`
  query AllArticles {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "article" } } }) {
      nodes {
        frontmatter {
          title
          tags
          path
          description
          date(formatString: "MMM DD, YYYY")
          cover {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 280)
        children {
          id
        }
        timeToRead
      }
    }
  }
`;

export default Blog;
