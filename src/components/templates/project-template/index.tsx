import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import ReactToolTip from 'react-tooltip';
import GatsbyImage, { FluidObject } from 'gatsby-image';

import Template from '@templates/main';

import Button from '@atoms/button';
import Img from '@atoms/img';

import LinkedInd from '@/assets/icons/linkedin.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Facebook from '@/assets/icons/facebook.svg';

import Stacks from '@/api/stacks';

import Code from '@/assets/icons/code.svg';
import LinkIcon from '@/assets/icons/link-2.svg';

import './style.scss';

export interface Props extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        path?: string;
        title?: string;
        description?: string;
        source?: string;
        stacks?: string[];
        live?: string;
        cover?: {
          childImageSharp: {
            fluid: FluidObject;
            fixed: {
              src: string;
            };
          };
        };
      };
      excerpt?: string;
      html?: string;
    };
    site?: {
      siteMetadata?: {
        siteUrl?: string;
      };
    };
  };
}

export const ProjectTemplate: React.FC<Props> = ({ data }) => {
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
      description={markdownRemark.excerpt}
      image={
        markdownRemark.frontmatter.cover
          ? markdownRemark.frontmatter.cover.childImageSharp.fixed.src
          : ''
      }
      type="website"
    >
      <br />
      <section className="container">
        <section className="project-md__thumbnail width--100 ">
          <a
            href={markdownRemark.frontmatter.cover.childImageSharp.fluid.src}
            target="_blank"
            className="project-md__img"
          >
            {isClient && (
              <GatsbyImage
                fluid={markdownRemark.frontmatter.cover.childImageSharp.fluid}
                style={{ borderRadius: '4px' }}
              />
            )}
          </a>
        </section>
      </section>
      <br />
      <br />
      <section className="project-content container flex flex--row-reverse">
        <section className="project-content__left">
          <section className="project-content__info">
            <p
              className="mb-2 text--lighter-black"
              style={{ fontSize: '14px' }}
            >
              SHARE THIS PROJECT
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
              {markdownRemark.frontmatter.source ? (
                <a href={markdownRemark.frontmatter.source} target="_blank">
                  <Button
                    size="large"
                    appearance="outline"
                    color="blue"
                    className="flex flex--justify-center flex--align-center"
                    block
                  >
                    <Code style={{ width: '20px' }} />
                    <div className="mx-1"></div>
                    <p className="mb-0">Source Code</p>
                  </Button>
                </a>
              ) : (
                <Button
                  size="large"
                  appearance="outline"
                  className="flex flex--justify-center flex--align-center"
                  block
                  disabled
                >
                  <Code style={{ width: '20px' }} />
                  <div className="mx-1"></div>
                  <p className="mb-0">Source Code</p>
                </Button>
              )}
              <div className="my-3"></div>
              {markdownRemark.frontmatter.live ? (
                <a href={markdownRemark.frontmatter.live} target="_blank">
                  <Button
                    size="large"
                    color="blue"
                    className="flex flex--justify-center flex--align-center"
                    block
                  >
                    <LinkIcon style={{ width: '20px' }} />
                    <div className="mx-1"></div>
                    <p className="mb-0">Visit Project</p>
                  </Button>
                </a>
              ) : (
                <Button
                  size="large"
                  className="flex flex--justify-center flex--align-center"
                  disabled
                  block
                >
                  <LinkIcon style={{ width: '20px' }} />
                  <div className="mx-1"></div>
                  <p className="mb-0">Visit Project</p>
                </Button>
              )}
            </section>
            <p
              className="mb-2 text--lighter-black mt-4"
              style={{ fontSize: '14px' }}
            >
              TECH STACKS
            </p>
            {(markdownRemark.frontmatter.stacks || []).map((item, index) => {
              return (
                <section
                  key={index}
                  className="stack width--100 flex flex--align-center mb-3"
                >
                  <a
                    href={Stacks[(item || '').toLowerCase()].link}
                    className="stack__image mr-2 "
                  >
                    <Img
                      src={Stacks[(item || '').toLowerCase()].logo}
                      contain
                    />
                  </a>
                  <a href={Stacks[(item || '').toLowerCase()].link}>{item}</a>
                </section>
              );
            })}
          </section>
        </section>
        <div className="mx-4 my-3"></div>
        <section className="width--100">
          <main className="width--100">
            <h2>{markdownRemark.frontmatter.title}</h2>
            <h4
              className="text--light-black mb-2"
              style={{ lineHeight: '1.6' }}
            >
              {markdownRemark.frontmatter.description}
            </h4>
            <section className="width--100 flex mt-4 component--mobile-visible mb-3">
              {markdownRemark.frontmatter.source ? (
                <a href={markdownRemark.frontmatter.source} target="_blank">
                  <Button
                    size="large"
                    appearance="outline"
                    color="blue"
                    className="flex flex--align-center flex--justify-center"
                  >
                    <Code style={{ width: '20px' }} />
                    <div className="mx-1"></div>
                    <p className="mb-0">Source Code</p>
                  </Button>
                </a>
              ) : (
                <Button
                  size="large"
                  appearance="outline"
                  className="flex flex--align-center flex--justify-center"
                  disabled
                >
                  <Code style={{ width: '20px' }} />
                  <div className="mx-1"></div>
                  <p className="mb-0">Source Code</p>
                </Button>
              )}
              <div className="mx-2"></div>
              {markdownRemark.frontmatter.live ? (
                <a href={markdownRemark.frontmatter.live} target="_blank">
                  <Button
                    size="large"
                    color="blue"
                    className="flex flex--align-center flex--justify-center"
                  >
                    <LinkIcon style={{ width: '20px' }} />
                    <div className="mx-1"></div>
                    <p className="mb-0">Visit Project</p>
                  </Button>
                </a>
              ) : (
                <Button
                  size="large"
                  className="flex flex--align-center flex--justify-center"
                  disabled
                >
                  <LinkIcon style={{ width: '20px' }} />
                  <div className="mx-1"></div>
                  <p className="mb-0">Visit Project</p>
                </Button>
              )}
            </section>
          </main>
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
  query ProjectBySlug($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        description
        path
        title
        source
        stacks
        live
        cover {
          childImageSharp {
            fluid(maxWidth: 1140, quality: 100) {
              src
              aspectRatio
              base64
              originalName
              originalImg
              presentationHeight
              presentationWidth
              sizes
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
            fixed {
              src
            }
          }
        }
      }
      excerpt(pruneLength: 320)
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

export default ProjectTemplate;
