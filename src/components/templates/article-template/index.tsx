import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import ReactToolTip from 'react-tooltip';

import Template from '@templates/main';

import Tag from '@atoms/tag';

import LinkedInd from '@/assets/icons/linkedin.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Facebook from '@/assets/icons/facebook.svg';

import './style.scss';

export interface Props extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        path?: string;
        title?: string;
        description?: string;
        date?: string;
        tags?: string[];
        cover?: {
          childImageSharp: {
            fixed: {
              src: string;
            };
          };
        };
      };
      html?: string;
      timeToRead?: string;
      tableOfContents?: string;
    };
    site?: {
      siteMetadata?: {
        siteUrl?: string;
      };
    };
  };
}

export const ArticleTemplate: React.FC<Props> = ({ data }) => {
  const [isClient, setClient] = React.useState(false);

  React.useEffect(() => {
    setClient(true);
  }, []);

  const { markdownRemark, site } = data;

  const disqusConfig = {
    /* Replace PAGE_URL with your post's canonical URL variable */
    url: `${site.siteMetadata.siteUrl}${markdownRemark.frontmatter.path}`,
    /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
    identifier: markdownRemark.frontmatter.path,
    /* Replace PAGE_TITLE with the title of the page */
    title: markdownRemark.frontmatter.title,
  };

  return (
    <Template
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
      image={
        markdownRemark.frontmatter.cover
          ? markdownRemark.frontmatter.cover.childImageSharp.fixed.src
          : ''
      }
      type="article"
    >
      <section className="width--100 background--spring-wood">
        <main className="container py-5">
          <h1>{markdownRemark.frontmatter.title}</h1>
          <h4 className="text--light-black mb-2" style={{ lineHeight: '1.6' }}>
            {markdownRemark.frontmatter.description}
          </h4>
          <section className="flex flex--align-center flex--wrap flex--justify-start width--100">
            {(markdownRemark.frontmatter.tags || []).map((item, index) => (
              <Tag key={index} className="mr-3 mt-3" appearance="outline">
                {item}
              </Tag>
            ))}
            <p className="mb-0 mt-3" style={{ fontSize: '14px' }}>
              {markdownRemark.frontmatter.date || ''} ·
              {` ${markdownRemark.timeToRead}`} min read
            </p>
          </section>
        </main>
      </section>
      <br />
      <br />
      <section className="article-content container flex">
        <section className="article-content__left">
          <section className="article-content__info">
            <p
              className="mb-2 text--lighter-black"
              style={{ fontSize: '14px' }}
            >
              SHARE THIS ARTICLE
            </p>
            <section className="width--100 flex flex--wrap mb-1 mt-3">
              <a
                data-tip="Share to LinkedInd"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.dwi-nugroho.com${markdownRemark.frontmatter.path}`}
                target="_blank"
                className="text--lighter-black mr-3 mb-3"
              >
                <LinkedInd />
              </a>
              <a
                data-tip="Share to Twitter"
                href={`http://twitter.com/share?text=${markdownRemark.frontmatter.title}&url=https://www.dwi-nugroho.com${markdownRemark.frontmatter.path}`}
                target="_blank"
                className="text--lighter-black mr-3 mb-3"
              >
                <Twitter />
              </a>
              <a
                data-tip="Share to Facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.dwi-nugroho.com${markdownRemark.frontmatter.path}&${markdownRemark.frontmatter.title}`}
                target="_blank"
                className="text--lighter-black mr-3 mb-3"
              >
                <Facebook />
              </a>
            </section>
            <section className="width--100 component--desktop-visible">
              <p
                className="mb-2 text--lighter-black"
                style={{ fontSize: '14px' }}
              >
                IN THIS ARTICLE
              </p>
              <section
                dangerouslySetInnerHTML={{
                  __html: markdownRemark.tableOfContents,
                }}
              />
            </section>
          </section>
        </section>
        <div className="mx-4 my-3"></div>
        <section className="width--100">
          <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </section>
      </section>
      <br />
      <br />
      <section className="width--100 container mt-5">
        <Disqus config={disqusConfig} />
      </section>
      {isClient && <ReactToolTip effect="solid" place="bottom" />}
    </Template>
  );
};

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      timeToRead
      tableOfContents
      frontmatter {
        description
        path
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        cover {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      html
    }
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        siteLogo
      }
    }
  }
`;

export default ArticleTemplate;
